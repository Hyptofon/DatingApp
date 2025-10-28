document.addEventListener('DOMContentLoaded', function() {
    const frame = document.querySelector('.frame');

    /**
     * Запускає анімацію і переходить на нову URL після її завершення.
     * @param {string} url - URL для переходу.
     * @param {string} animationName - Назва @keyframes анімації.
     * @param {string} animationProps - Властивості анімації (тривалість, функція часу і т.д.).
     */
    function transitionTo(url, animationName, animationProps) {
        // Якщо .frame не існує, просто переходимо за посиланням
        if (!frame) {
            window.location.href = url;
            return;
        }

        // Функція, яка виконається після завершення анімації
        const handleAnimationEnd = () => {
            frame.removeEventListener('animationend', handleAnimationEnd);
            window.location.href = url;
        };
        
        frame.addEventListener('animationend', handleAnimationEnd);
        frame.style.animation = `${animationName} ${animationProps}`;
    }

    // --- Анімація появи контенту при завантаженні сторінки ---
    if (frame) {
        const isAuthPage = frame.classList.contains('frame--auth');
        // Для сторінок логіну/реєстрації використовуємо fadeIn, для інших - slideInRight
        const animation = isAuthPage 
            ? 'fadeIn 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards'
            : 'slideInRight 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards';
        frame.style.animation = animation;
    }

    // --- Делегування подій для всіх кліків на body ---
    document.body.addEventListener('click', function(e) {
        const target = e.target;

        // Кнопки "SKIP" та "NEXT" (.btn-skip, .btn-next)
        if (target.matches('.btn-skip, .btn-next')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            transitionTo(href, 'slideOutLeft', '0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards');
        }

        // Крапки пагінації (.dot)
        else if (target.matches('.dot') && !target.classList.contains('active')) {
            e.preventDefault();
            const href = target.dataset.target;
            if (href) {
                transitionTo(href, 'slideOutLeft', '0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards');
            }
        }
        
        // Посилання в табах та внизу форм (.tab-btn, .bottom-text a)
        else if (target.matches('.tab-btn, .bottom-text a')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            // Переходимо тільки якщо це не поточна сторінка
            if (href && !window.location.pathname.endsWith(href)) {
                transitionTo(href, 'fadeOut', '0.3s ease-out forwards');
            }
        }
    });

    // --- Обробка відправки форми ---
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button[type="submit"]');
            if (!button || button.disabled) return;

            const originalText = button.textContent;
            button.textContent = 'LOADING...';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                alert('Form submitted! (This is a demo)');
            }, 1500);
        });
    });
});