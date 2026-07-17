export function createLoginPage() {
  return `
    <section class="page-enter flex min-h-screen items-center justify-center bg-background px-3 py-8 text-on-background sm:px-6 lg:px-8">
      <main class="auth-card page-enter relative w-full overflow-hidden rounded-[24px] border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 md:p-12">
        <div class="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-primary-fixed opacity-10 blur-3xl"></div>

        <div class="relative z-10 mb-section-gap flex flex-col items-center">
          <div class="float-icon mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-container text-primary-container shadow-sm">
            <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">ecg_heart</span>
          </div>
          <h1 class="mb-2 text-center font-headline-lg text-headline-lg text-on-surface">Welcome Back</h1>
          <p class="max-w-xs text-center font-body-md text-body-md text-on-surface-variant">Securely sign in to your Heart Guardian account.</p>
        </div>

        <form class="relative z-10 flex flex-col gap-stack-gap" data-login-form>
          <div>
            <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="email">Email Address</label>
            <input id="email" name="email" type="email" required autocomplete="email" placeholder="alex@example.com" class="input-clinical block w-full appearance-none rounded-[20px] px-4 py-3 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
          </div>

          <div>
            <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="password">Password</label>
            <div class="relative">
              <input id="password" name="password" type="password" required autocomplete="current-password" placeholder="Enter password" class="input-clinical block w-full appearance-none rounded-[20px] px-4 py-3 pr-12 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
              <button type="button" aria-label="Show password" class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-primary" onclick="window.togglePassword('password', 'password-visibility-icon')">
                <span id="password-visibility-icon" class="material-symbols-outlined text-[20px]">visibility</span>
              </button>
            </div>
          </div>

          <div class="-mt-2 flex justify-end">
            <a href="#/forgot" class="font-label-lg text-label-lg text-primary transition-colors hover:text-surface-tint">Forgot password?</a>
          </div>

          <div class="mt-section-gap">
            <button type="submit" class="animated-button group relative flex w-full justify-center rounded-[20px] border border-transparent bg-primary-container px-4 py-4 font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-200 hover:bg-surface-tint hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2">
              Sign In
            </button>
          </div>
        </form>

        <div class="relative z-10 mt-section-gap border-t border-surface-variant pt-6 text-center">
          <p class="font-body-md text-body-md text-on-surface-variant">
            Don't have an account?
            <a href="#/register" class="ml-1 font-label-lg text-label-lg text-primary transition-colors hover:text-surface-tint">Sign Up</a>
          </p>
        </div>
      </main>
    </section>
  `;
}
