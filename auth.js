document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.tab-buttons');
    const formSwitchLinks = document.querySelectorAll('[data-form]');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    let isAnimating = false;

    const switchView = (targetView) => {

        if (isAnimating) {
            return;
        }

        const currentView = targetView === 'login' ? 'register' : 'login';
        const currentForm = document.getElementById(`${currentView}-form`);
        const targetForm = document.getElementById(`${targetView}-form`);

        if (targetForm.classList.contains('active-form')) {
            return;
        }

        isAnimating = true;
        tabContainer.classList.toggle('register-active', targetView === 'register');
        document.querySelector(`.tab-btn[data-form="${currentView}"]`).classList.remove('active');
        document.querySelector(`.tab-btn[data-form="${targetView}"]`).classList.add('active');

        currentForm.classList.add('form-exit');
        currentForm.classList.remove('active-form');

        const onExitAnimationEnd = () => {
            currentForm.classList.remove('form-exit');
            currentForm.classList.add('hidden');

            targetForm.classList.remove('hidden');
            targetForm.classList.add('form-enter', 'active-form');
            
            targetForm.addEventListener('animationend', () => {
                targetForm.classList.remove('form-enter');
                isAnimating = false; 
            }, { once: true });
        };
    
        currentForm.addEventListener('animationend', onExitAnimationEnd, { once: true });
    };

    formSwitchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(link.dataset.form);
        });
    });

    const initialView = window.location.hash === '#register' ? 'register' : 'login';
    
    if (initialView === 'register') {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerForm.classList.add('active-form');
        tabContainer.classList.add('register-active');
        document.querySelector('.tab-btn[data-form="login"]').classList.remove('active');
        document.querySelector('.tab-btn[data-form="register"]').classList.add('active');
    } else {
        loginForm.classList.add('active-form');
    }
});