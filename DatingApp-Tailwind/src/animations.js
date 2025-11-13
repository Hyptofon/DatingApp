document.addEventListener('DOMContentLoaded', function() {
    const frame = document.querySelector('.frame');

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    function transitionTo(url, animationClass) {
        if (!frame) {
            window.location.href = url;
            return;
        }

        const handleAnimationEnd = () => {
            frame.removeEventListener('animationend', handleAnimationEnd);
            window.location.href = url;
        };

        frame.addEventListener('animationend', handleAnimationEnd);
        frame.classList.add(animationClass);
    }

    if (frame) {
        const isAuthPage = frame.classList.contains('frame--auth');
        const animationClass = isAuthPage ? 'animate-fade-in' : 'animate-slide-in-right';
        frame.classList.add(animationClass);
    }

    document.body.addEventListener('click', function(e) {
        const target = e.target;

        if (target.matches('.btn-skip, .btn-next')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            transitionTo(href, 'animate-slide-out-left');
        }

        else if (target.matches('.dot') && !target.classList.contains('bg-[--color-primary]')) {
            e.preventDefault();
            const href = target.dataset.target;
            if (href) {
                transitionTo(href, 'animate-slide-out-left');
            }
        }

        else if (target.matches('.tab-btn, .bottom-text a')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            if (href && !window.location.pathname.endsWith(href)) {
                transitionTo(href, 'animate-fade-out');
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

    window.addEventListener('scroll', function() {
        window.scrollTo(0, 0);
    });
});