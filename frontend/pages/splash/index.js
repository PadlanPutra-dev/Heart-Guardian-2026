export function createSplashScreen() {
  return `
    <section class="flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-primary-container text-center text-white selection:bg-primary-fixed selection:text-primary">
      <div class="h-16"></div>

      <div class="fade-in flex flex-1 flex-col items-center justify-center space-y-6">
        <div class="group relative">
          <div class="absolute -inset-4 rounded-full bg-white/5 blur-2xl transition-all duration-700 group-hover:bg-white/10"></div>
          <img
            id="splash-logo"
            alt="Heart Guardian Logo"
            class="logo-float relative h-32 w-32 cursor-pointer object-cover drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] md:h-40 md:w-40"
            src="./assets/image/screen.png"
          />
        </div>

        <div class="mt-4 text-center">
          <h1 class="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-white md:font-headline-lg md:text-headline-lg">
            Heart Guardian
          </h1>
          <div class="mx-auto mt-2 h-1 w-12 rounded-full bg-on-primary-container opacity-50"></div>
        </div>
      </div>

      <div class="fade-in pb-12 text-center" style="animation-delay: 0.5s;">
        <p class="font-label-sm text-label-sm uppercase tracking-[0.35em] text-on-primary-container opacity-80">
          Powered by AI
        </p>
      </div>

      <div class="pointer-events-none fixed inset-0 overflow-hidden">
        <div class="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-white/5 blur-[120px]"></div>
        <div class="absolute bottom-[-5%] right-[-5%] h-[30%] w-[30%] rounded-full bg-white/5 blur-[100px]"></div>
      </div>
    </section>
  `;
}

export function attachSplashInteractions() {
  const logo = document.getElementById('splash-logo');

  if (!logo) {
    return;
  }

  const goToLogin = () => {
    window.location.hash = '#/login';
  };

  logo.addEventListener('click', goToLogin);
  logo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToLogin();
    }
  });
  logo.setAttribute('tabindex', '0');
  logo.setAttribute('role', 'button');
}
