document.addEventListener('DOMContentLoaded', function() {
    const frame = document.querySelector('.frame');
    function transitionTo(url, animationName, animationProps) {
        if (!frame) {
            window.location.href = url;
            return;
        }

        const handleAnimationEnd = () => {
            frame.removeEventListener('animationend', handleAnimationEnd);
            window.location.href = url;
        };
        
        frame.addEventListener('animationend', handleAnimationEnd);
        frame.style.animation = `${animationName} ${animationProps}`;
    }

    if (frame) {
        const isAuthPage = frame.classList.contains('frame--auth');
        const animation = isAuthPage 
            ? 'fadeIn 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards'
            : 'slideInRight 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards';
        frame.style.animation = animation;
    }

    document.body.addEventListener('click', function(e) {
        const target = e.target;

        if (target.matches('.btn-skip, .btn-next')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            transitionTo(href, 'slideOutLeft', '0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards');
        }

        else if (target.matches('.dot') && !target.classList.contains('active')) {
            e.preventDefault();
            const href = target.dataset.target;
            if (href) {
                transitionTo(href, 'slideOutLeft', '0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards');
            }
        }

        else if (target.matches('.tab-btn, .bottom-text a')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            if (href && !window.location.pathname.endsWith(href)) {
                transitionTo(href, 'fadeOut', '0.3s ease-out forwards');
            }
        }
    });

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