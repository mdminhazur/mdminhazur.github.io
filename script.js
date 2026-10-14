tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        navy: {
                            800: '#0f172a',
                            900: '#0b0f19',
                            950: '#05070a'
                        },
                        emerald: {
                            400: '#34d399',
                            500: '#10b981',
                        }
                    },
                    animation: {
                        'float': 'float 4s ease-in-out infinite',
                        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        pulseGlow: {
                            '0%, 100%': { opacity: '0.4' },
                            '50%': { opacity: '0.8' },
                        }
                    }
                }
            }
        }
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Graphic Design Filter Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button styles
                filterBtns.forEach(b => {
                    b.classList.remove('bg-emerald-500', 'text-navy-950', 'shadow-md', 'shadow-emerald-500/20');
                    b.classList.add('glass-panel', 'text-slate-300');
                });
                btn.classList.remove('glass-panel', 'text-slate-300');
                btn.classList.add('bg-emerald-500', 'text-navy-950', 'shadow-md', 'shadow-emerald-500/20');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });

        // Contact Form Submission Handler (Custom Modal/Message without alert)
        function handleFormSubmit(e) {
            e.preventDefault();
            const successMsg = document.getElementById('form-success-msg');
            successMsg.classList.remove('hidden');
            document.getElementById('contact-form').reset();
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }