function getUserName(authState, fallback = 'Emily') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createCaregiverAlertsPage(authState) {
  const displayName = getUserName(authState, 'Emily');

  return `
    <div class="min-h-screen bg-surface pb-24 font-body-md text-on-surface">
      <header class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[28px] text-primary" style="font-variation-settings: 'FILL' 1;">monitor_heart</span>
          <div>
            <h1 class="font-headline-md text-headline-md text-on-surface">Alerts</h1>
            <p class="-mt-1 text-label-sm text-on-surface-variant">Caregiver: ${displayName}</p>
          </div>
        </div>
        <button class="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-surface-container-high active:scale-95">
          <span class="material-symbols-outlined text-on-surface-variant">notifications</span>
          <span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-error"></span>
        </button>
      </header>

      <main class="mx-auto max-w-2xl space-y-section-gap px-margin-screen pt-stack-gap">
        <section>
          <p class="font-body-lg text-on-surface-variant">Stay informed about your loved one&apos;s heart condition and respond quickly to vital changes.</p>
        </section>

        <section class="grid grid-cols-3 gap-stack-gap">
          <div class="flex flex-col items-center rounded-card border-l-4 border-error bg-surface-container-lowest p-padding-card shadow-soft">
            <span class="font-headline-lg text-headline-lg text-error">1</span>
            <span class="text-label-sm text-on-surface-variant">Critical</span>
          </div>
          <div class="flex flex-col items-center rounded-card border-l-4 border-tertiary bg-surface-container-lowest p-padding-card shadow-soft">
            <span class="font-headline-lg text-headline-lg text-tertiary">2</span>
            <span class="text-label-sm text-on-surface-variant">Warning</span>
          </div>
          <div class="flex flex-col items-center rounded-card border-l-4 border-primary bg-surface-container-lowest p-padding-card shadow-soft">
            <span class="font-headline-lg text-headline-lg text-primary">12</span>
            <span class="text-label-sm text-on-surface-variant">Resolved</span>
          </div>
        </section>

        <section>
          <h2 class="mb-stack-gap flex items-center gap-2 font-label-lg text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px] text-error">emergency</span>
            CRITICAL ALERT
          </h2>
          <div class="rounded-card border-2 border-error bg-surface-container-lowest p-6 shadow-soft pulse-red">
            <div class="mb-6 flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-error-container shadow-sm">
                  <span class="material-symbols-outlined text-[28px] text-error">person</span>
                </div>
                <div>
                  <h3 class="font-headline-md text-headline-md text-on-surface">Alex Mercer</h3>
                  <div class="flex items-center gap-2 font-semibold text-error">
                    <span class="material-symbols-outlined text-[18px]">favorite</span>
                    <span class="text-headline-md">112 BPM</span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <span class="mb-1 inline-block rounded-full bg-error-container px-3 py-1 font-bold text-label-sm text-on-error-container">POSSIBLE AFIB</span>
                <p class="text-label-sm text-on-surface-variant">08:45 AM</p>
              </div>
            </div>
            <div class="mb-6 rounded-xl border border-error/10 bg-error-container/20 p-4">
              <p class="mb-1 font-medium text-on-surface">AI Diagnostic Insight:</p>
              <p class="font-body-md text-on-surface-variant">Irregular heartbeat pattern detected. Sustained high heart rate for 8 minutes during sleep cycle. Possible Atrial Fibrillation event.</p>
            </div>
            <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
              <button class="flex h-12 items-center justify-center gap-2 rounded-full bg-primary font-label-lg text-white transition-all active:scale-95 hover:bg-on-primary-fixed-variant">
                <span class="material-symbols-outlined">call</span>
                Call Alex
              </button>
              <button class="flex h-12 items-center justify-center gap-2 rounded-full bg-secondary-container font-label-lg text-primary transition-all active:scale-95 hover:bg-secondary-fixed">
                <span class="material-symbols-outlined">medical_services</span>
                Call Doctor
              </button>
              <button class="flex h-12 items-center justify-center gap-2 rounded-full bg-error font-label-lg text-white transition-all active:scale-95 hover:bg-red-800">
                <span class="material-symbols-outlined">emergency_share</span>
                Emergency SOS
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 class="mb-stack-gap font-label-lg text-on-surface-variant">WARNING ALERTS</h2>
          <div class="space-y-stack-gap">
            <div class="flex gap-4 rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tertiary-container/20 text-tertiary">
                <span class="material-symbols-outlined">trending_up</span>
              </div>
              <div class="flex-grow">
                <div class="flex justify-between">
                  <h4 class="font-body-lg text-on-surface">Elevated Heart Rate</h4>
                  <span class="text-label-sm text-on-surface-variant">10:15 AM</span>
                </div>
                <p class="mt-1 font-body-md text-on-surface-variant">Alex&apos;s heart rate was 95 BPM during rest. Higher than usual baseline.</p>
              </div>
            </div>
            <div class="flex gap-4 rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tertiary-container/20 text-tertiary">
                <span class="material-symbols-outlined">pill</span>
              </div>
              <div class="flex-grow">
                <div class="flex justify-between">
                  <h4 class="font-body-lg text-on-surface">Missed Medication</h4>
                  <span class="text-label-sm text-on-surface-variant">08:00 AM</span>
                </div>
                <p class="mt-1 font-body-md text-on-surface-variant">Lisinopril (10mg) not logged. Daily compliance critical for BP control.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="mb-stack-gap font-label-lg text-on-surface-variant">RECOMMENDED ACTIONS</h2>
          <div class="grid grid-cols-1 gap-stack-gap">
            <div class="flex items-center justify-between rounded-card border border-primary/10 bg-primary/5 p-padding-card">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">bedtime</span>
                <p class="font-body-md text-on-surface-variant">Encourage Alex to rest for 15 minutes.</p>
              </div>
              <button class="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white">
                <span class="material-symbols-outlined text-[18px]">check</span>
              </button>
            </div>
            <div class="flex items-center justify-between rounded-card border border-primary/10 bg-primary/5 p-padding-card">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">notifications_active</span>
                <p class="font-body-md text-on-surface-variant">Remind him to take his morning medication.</p>
              </div>
              <button class="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white">
                <span class="material-symbols-outlined text-[18px]">check</span>
              </button>
            </div>
            <div class="flex items-center justify-between rounded-card border border-primary/10 bg-primary/5 p-padding-card">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">contact_support</span>
                <p class="font-body-md text-on-surface-variant">Contact Dr. Sarah if the high heart rate persists.</p>
              </div>
              <button class="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white">
                <span class="material-symbols-outlined text-[18px]">check</span>
              </button>
            </div>
          </div>
        </section>

        <section class="pb-8">
          <h2 class="mb-stack-gap font-label-lg text-on-surface-variant">EVENT TIMELINE</h2>
          <div class="relative ml-4 space-y-8 border-l-2 border-outline-variant pl-8">
            <div class="relative">
              <span class="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-error ring-4 ring-error/20"></span>
              <div class="flex flex-col">
                <span class="font-bold text-label-sm text-error">08:45 AM</span>
                <p class="mt-1 font-body-md text-on-surface">Possible Arrhythmia Detected</p>
                <p class="text-label-sm text-on-surface-variant">System analysis confirmed irregular rhythm.</p>
              </div>
            </div>
            <div class="relative">
              <span class="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20"></span>
              <div class="flex flex-col">
                <span class="font-bold text-label-sm text-primary">08:46 AM</span>
                <p class="mt-1 font-body-md text-on-surface">Doctor Notified</p>
                <p class="text-label-sm text-on-surface-variant">Alert dispatched to Dr. Sarah’s clinic dashboard.</p>
              </div>
            </div>
            <div class="relative">
              <span class="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20"></span>
              <div class="flex flex-col">
                <span class="font-bold text-label-sm text-primary">08:48 AM</span>
                <p class="mt-1 font-body-md text-on-surface">Emergency Alert sent to Emily (Caregiver)</p>
                <p class="text-label-sm text-on-surface-variant">Confirmation of receipt at 08:49 AM.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-xl border-t border-outline-variant bg-surface px-2 pb-safe shadow-[0px_-4px_20px_rgba(0,0,0,0.04)]">
        <a class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-low" href="#/dashboard">
          <span class="material-symbols-outlined">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-low" href="#/caregiver-monitoring">
          <span class="material-symbols-outlined">insights</span>
          <span class="font-label-sm text-label-sm">Monitoring</span>
        </a>
        <a class="flex flex-col items-center justify-center rounded-full bg-secondary-container px-4 py-1 text-on-secondary-container duration-200 active:scale-90" href="#/caregiver-alerts">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">warning</span>
          <span class="font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-low" href="#">
          <span class="material-symbols-outlined">history</span>
          <span class="font-label-sm text-label-sm">History</span>
        </a>
        <a class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-all duration-200 active:scale-90 hover:bg-surface-container-low" href="#/profile">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
