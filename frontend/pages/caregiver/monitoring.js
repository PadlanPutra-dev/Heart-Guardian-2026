function getUserName(authState, fallback = 'Alex') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createCaregiverMonitoringPage(authState) {
  const displayName = getUserName(authState, 'Alex');

  return `
    <div class="min-h-screen bg-background text-on-surface antialiased pb-24">
      <div class="sticky top-0 z-[60] hidden items-center justify-between bg-error px-margin-screen py-3 text-on-error" id="caregiver-emergency-banner">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">warning</span>
          <span class="font-label-lg text-label-lg uppercase tracking-wider">Critical Alert Detected</span>
        </div>
        <button class="font-label-lg text-label-lg underline">View Details</button>
      </div>

      <header class="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-outline-variant bg-surface-container-high">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">monitor_heart</span>
          </div>
          <div>
            <h1 class="font-headline-md text-headline-md font-bold text-primary">CareMonitor</h1>
          </div>
        </div>
        <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-surface-container-low active:scale-95">
          <span class="material-symbols-outlined text-on-surface-variant">notifications</span>
        </button>
      </header>

      <main class="mx-auto max-w-2xl space-y-stack-gap px-margin-screen pt-6">
        <section class="mb-4">
          <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Monitoring</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">Monitor your loved one&apos;s heart condition in real time.</p>
        </section>

        <section class="flex items-center justify-between rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">person</span>
            </div>
            <div>
              <h3 class="font-label-lg text-label-lg text-on-surface">${displayName}</h3>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Father, 72 Years Old</p>
            </div>
          </div>
          <div class="text-right">
            <div class="flex items-center justify-end gap-1.5">
              <div class="h-2 w-2 rounded-full bg-primary pulse-soft"></div>
              <span class="font-label-sm text-label-sm font-semibold text-primary">Connected</span>
            </div>
            <p class="mt-0.5 font-label-sm text-label-sm text-on-surface-variant">Last sync: Just now</p>
          </div>
        </section>

        <div class="grid grid-cols-1 gap-stack-gap md:grid-cols-2">
          <section class="flex flex-col justify-between rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
            <div class="flex items-start justify-between">
              <span class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Heart Rate</span>
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <span class="material-symbols-outlined text-[20px] text-primary">favorite</span>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-baseline gap-1">
                <span class="text-[44px] font-bold leading-none text-on-surface">72</span>
                <span class="font-label-lg text-label-lg text-on-surface-variant">BPM</span>
              </div>
              <div class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary">
                <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span class="font-label-sm text-label-sm font-bold">Stable</span>
              </div>
            </div>
          </section>

          <section class="rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
            <span class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Condition</span>
            <div class="mt-4 flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20">
                <span class="material-symbols-outlined text-primary">ecg</span>
              </div>
              <div>
                <h4 class="font-body-lg text-body-lg font-bold text-on-surface">Normal Sinus Rhythm</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant">No irregular beats detected</p>
              </div>
            </div>
          </section>
        </div>

        <section class="rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
          <div class="mb-6 flex items-center justify-between">
            <h3 class="font-label-lg text-label-lg font-bold text-on-surface">Live Rhythm</h3>
            <div class="flex gap-1 rounded-lg bg-surface-container-low p-1">
              <button class="rounded-md bg-white px-4 py-1.5 font-label-sm text-label-sm font-bold text-primary shadow-sm">Live</button>
              <button class="rounded-md px-4 py-1.5 font-label-sm text-label-sm text-on-surface-variant transition-colors hover:bg-surface-container-high">Today</button>
              <button class="rounded-md px-4 py-1.5 font-label-sm text-label-sm text-on-surface-variant transition-colors hover:bg-surface-container-high">Week</button>
            </div>
          </div>
          <div class="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-primary/5 bg-primary/[0.02]">
            <svg class="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 400 100">
              <path d="M0,50 L400,50 M50,0 L50,100 M100,0 L100,100 M150,0 L150,100 M200,0 L200,100 M250,0 L250,100 M300,0 L300,100 M350,0 L350,100" fill="none" stroke="#0B7A28" stroke-width="0.5"></path>
            </svg>
            <svg class="relative h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 100">
              <path class="ecg-line" d="M0,50 L40,50 L45,40 L50,60 L55,50 L80,50 L85,20 L95,80 L105,50 L140,50 L145,40 L150,60 L155,50 L180,50 L185,20 L195,80 L205,50 L240,50 L245,40 L250,60 L255,50 L280,50 L285,20 L295,80 L305,50 L340,50 L345,40 L350,60 L355,50 L400,50" fill="none" stroke="#0B7A28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
            </svg>
          </div>
          <div class="mt-4 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span>Real-time streaming via Guardian-V1</span>
            <span class="flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-primary"></span> Live</span>
          </div>
        </section>

        <section class="flex gap-4 rounded-card border border-primary/20 bg-primary/5 p-padding-card">
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
          </div>
          <p class="font-body-md text-body-md leading-relaxed text-on-primary-fixed-variant">
            ${displayName}'s heart rhythm remains stable. No unusual activity detected in the last 24 hours. His average resting heart rate is within healthy ranges for his profile.
          </p>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center justify-between">
            <h3 class="font-label-lg text-label-lg font-bold text-on-surface">Medication Progress</h3>
            <span class="font-label-sm text-label-sm text-on-surface-variant">1/2 Completed</span>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span class="material-symbols-outlined text-primary">pill</span>
                </div>
                <div>
                  <h4 class="font-body-md text-body-md font-bold text-on-surface">Lisinopril (10mg)</h4>
                  <p class="font-label-sm text-label-sm font-medium text-primary">Completed at 8:00 AM</p>
                </div>
              </div>
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary">
                <span class="material-symbols-outlined text-[18px]">check</span>
              </div>
            </div>
            <div class="flex items-center justify-between rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
                  <span class="material-symbols-outlined text-on-secondary-container">schedule</span>
                </div>
                <div>
                  <h4 class="font-body-md text-body-md font-bold text-on-surface">Atorvastatin (20mg)</h4>
                  <p class="font-label-sm text-label-sm text-on-surface-variant">Upcoming at 9:00 PM</p>
                </div>
              </div>
              <button class="rounded-full border border-primary/20 px-4 py-1.5 font-label-sm text-label-sm font-bold text-primary hover:bg-primary/5">Remind</button>
            </div>
          </div>
        </section>

        <section class="pb-8">
          <h3 class="mb-4 font-label-lg text-label-lg font-bold text-on-surface">Quick Actions</h3>
          <div class="grid grid-cols-4 gap-3">
            <button class="group flex flex-col items-center gap-2 transition-all active:scale-90">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-highest transition-colors group-hover:bg-primary-fixed">
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary">call</span>
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Call Alex</span>
            </button>
            <button class="group flex flex-col items-center gap-2 transition-all active:scale-90">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-highest transition-colors group-hover:bg-primary-fixed">
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary">medical_services</span>
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Call Dr.</span>
            </button>
            <button class="group flex flex-col items-center gap-2 transition-all active:scale-90">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-highest transition-colors group-hover:bg-primary-fixed">
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary">history</span>
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant">History</span>
            </button>
            <button class="group flex flex-col items-center gap-2 transition-all active:scale-90">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-error/10 transition-colors group-hover:bg-error">
                <span class="material-symbols-outlined text-error group-hover:text-on-error" style="font-variation-settings: 'FILL' 1;">emergency</span>
              </div>
              <span class="font-label-sm text-label-sm font-bold text-error">SOS</span>
            </button>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl border-t border-outline-variant bg-surface px-4 py-2 shadow-[0px_-4px_20px_rgba(0,0,0,0.04)]">
        <a class="flex flex-col items-center justify-center px-4 py-1.5 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-high" href="#/dashboard">
          <span class="material-symbols-outlined">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex flex-col items-center justify-center rounded-[20px] bg-secondary-container px-4 py-1.5 text-on-secondary-container duration-200 active:scale-90" href="#/caregiver-monitoring">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">ecg</span>
          <span class="font-label-sm text-label-sm">Monitoring</span>
        </a>
        <a class="flex flex-col items-center justify-center px-4 py-1.5 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-high" href="#">
          <span class="material-symbols-outlined">warning</span>
          <span class="font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex flex-col items-center justify-center px-4 py-1.5 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-high" href="#">
          <span class="material-symbols-outlined">history</span>
          <span class="font-label-sm text-label-sm">History</span>
        </a>
        <a class="flex flex-col items-center justify-center px-4 py-1.5 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-high" href="#/profile">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
