export function createDoctorAlertsPage(authState) {
  return `
    <div class="min-h-screen bg-background text-on-background">
      <header class="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 overflow-hidden rounded-full border-2 border-primary-fixed-dim">
            <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6t7n2qGSNqanQwJqJeGueD7TwvI24-tamZ1FsgxFFCnAooDkeO3K2gBqSlQcyIWDnIXLKSZaOfCMWl9h8dk7l2zM0avSX1Hoe14b_YvWUDmSmal1WD3ddoWcIrWaZb_MzQbnpYBnYLy6Yk6V56_iSDCundweomEchgYBqMXlU2lFWMm7uvU9ZACYuUlMD1AgL5RiHNAIafDLuAyqQ7n8PXXGOS0UzmNl-KlyGCBXqeGS83mwCxCRIUg" alt="Doctor portrait" />
          </div>
          <h1 class="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary">CardiaSync</h1>
        </div>
        <button class="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-transform active:scale-95">
          <span class="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main class="dashboard-shell mx-auto w-full safe-bottom px-margin-screen pt-20 lg:px-8">
        <section class="mb-section-gap">
          <h2 class="mb-1 font-headline-lg text-headline-lg text-on-background">Alerts</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">AI-generated patient alerts requiring your attention.</p>
        </section>

        <section class="mb-stack-gap grid grid-cols-2 gap-stack-gap md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <p class="mb-1 font-label-sm text-label-sm uppercase text-on-surface-variant">Total Today</p>
            <p class="font-display-lg text-display-lg text-primary">12</p>
          </div>
          <div class="rounded-[20px] border border-error/10 bg-error-container p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <p class="mb-1 font-label-sm text-label-sm uppercase text-on-error-container">Critical</p>
            <p class="font-display-lg text-display-lg text-error">3</p>
          </div>
          <div class="rounded-[20px] bg-tertiary-fixed p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <p class="mb-1 font-label-sm text-label-sm uppercase text-on-tertiary-fixed-variant">Warning</p>
            <p class="font-display-lg text-display-lg text-tertiary">5</p>
          </div>
          <div class="rounded-[20px] bg-secondary-container p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <p class="mb-1 font-label-sm text-label-sm uppercase text-on-secondary-fixed-variant">Resolved</p>
            <p class="font-display-lg text-display-lg text-on-secondary-fixed-variant">4</p>
          </div>
        </section>

        <section class="mb-stack-gap flex gap-inline-gap overflow-x-auto pb-4">
          <button class="flex-shrink-0 rounded-full bg-primary px-5 py-2 font-label-lg text-label-lg text-on-primary transition-all active:scale-95">All</button>
          <button class="flex-shrink-0 rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-all hover:bg-outline-variant/30 active:scale-95">Critical</button>
          <button class="flex-shrink-0 rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-all hover:bg-outline-variant/30 active:scale-95">Warning</button>
          <button class="flex-shrink-0 rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-all hover:bg-outline-variant/30 active:scale-95">Resolved</button>
        </section>

        <section class="mb-section-gap">
          <div class="mb-stack-gap flex items-center gap-2">
            <span class="h-6 w-2 rounded-full bg-error"></span>
            <h3 class="font-headline-md text-headline-md text-on-background">Critical Alerts</h3>
          </div>
          <div class="mb-stack-gap overflow-hidden rounded-[20px] border-l-4 border-error bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="p-padding-card">
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <p class="font-headline-md text-headline-md text-on-background">Alex Mercer</p>
                  <p class="font-label-sm text-label-sm text-on-surface-variant">ID: HG-88291</p>
                </div>
                <div class="rounded-full bg-error-container px-3 py-1 font-label-lg text-label-lg text-error">08:45 AM</div>
              </div>
              <div class="mb-4 grid grid-cols-2 gap-4">
                <div class="rounded-xl bg-surface-container-low p-3">
                  <div class="mb-1 flex items-center gap-1 text-error">
                    <span class="material-symbols-outlined text-[18px]">favorite</span>
                    <span class="font-label-lg text-label-lg">HR</span>
                  </div>
                  <p class="font-headline-md text-headline-md text-on-background">112 <span class="text-label-sm font-normal">BPM</span></p>
                </div>
                <div class="rounded-xl bg-surface-container-low p-3">
                  <div class="mb-1 flex items-center gap-1 text-primary">
                    <span class="material-symbols-outlined text-[18px]">psychology</span>
                    <span class="font-label-lg text-label-lg">Confidence</span>
                  </div>
                  <p class="font-headline-md text-headline-md text-on-background">94%</p>
                </div>
              </div>
              <div class="mb-4 rounded-xl border border-error/10 bg-error/5 p-3">
                <p class="mb-1 font-label-sm text-label-sm font-bold uppercase text-error">AI Detected</p>
                <p class="font-body-md text-body-md font-semibold text-on-background">Possible AFib (Atrial Fibrillation)</p>
              </div>
              <div class="flex gap-stack-gap">
                <button class="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 font-label-lg text-label-lg text-on-primary transition-all active:scale-95">
                  <span class="material-symbols-outlined text-[20px]">visibility</span>
                  View Patient
                </button>
                <button class="flex flex-1 items-center justify-center gap-2 rounded-full bg-secondary-container py-3 font-label-lg text-label-lg text-on-secondary-container transition-all active:scale-95">
                  <span class="material-symbols-outlined text-[20px]">call</span>
                  Call Patient
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-section-gap">
          <div class="mb-stack-gap flex items-center gap-2">
            <span class="h-6 w-2 rounded-full bg-tertiary"></span>
            <h3 class="font-headline-md text-headline-md text-on-background">Warning Alerts</h3>
          </div>
          <div class="overflow-hidden rounded-[20px] border-l-4 border-tertiary bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="p-padding-card">
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <p class="font-headline-md text-headline-md text-on-background">Emma Thompson</p>
                  <p class="font-label-sm text-label-sm text-on-surface-variant">HR: 88 BPM</p>
                </div>
                <div class="rounded-full bg-tertiary-fixed px-3 py-1 font-label-lg text-label-lg text-on-tertiary-fixed-variant">Pending Review</div>
              </div>
              <p class="mb-4 font-body-md text-body-md text-on-background">
                <span class="font-semibold text-tertiary">AI Summary:</span> Irregular rhythm detected during light exercise. Review Recommendation: Schedule follow-up.
              </p>
              <div class="relative mb-2 py-2">
                <div class="absolute bottom-4 left-[11px] top-4 w-0.5 bg-outline-variant/30"></div>
                <div class="relative z-10 mb-4 flex items-center gap-4">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">check</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-label-lg text-label-lg text-on-background">AI Detection</p>
                    <p class="text-[10px] uppercase text-on-surface-variant">Completed</p>
                  </div>
                </div>
                <div class="relative z-10 mb-4 flex items-center gap-4">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">check</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-label-lg text-label-lg text-on-background">Doctor Notified</p>
                    <p class="text-[10px] uppercase text-on-surface-variant">Completed</p>
                  </div>
                </div>
                <div class="relative z-10 mb-4 flex items-center gap-4">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-surface-container-high text-primary">
                    <div class="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
                  </div>
                  <div class="flex-1">
                    <p class="font-label-lg text-label-lg text-on-background">Caregiver Notified</p>
                    <p class="text-[10px] font-bold uppercase text-primary">In Progress</p>
                  </div>
                </div>
                <div class="relative z-10 flex items-center gap-4 opacity-40">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-outline-variant bg-surface-container-high"></div>
                  <div class="flex-1">
                    <p class="font-label-lg text-label-lg text-on-background">Patient Status Updated</p>
                    <p class="text-[10px] uppercase text-on-surface-variant">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-section-gap">
          <div class="mb-stack-gap flex items-center gap-2">
            <span class="h-6 w-2 rounded-full bg-primary"></span>
            <h3 class="font-headline-md text-headline-md text-on-background">Resolved Alerts</h3>
          </div>
          <div class="overflow-hidden rounded-[20px] border-l-4 border-primary/30 bg-surface-container-lowest opacity-80 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-center justify-between p-padding-card">
              <div>
                <p class="font-body-lg text-body-lg font-semibold text-on-background">Marcus Chen</p>
                <div class="flex items-center gap-1 text-primary">
                  <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                  <p class="font-label-sm text-label-sm">Vitals Stabilized</p>
                </div>
              </div>
              <div class="text-right">
                <p class="font-label-sm text-label-sm text-on-surface-variant">Resolved at</p>
                <p class="font-label-lg text-label-lg text-on-background">07:30 AM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 left-0 right-0 z-50 mx-auto grid h-20 w-full max-w-6xl grid-cols-5 items-center rounded-t-[24px] border-t border-outline-variant/60 bg-white/95 px-2 py-2 pb-safe shadow-[0px_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/dashboard" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">home</span>
          <span class="mt-1 whitespace-nowrap font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-patients" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">group</span>
          <span class="mt-1 whitespace-nowrap font-label-sm text-label-sm">Patients</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-calendar" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">calendar_today</span>
          <span class="mt-1 whitespace-nowrap font-label-sm text-label-sm">Appointments</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-alerts" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">notification_important</span>
          <span class="mt-1 whitespace-nowrap font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-profile" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">person</span>
          <span class="mt-1 whitespace-nowrap font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
