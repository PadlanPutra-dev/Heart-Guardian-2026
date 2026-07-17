export function createSplashScreen() {
  return `
    <section id="splash-screen" class="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[#0b7a28] px-5 py-6 text-center text-white selection:bg-primary-fixed selection:text-primary">
      <div class="fade-in relative z-10 flex w-full max-w-[420px] flex-col items-center justify-center space-y-6 sm:space-y-7">
        <div class="group relative">
          <img
            id="splash-logo"
            alt="Heart Guardian Logo"
            class="logo-float relative h-36 w-36 cursor-pointer rounded-[30px] object-contain shadow-[0_20px_45px_rgba(0,0,0,0.26)] ring-1 ring-white/25 sm:h-44 sm:w-44 md:h-52 md:w-52"
            src="./assets/image/screen.png"
            role="button"
            tabindex="0"
            aria-label="Mulai aplikasi"
          />
        </div>

        <div class="text-center">
          <h1 class="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-white md:font-headline-lg md:text-headline-lg">
            Heart Guardian
          </h1>
          <div class="mx-auto mt-2 h-1 w-14 rounded-full bg-on-primary-container opacity-60"></div>
        </div>
      </div>

      <div class="fade-in relative z-10 mt-6 px-6 text-center sm:mt-8" style="animation-delay: 0.5s;">
        <p class="font-label-sm text-label-sm uppercase tracking-[0.35em] text-on-primary-container opacity-80">
          Powered by AI
        </p>
        <p class="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-white/85">
          Ketuk di mana saja untuk memulai
        </p>
      </div>

      <div class="pointer-events-none fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-[#0b7a28]"></div>
      </div>
    </section>
  `;
}

export function attachSplashInteractions() {
  const splashScreen = document.getElementById('splash-screen');
  const logo = document.getElementById('splash-logo');

  if (!splashScreen) {
    return;
  }

  const goToLogin = () => {
    window.location.hash = '#/login';
  };

  splashScreen.addEventListener('click', goToLogin);

  if (logo) {
    logo.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goToLogin();
      }
    });
  }
}
