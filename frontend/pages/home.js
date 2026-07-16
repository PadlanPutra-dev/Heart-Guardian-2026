export function createHomePage() {
  return `
    <section class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-8">
          <div class="inline-flex items-center rounded-full border border-primary/20 bg-secondary-container px-3 py-1 text-sm font-medium text-primary">
            Smart healthcare monitoring • Responsive by design
          </div>
          <div class="space-y-4">
            <h1 class="text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
              Track your heart health with confidence.
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-on-surface-variant">
              Heart Guardian brings vitals, alerts, and history into one calm experience designed for modern users on any device.
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <a href="#/register" class="rounded-full bg-primary-container px-6 py-3 text-center font-semibold text-on-primary transition hover:bg-primary">Create account</a>
            <a href="#/login" class="rounded-full border border-outline/30 px-6 py-3 text-center font-semibold text-on-surface transition hover:border-primary hover:text-primary">Sign in</a>
          </div>
          <div class="flex flex-wrap gap-6 text-sm text-on-surface-variant">
            <span>• Real-time alerts</span>
            <span>• Health summary</span>
            <span>• Secure account</span>
          </div>
        </div>

        <div class="rounded-[2rem] border border-outline/20 bg-surface-container-lowest p-6 shadow-health-card">
          <div class="rounded-[1.5rem] border border-outline/20 bg-surface-container p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-on-surface-variant">Latest update</p>
                <p class="text-2xl font-semibold text-on-surface">Stable wellness</p>
              </div>
              <div class="rounded-full bg-secondary-container px-3 py-1 text-sm font-semibold text-primary">Normal</div>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-outline/20 bg-surface-container-lowest p-4">
                <p class="text-sm text-on-surface-variant">Heart rate</p>
                <p class="mt-2 text-3xl font-semibold text-on-surface">76 bpm</p>
              </div>
              <div class="rounded-2xl border border-outline/20 bg-surface-container-lowest p-4">
                <p class="text-sm text-on-surface-variant">SpO₂</p>
                <p class="mt-2 text-3xl font-semibold text-on-surface">98%</p>
              </div>
              <div class="rounded-2xl border border-outline/20 bg-surface-container-lowest p-4">
                <p class="text-sm text-on-surface-variant">Temperature</p>
                <p class="mt-2 text-3xl font-semibold text-on-surface">36.7°C</p>
              </div>
              <div class="rounded-2xl border border-outline/20 bg-surface-container-lowest p-4">
                <p class="text-sm text-on-surface-variant">Status</p>
                <p class="mt-2 text-3xl font-semibold text-on-surface">Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-3xl border border-outline/20 bg-surface-container-lowest p-6 shadow-health-card">
          <h3 class="text-xl font-semibold text-on-surface">About Heart Guardian</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">A clear system for monitoring health trends without overwhelming the user.</p>
        </div>
        <div class="rounded-3xl border border-outline/20 bg-surface-container-lowest p-6 shadow-health-card">
          <h3 class="text-xl font-semibold text-on-surface">Features overview</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">Real-time monitoring, health history, notifications, and personalized settings together in one place.</p>
        </div>
        <div class="rounded-3xl border border-outline/20 bg-surface-container-lowest p-6 shadow-health-card">
          <h3 class="text-xl font-semibold text-on-surface">How it works</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">Connect your device, review the data, and act quickly when anomalies appear.</p>
        </div>
      </div>
    </section>
  `;
}
