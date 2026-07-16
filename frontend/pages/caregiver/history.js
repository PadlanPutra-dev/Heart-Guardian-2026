function getUserName(authState, fallback = 'Emily') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createCaregiverHistoryPage(authState) {
  const displayName = getUserName(authState, 'Emily');

  return `
    <div class="min-h-screen bg-[linear-gradient(180deg,#f8fbf8_0%,#f4f7fa_100%)] pb-24 text-on-background">
      <header class="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant/40 bg-white/85 px-margin-screen backdrop-blur-md">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-outline-variant">
            <span class="material-symbols-outlined text-[22px] text-primary" style="font-variation-settings: 'FILL' 1;">monitor_heart</span>
          </div>
          <div>
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Heart Guardian</h1>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="material-symbols-outlined text-on-surface-variant transition-opacity duration-200 hover:opacity-80">search</button>
          <button class="material-symbols-outlined text-on-surface-variant transition-opacity duration-200 hover:opacity-80">notifications</button>
        </div>
      </header>

      <main class="mx-auto flex w-full max-w-6xl flex-col px-margin-screen py-6 lg:px-8">
        <section class="mb-section-gap">
          <h2 class="font-headline-lg text-headline-lg text-on-surface">History</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">Track your loved one&apos;s health journey.</p>
        </section>

        <section class="mb-section-gap">
          <div class="flex items-center gap-4 rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
            <div class="h-20 w-20 overflow-hidden rounded-xl shadow-sm">
              <div class="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                <span class="material-symbols-outlined text-[36px]">person</span>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="font-headline-md text-headline-md text-on-surface">Alex Mercer</h3>
                  <div class="mt-1 flex items-center gap-2">
                    <span class="rounded-full bg-secondary-container px-2 py-0.5 text-[11px] font-semibold text-on-secondary-container">Father</span>
                    <span class="text-[13px] text-on-surface-variant">72 Years Old</span>
                  </div>
                </div>
                <button class="material-symbols-outlined text-outline">more_vert</button>
              </div>
              <p class="mt-3 flex items-center gap-1 text-[12px] text-outline">
                <span class="material-symbols-outlined text-[14px]">calendar_today</span> Connected Since Oct 2023
              </p>
            </div>
          </div>
        </section>

        <section class="mb-section-gap overflow-x-auto whitespace-nowrap -mx-margin-screen px-margin-screen pb-2 custom-scrollbar">
          <div class="flex gap-2">
            <button class="rounded-full bg-primary px-5 py-2 font-label-lg text-label-lg text-on-primary shadow-sm">All</button>
            <button class="rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-outline-variant/30">Heart Rate</button>
            <button class="rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-outline-variant/30">Medication</button>
            <button class="rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-outline-variant/30">Appointments</button>
            <button class="rounded-full bg-surface-container-high px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-outline-variant/30">Alerts</button>
          </div>
        </section>

        <section class="mb-section-gap">
          <h4 class="mb-4 font-label-lg text-label-lg uppercase tracking-wider text-outline">Health Timeline</h4>
          <div class="relative space-y-stack-gap">
            <div class="relative flex gap-4">
              <div class="timeline-line"></div>
              <div class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-container/20 bg-primary-container/10">
                <span class="material-symbols-outlined text-[20px] text-primary-container">medical_services</span>
              </div>
              <div class="flex-1 rounded-card border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-soft">
                <div class="mb-1 flex items-start justify-between">
                  <h5 class="font-headline-md text-[16px] text-on-surface">Doctor Consultation</h5>
                  <span class="rounded-full bg-primary-fixed/30 px-2 py-0.5 text-[11px] font-bold text-primary">Completed</span>
                </div>
                <p class="text-[14px] text-on-surface-variant">Follow-up with Dr. Sarah Johnson.</p>
                <p class="mt-2 text-[11px] text-outline">Today, 10:30 AM</p>
              </div>
            </div>

            <div class="relative flex gap-4">
              <div class="timeline-line"></div>
              <div class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-container/20 bg-primary-container/10">
                <span class="material-symbols-outlined text-[20px] text-primary-container">medication</span>
              </div>
              <div class="flex-1 rounded-card border border-primary/20 bg-surface-container-lowest p-4 shadow-soft">
                <div class="mb-1 flex items-start justify-between">
                  <h5 class="font-headline-md text-[16px] text-on-surface">Medication Taken</h5>
                  <span class="material-symbols-outlined text-[18px] text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                </div>
                <p class="text-[14px] text-on-surface-variant">Lisinopril (10mg) logged.</p>
                <p class="mt-2 text-[11px] text-outline">08:00 AM</p>
              </div>
            </div>

            <div class="relative flex gap-4">
              <div class="timeline-line"></div>
              <div class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary-container/20 bg-secondary-container/10">
                <span class="material-symbols-outlined text-[20px] text-secondary">favorite</span>
              </div>
              <div class="flex-1 rounded-card border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-soft">
                <div class="mb-1 flex items-start justify-between">
                  <h5 class="font-headline-md text-[16px] text-on-surface">AI Heart Analysis</h5>
                  <span class="rounded-full bg-secondary-container px-2 py-0.5 text-[11px] font-bold text-secondary">Stable</span>
                </div>
                <p class="text-[14px] text-on-surface-variant">Consistent rhythm detected overnight.</p>
                <p class="mt-2 text-[11px] text-outline">Yesterday, 11:45 PM</p>
              </div>
            </div>

            <div class="relative flex gap-4">
              <div class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-error-container/20 bg-error-container/10">
                <span class="material-symbols-outlined text-[20px] text-error">warning</span>
              </div>
              <div class="flex-1 rounded-card border border-error/20 bg-surface-container-lowest p-4 shadow-soft">
                <div class="mb-1 flex items-start justify-between">
                  <h5 class="font-headline-md text-[16px] text-on-surface">Emergency Alert</h5>
                  <span class="rounded-full bg-outline-variant/30 px-2 py-0.5 text-[11px] font-bold text-on-surface-variant">Resolved</span>
                </div>
                <p class="text-[14px] text-on-surface-variant">Possible Arrhythmia Detected.</p>
                <p class="mt-2 text-[11px] text-outline">Yesterday, 08:45 AM</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-section-gap grid grid-cols-1 gap-stack-gap md:grid-cols-2">
          <div class="col-span-1 rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft md:col-span-2">
            <div class="mb-6 flex items-center justify-between">
              <h4 class="font-headline-md text-headline-md text-on-surface">Heart Rate History</h4>
              <span class="material-symbols-outlined text-outline">query_stats</span>
            </div>
            <div class="relative mb-6 flex h-40 w-full items-end justify-between gap-1">
              <div class="pointer-events-none absolute inset-0 h-full w-full opacity-20">
                <svg class="h-full w-full" viewBox="0 0 400 100">
                  <path d="M0 80 Q 25 70, 50 75 T 100 60 T 150 70 T 200 40 T 250 50 T 300 45 T 350 55 T 400 30" fill="none" stroke="#0B7A28" stroke-width="2"></path>
                </svg>
              </div>
              <div class="h-[60%] w-3 rounded-t-full bg-primary-container/20"></div>
              <div class="h-[45%] w-3 rounded-t-full bg-primary-container/20"></div>
              <div class="h-[70%] w-3 rounded-t-full bg-primary-container/20"></div>
              <div class="h-[55%] w-3 rounded-t-full bg-primary-container/40"></div>
              <div class="h-[85%] w-3 rounded-t-full bg-primary-container/60"></div>
              <div class="h-[65%] w-3 rounded-t-full bg-primary-container/40"></div>
              <div class="h-[50%] w-3 rounded-t-full bg-primary-container/20"></div>
              <div class="h-[55%] w-3 rounded-t-full bg-primary-container/30"></div>
            </div>
            <div class="grid grid-cols-3 gap-4 border-t border-outline-variant pt-4">
              <div class="text-center">
                <p class="text-[11px] font-bold uppercase text-outline">Avg</p>
                <p class="text-headline-md text-primary">72 <span class="text-[12px] font-normal">BPM</span></p>
              </div>
              <div class="border-x border-outline-variant text-center">
                <p class="text-[11px] font-bold uppercase text-outline">High</p>
                <p class="text-headline-md text-error">112 <span class="text-[12px] font-normal">BPM</span></p>
              </div>
              <div class="text-center">
                <p class="text-[11px] font-bold uppercase text-outline">Low</p>
                <p class="text-headline-md text-secondary">64 <span class="text-[12px] font-normal">BPM</span></p>
              </div>
            </div>
          </div>

          <div class="rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
            <h4 class="mb-4 font-headline-md text-headline-md text-on-surface">Medication</h4>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-body-md text-on-surface-variant">Taken</span>
                <span class="font-bold text-primary">12</span>
              </div>
              <div class="h-1.5 w-full rounded-full bg-surface-container">
                <div class="h-full rounded-full bg-primary" style="width: 80%;"></div>
              </div>
              <div class="flex items-center justify-between pt-1">
                <span class="font-body-md text-on-surface-variant">Missed</span>
                <span class="font-bold text-error">1</span>
              </div>
              <div class="flex items-center justify-between pt-1">
                <span class="font-body-md text-on-surface-variant">Reminders Sent</span>
                <span class="font-bold text-on-surface">3</span>
              </div>
            </div>
          </div>

          <div class="rounded-card border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-soft">
            <h4 class="mb-4 font-headline-md text-headline-md text-on-surface">Last Visit</h4>
            <div class="mb-3 flex items-center gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-outline-variant/20">
                <span class="material-symbols-outlined text-outline">person</span>
              </div>
              <div>
                <p class="text-[14px] font-bold">Dr. Sarah Johnson</p>
                <p class="text-[12px] text-outline">St. Mary&apos;s Hospital</p>
              </div>
            </div>
            <div class="flex items-center justify-between rounded-xl border border-outline-variant/30 bg-surface p-3">
              <div>
                <p class="text-[11px] font-bold text-outline">DATE</p>
                <p class="text-[13px] font-semibold">Oct 12, 2023</p>
              </div>
              <div class="rounded-full bg-primary/10 px-3 py-1">
                <span class="text-[11px] font-bold text-primary">Completed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around border-t border-outline-variant bg-white/95 px-2 py-2 backdrop-blur">
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-150 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/dashboard">
          <span class="material-symbols-outlined">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-150 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-monitoring">
          <span class="material-symbols-outlined">monitor_heart</span>
          <span class="font-label-sm text-label-sm">Monitoring</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-150 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-alerts">
          <span class="material-symbols-outlined">warning</span>
          <span class="font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-150 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-history">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">history</span>
          <span class="font-label-sm text-label-sm">History</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-150 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-profile">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
