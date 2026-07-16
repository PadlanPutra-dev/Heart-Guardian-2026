export function createForgotSuccessPage() {
  return `
    <section class="flex min-h-screen items-center justify-center bg-background px-6 py-8 text-on-background sm:px-8 lg:px-10">
      <main class="relative w-full max-w-[480px] overflow-hidden rounded-[20px] bg-surface-container-lowest p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-12">
        <div class="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-primary-fixed opacity-10 blur-3xl"></div>

        <div class="relative z-10 mb-section-gap flex flex-col items-center">
          <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-container text-primary-container shadow-sm">
            <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
          </div>
          <h1 class="mb-2 text-center font-headline-lg text-headline-lg text-on-surface">Check Your Email</h1>
          <p class="max-w-xs text-center font-body-md text-body-md text-on-surface-variant">We've sent a password reset link to your email address. Please check your inbox and follow the instructions.</p>
        </div>

        <div class="relative z-10 flex flex-col gap-stack-gap">
          <button class="w-full rounded-[20px] bg-secondary-container px-6 py-3.5 font-label-lg text-label-lg text-primary transition-colors hover:bg-secondary-fixed" onclick="window.location.hash = '#/login'">
            Back to Login
          </button>
          <div class="pt-4 text-center">
            <span class="font-body-md text-body-md text-on-surface-variant">Didn't receive email?</span>
            <button class="ml-1 font-label-lg text-label-lg text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-surface-tint" onclick="window.location.hash = '#/forgot'">
              Resend
            </button>
          </div>
        </div>
      </main>
    </section>
  `;
}
