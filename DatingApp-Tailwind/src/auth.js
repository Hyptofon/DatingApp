document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.tab-buttons');
    const formSwitchLinks = document.querySelectorAll('[data-form]');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    let isAnimating = false;

    // Helper functions to manage classes safely
    const showForm = (form) => {
        form.classList.remove('hidden');
        form.classList.add('active-form');
    };

    const hideForm = (form) => {
        form.classList.add('hidden');
        form.classList.remove('active-form');
    };

    const switchView = (targetView) => {
        if (isAnimating) {
            return;
        }

        // Визначаємо поточну форму
        const currentView = targetView === 'login' ? 'register' : 'login';
        const currentForm = document.getElementById(`${currentView}-form`);
        const targetForm = document.getElementById(`${targetView}-form`);

        // Якщо цільова форма вже активна - нічого не робимо
        if (targetForm.classList.contains('active-form')) {
            return;
        }

        isAnimating = true;

        // 1. Оновлюємо таби (слайдер)
        tabContainer.classList.toggle('register-active', targetView === 'register');
        document.querySelector(`.tab-btn[data-form="${currentView}"]`).classList.remove('active');
        document.querySelector(`.tab-btn[data-form="${targetView}"]`).classList.add('active');

        // 2. Анімація виходу поточної форми
        // Додаємо клас анімації безпосередньо
        currentForm.classList.add('animate-form-fade-out');

        const onExitAnimationEnd = () => {
            // Очищаємо слухач подій
            currentForm.removeEventListener('animationend', onExitAnimationEnd);

            // Ховаємо поточну форму та прибираємо клас анімації
            currentForm.classList.remove('animate-form-fade-out');
            hideForm(currentForm);

            // 3. Анімація появи нової форми
            showForm(targetForm);
            targetForm.classList.add('animate-form-fade-in');

            const onEnterAnimationEnd = () => {
                targetForm.removeEventListener('animationend', onEnterAnimationEnd);
                targetForm.classList.remove('animate-form-fade-in');
                isAnimating = false;
            };

            targetForm.addEventListener('animationend', onEnterAnimationEnd);
        };

        currentForm.addEventListener('animationend', onExitAnimationEnd);
    };

    // Навішуємо події на кнопки
    formSwitchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(link.dataset.form);
        });
    });

    // Початковий стан при завантаженні сторінки
    const initialView = window.location.hash === '#register' ? 'register' : 'login';

    if (initialView === 'register') {
        hideForm(loginForm);
        showForm(registerForm);
        tabContainer.classList.add('register-active');
        document.querySelector('.tab-btn[data-form="login"]').classList.remove('active');
        document.querySelector('.tab-btn[data-form="register"]').classList.add('active');
    } else {
        showForm(loginForm);
        hideForm(registerForm);
    }
});