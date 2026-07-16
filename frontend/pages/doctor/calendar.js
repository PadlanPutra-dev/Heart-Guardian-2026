export function createDoctorCalendarPage(authState) {
  return `
    <div class="flex min-h-screen flex-col bg-surface text-on-surface">
      <header class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-surface-container-highest bg-surface px-margin-screen">
        <div class="flex items-center gap-3">
          <div class="rounded-xl bg-primary-container/10 p-2">
            <span class="material-symbols-outlined text-primary" data-icon="clinical_notes">clinical_notes</span>
          </div>
          <div>
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile leading-tight text-primary">Appointments</h1>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="rounded-full p-2 transition-colors hover:bg-surface-container-low active:scale-95">
            <span class="material-symbols-outlined text-on-surface-variant" data-icon="search">search</span>
          </button>
          <button class="rounded-full bg-primary p-2 text-on-primary shadow-md transition-all active:scale-90">
            <span class="material-symbols-outlined" data-icon="add">add</span>
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto px-margin-screen pb-24">
        <p class="mb-6 mt-4 font-body-md text-on-surface-variant">Manage your consultation schedule.</p>

        <section class="mb-section-gap grid grid-cols-2 gap-3">
          <div class="rounded-card border border-surface-container bg-surface-container-lowest p-padding-card shadow-medical">
            <div class="mb-2 flex items-start justify-between">
              <span class="material-symbols-outlined text-[20px] text-primary" data-icon="calendar_today">calendar_today</span>
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Today</span>
            </div>
            <div class="font-headline-lg text-headline-lg text-on-surface">12</div>
            <div class="font-label-sm text-label-sm text-on-surface-variant">Appointments</div>
          </div>
          <div class="rounded-card border border-surface-container bg-surface-container-lowest p-padding-card shadow-medical">
            <div class="mb-2 flex items-start justify-between">
              <span class="material-symbols-outlined text-[20px] text-secondary" data-icon="check_circle">check_circle</span>
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Done</span>
            </div>
            <div class="font-headline-lg text-headline-lg text-on-surface">5</div>
            <div class="font-label-sm text-label-sm text-on-surface-variant">Completed</div>
          </div>
          <div class="rounded-card border border-surface-container bg-surface-container-lowest p-padding-card shadow-medical">
            <div class="mb-2 flex items-start justify-between">
              <span class="material-symbols-outlined text-[20px] text-tertiary-container" data-icon="pending_actions">pending_actions</span>
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Next</span>
            </div>
            <div class="font-headline-lg text-headline-lg text-on-surface">7</div>
            <div class="font-label-sm text-label-sm text-on-surface-variant">Upcoming</div>
          </div>
          <div class="rounded-card border border-surface-container bg-surface-container-lowest p-padding-card shadow-medical opacity-60">
            <div class="mb-2 flex items-start justify-between">
              <span class="material-symbols-outlined text-[20px] text-error" data-icon="cancel">cancel</span>
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Out</span>
            </div>
            <div class="font-headline-lg text-headline-lg text-on-surface">0</div>
            <div class="font-label-sm text-label-sm text-on-surface-variant">Cancelled</div>
          </div>
        </section>

        <section class="mb-section-gap">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="font-headline-md text-headline-md text-on-surface">May 2024</h2>
            <button class="flex items-center font-label-lg text-label-lg text-primary">
              Full Calendar
              <span class="material-symbols-outlined ml-1 text-[18px]" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
          <div class="no-scrollbar flex gap-3 overflow-x-auto pb-2">
            <button class="flex h-20 min-w-[56px] flex-col items-center justify-center rounded-2xl border border-surface-container bg-surface-container-lowest transition-all active:scale-95">
              <span class="mb-1 font-label-sm text-label-sm text-on-surface-variant">MON</span>
              <span class="font-body-lg font-bold">13</span>
            </button>
            <button class="active-dot flex h-20 min-w-[56px] flex-col items-center justify-center rounded-2xl border border-surface-container bg-surface-container-lowest text-primary transition-all active:scale-95">
              <span class="mb-1 font-label-sm text-label-sm text-on-surface-variant">TUE</span>
              <span class="font-body-lg font-bold">14</span>
            </button>
            <button class="flex h-20 min-w-[64px] scale-105 flex-col items-center justify-center rounded-2xl bg-primary text-on-primary shadow-lg transition-all">
              <span class="mb-1 font-label-sm text-label-sm text-on-primary/80">WED</span>
              <span class="font-body-lg font-bold">15</span>
              <div class="mt-1 h-1 w-1 rounded-full bg-on-primary"></div>
            </button>
            <button class="active-dot flex h-20 min-w-[56px] flex-col items-center justify-center rounded-2xl border border-surface-container bg-surface-container-lowest text-primary transition-all active:scale-95">
              <span class="mb-1 font-label-sm text-label-sm text-on-surface-variant">THU</span>
              <span class="font-body-lg font-bold">16</span>
            </button>
            <button class="flex h-20 min-w-[56px] flex-col items-center justify-center rounded-2xl border border-surface-container bg-surface-container-lowest transition-all active:scale-95">
              <span class="mb-1 font-label-sm text-label-sm text-on-surface-variant">FRI</span>
              <span class="font-body-lg font-bold">17</span>
            </button>
            <button class="flex h-20 min-w-[56px] flex-col items-center justify-center rounded-2xl border border-surface-container bg-surface-container-lowest transition-all active:scale-95">
              <span class="mb-1 font-label-sm text-label-sm text-on-surface-variant">SAT</span>
              <span class="font-body-lg font-bold">18</span>
            </button>
          </div>
        </section>

        <section class="mb-section-gap">
          <h2 class="mb-4 font-headline-md text-headline-md text-on-surface">Today's Schedule</h2>
          <div class="flex flex-col gap-stack-gap">
            <div class="flex items-center gap-4 rounded-card border border-surface-container bg-surface-container-lowest p-4 shadow-medical transition-transform active:scale-[0.98]">
              <div class="flex min-w-[70px] flex-col items-center justify-center border-r border-surface-container pr-4">
                <span class="font-headline-md text-headline-md text-on-surface">10:30</span>
                <span class="font-label-sm text-label-sm uppercase text-on-surface-variant">AM</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-1 flex items-center gap-2">
                  <h3 class="truncate font-body-lg font-bold">Liam Davis</h3>
                  <span class="inline-flex items-center rounded-full border border-secondary/20 bg-secondary-container/20 px-2 py-0.5 text-[10px] font-bold text-secondary">CONFIRMED</span>
                </div>
                <p class="truncate font-label-lg text-label-lg text-on-surface-variant">Initial Checkup</p>
                <div class="mt-2 flex items-center gap-2">
                  <div class="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                    <div class="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"></div>
                    <span class="text-[11px] font-semibold uppercase">Stable</span>
                  </div>
                </div>
              </div>
              <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>

            <div class="flex items-center gap-4 rounded-card border border-surface-container bg-surface-container-lowest p-4 shadow-medical transition-transform active:scale-[0.98]">
              <div class="flex min-w-[70px] flex-col items-center justify-center border-r border-surface-container pr-4">
                <span class="font-headline-md text-headline-md text-on-surface">11:15</span>
                <span class="font-label-sm text-label-sm uppercase text-on-surface-variant">AM</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-1 flex items-center gap-2">
                  <h3 class="truncate font-body-lg font-bold">Sarah Jenkins</h3>
                  <span class="inline-flex items-center rounded-full border border-tertiary/20 bg-tertiary-fixed/30 px-2 py-0.5 text-[10px] font-bold text-tertiary">WAITING</span>
                </div>
                <p class="truncate font-label-lg text-label-lg text-on-surface-variant">Post-Op Review</p>
                <div class="mt-2 flex items-center gap-2">
                  <div class="flex items-center gap-1 rounded-full bg-error/10 px-2 py-0.5 text-error">
                    <div class="h-1.5 w-1.5 animate-pulse rounded-full bg-error"></div>
                    <span class="text-[11px] font-semibold uppercase">Critical</span>
                  </div>
                </div>
              </div>
              <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>

            <div class="flex items-center gap-4 rounded-card border border-surface-container bg-surface-container-lowest p-4 shadow-medical opacity-70 grayscale-[0.3] transition-transform active:scale-[0.98]">
              <div class="flex min-w-[70px] flex-col items-center justify-center border-r border-surface-container pr-4">
                <span class="font-headline-md text-headline-md text-on-surface">09:00</span>
                <span class="font-label-sm text-label-sm uppercase text-on-surface-variant">AM</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-1 flex items-center gap-2">
                  <h3 class="truncate font-body-lg font-bold">Robert Chen</h3>
                  <span class="inline-flex items-center rounded-full border border-outline-variant bg-surface-container-highest px-2 py-0.5 text-[10px] font-bold text-on-surface-variant">COMPLETED</span>
                </div>
                <p class="truncate font-label-lg text-label-lg text-on-surface-variant">Routine Lab Results</p>
                <div class="mt-2 flex items-center gap-2">
                  <div class="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                    <div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span class="text-[11px] font-semibold uppercase">Stable</span>
                  </div>
                </div>
              </div>
              <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        <section class="rounded-[24px] border border-primary/10 bg-gradient-to-br from-primary/5 to-primary-container/10 p-padding-card">
          <div class="mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
            <h2 class="font-headline-md text-headline-md text-on-surface">AI Recommended</h2>
          </div>
          <div class="relative overflow-hidden rounded-card border border-primary/20 bg-surface-container-lowest p-padding-card shadow-medical">
            <div class="pointer-events-none absolute right-0 top-0 p-4 opacity-10">
              <span class="material-symbols-outlined text-[120px]" data-icon="monitoring">monitoring</span>
            </div>
            <div class="relative z-10">
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <h3 class="font-headline-md text-headline-md text-on-surface">James Wilson</h3>
                  <p class="mt-0.5 flex items-center gap-1 font-label-lg font-bold text-error">
                    <span class="material-symbols-outlined text-[16px]" data-icon="warning">warning</span>
                    Possible Arrhythmia Detected
                  </p>
                </div>
                <div class="flex flex-col items-end">
                  <span class="font-headline-lg text-headline-lg leading-none text-primary">82%</span>
                  <span class="text-[10px] font-label-sm uppercase tracking-tighter text-on-surface-variant">Risk Score</span>
                </div>
              </div>
              <div class="mb-4 flex items-center gap-4 border-y border-surface-container py-3">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[20px] text-on-surface-variant" data-icon="schedule">schedule</span>
                  <span class="font-label-lg text-label-lg text-on-surface-variant">Within 24 hours</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[20px] text-on-surface-variant" data-icon="medical_services">medical_services</span>
                  <span class="font-label-lg text-label-lg text-on-surface-variant">Urgent Consult</span>
                </div>
              </div>
              <button class="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-bold text-body-md text-on-primary shadow-md transition-all active:scale-[0.98]">
                Schedule Now
                <span class="material-symbols-outlined text-[20px]" data-icon="event_available">event_available</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around border-t border-surface-container-highest bg-surface px-4 pb-2">
        <button class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-transform active:scale-90 hover:bg-surface-container">
          <span class="material-symbols-outlined" data-icon="home">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </button>
        <button class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-transform active:scale-90 hover:bg-surface-container">
          <span class="material-symbols-outlined" data-icon="group">group</span>
          <span class="font-label-sm text-label-sm">Patients</span>
        </button>
        <button class="flex flex-col items-center justify-center rounded-full bg-secondary-container px-4 py-1 text-on-secondary-container transition-transform active:scale-90">
          <span class="material-symbols-outlined" data-icon="event" style="font-variation-settings: 'FILL' 1;">event</span>
          <span class="font-label-sm text-label-sm">Appointments</span>
        </button>
        <button class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-transform active:scale-90 hover:bg-surface-container">
          <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
          <span class="font-label-sm text-label-sm">Alerts</span>
        </button>
        <button class="flex flex-col items-center justify-center px-4 py-1 text-on-surface-variant transition-transform active:scale-90 hover:bg-surface-container">
          <span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </button>
      </nav>
    </div>
  `;
}
