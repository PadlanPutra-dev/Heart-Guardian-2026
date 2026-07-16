export function createForgotPage() {
  return `
    <section class="flex min-h-screen items-center justify-center bg-background px-6 py-8 text-on-background sm:px-8 lg:px-10">
      <main class="relative w-full max-w-[480px] overflow-hidden rounded-[20px] bg-surface-container-lowest p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-12">
        <div class="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-primary-fixed opacity-10 blur-3xl"></div>

        <div class="relative z-10 mb-section-gap flex flex-col items-center">
          <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-container text-primary-container shadow-sm">
            <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">lock_reset</span>
          </div>
          <h1 class="mb-2 text-center font-headline-lg text-headline-lg text-on-surface">Forgot Password?</h1>
          <p class="max-w-xs text-center font-body-md text-body-md text-on-surface-variant">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
        </div>

        <form class="relative z-10 flex flex-col gap-stack-gap" data-forgot-form>
          <div>
            <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="email">Email Address</label>
            <div class="relative">
              <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="material-symbols-outlined text-outline" style="font-size: 20px;">mail</span>
              </span>
              <input id="email" name="email" type="email" required autocomplete="email" placeholder="patient@example.com" class="input-clinical block w-full appearance-none rounded-[20px] py-3 pl-10 pr-4 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
            </div>
          </div>

          <div class="min-h-[32px]"></div>

          <button type="submit" class="group relative flex w-full items-center justify-center gap-2 rounded-[20px] border border-transparent bg-primary-container px-4 py-4 font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-200 hover:bg-surface-tint hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2">
            Send Reset Link
            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
          </button>
        </form>

        <div class="relative z-10 mt-section-gap border-t border-surface-variant pt-6 text-center">
          <p class="font-body-md text-body-md text-on-surface-variant">
            Remembered your password?
            <a href="#/login" class="ml-1 font-label-lg text-label-lg text-primary transition-colors hover:text-surface-tint">Back to Login</a>
          </p>
        </div>
      </main>
    </section>
  `;
}
