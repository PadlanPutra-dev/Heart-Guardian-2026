export function createPasswordResetSuccessNotification() {
  return `
    <section class="flex min-h-screen flex-col bg-background text-on-background">
      <header class="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <button
          type="button"
          class="flex scale-95 items-center justify-center rounded-full p-2 text-primary transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onclick="window.location.hash = '#/login'"
        >
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0, 'wght' 300;">arrow_back</span>
        </button>

        <div class="flex-1 pr-10 text-center font-headline-md text-headline-md font-bold text-primary">
          Heart Guardian
        </div>
      </header>

      <main class="flex flex-1 flex-col items-center justify-center px-margin-screen py-12 md:py-24">
        <div class="relative flex w-full max-w-md flex-col items-center overflow-hidden rounded-[20px] border border-surface-container bg-white p-padding-card text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl"></div>

          <div class="mb-4 mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary-fixed/20 ring-8 ring-primary-fixed/10">
            <span class="material-symbols-outlined text-5xl text-primary" style="font-variation-settings: 'FILL' 0, 'wght' 300;">check_circle</span>
          </div>

          <div class="flex flex-col space-y-stack-gap">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
              Check Your Email
            </h1>
            <p class="mx-auto max-w-sm font-body-lg text-body-lg text-on-surface-variant">
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
            </p>
          </div>

          <div class="flex w-full flex-col space-y-stack-gap pb-8 pt-4">
            <button
              type="button"
              class="flex w-full items-center justify-center gap-2 rounded-[20px] bg-secondary px-6 py-3.5 font-label-lg text-label-lg text-on-secondary transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              onclick="window.location.hash = '#/login'"
            >
              Back to Login
            </button>

            <div class="flex flex-col items-center justify-center space-y-2 pt-4">
              <span class="font-body-md text-body-md text-on-surface-variant">Didn't receive email?</span>
              <button
                type="button"
                class="font-label-lg text-label-lg text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary-container focus:outline-none"
                onclick="window.location.hash = '#/forgot'"
              >
                Resend
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  `;
}
