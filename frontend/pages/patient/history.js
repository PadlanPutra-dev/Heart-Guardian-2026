import { createPatientPageShell } from './layout.js';

function getUserName(authState, fallback = 'Alex') {
  return authState?.user?.fullName || authState?.user?.name || authState?.fullName || authState?.name || fallback;
}

export function createPatientHistoryPage(authState) {
  return createPatientPageShell({
    title: 'History',
    activeTab: 'history',
    headerActions: '<button class="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-high"><span class="material-symbols-outlined text-on-surface-variant">notifications</span><span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-error"></span></button>',
    headerIcon: 'history',
    bodyClass: 'bg-surface',
    children: `
      <main class="mx-auto max-w-md px-margin-screen pt-6">
        <section class="mb-6">
          <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">History</h2>
          <p class="mt-1 font-body-md text-on-surface-variant">Review your cardiac health journey over time.</p>
        </section>

        <div class="mb-section-gap flex items-center rounded-2xl bg-surface-container-low p-1">
          <button class="flex-1 rounded-xl bg-white py-2 text-center font-label-lg text-primary shadow-sm">Day</button>
          <button class="flex-1 rounded-xl py-2 text-center font-label-lg text-on-surface-variant">Week</button>
          <button class="flex-1 rounded-xl py-2 text-center font-label-lg text-on-surface-variant">Month</button>
          <button class="flex-1 rounded-xl py-2 text-center font-label-lg text-on-surface-variant">Year</button>
        </div>

        <div class="mb-stack-gap rounded-2xl bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mb-4 flex items-center gap-2">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">ecg</span>
            </div>
            <h3 class="font-headline-md text-headline-md">Metrics Summary</h3>
          </div>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div class="rounded-xl bg-surface-container p-3">
              <p class="mb-1 font-label-sm uppercase tracking-wider text-on-surface-variant">Avg Heart Rate</p>
              <p class="font-headline-md text-headline-md text-primary">72 <span class="font-normal text-label-lg">BPM</span></p>
            </div>
            <div class="rounded-xl bg-surface-container p-3">
              <p class="mb-1 font-label-sm uppercase tracking-wider text-on-surface-variant">Arrhythmia</p>
              <p class="font-headline-md text-error">2 <span class="font-normal text-label-lg text-on-surface-variant">Episodes</span></p>
            </div>
          </div>
          <div class="flex items-center justify-between border-t border-outline-variant py-3">
            <div class="flex flex-col">
              <span class="font-label-sm uppercase text-on-surface-variant">Lowest / Highest</span>
              <span class="font-body-lg font-semibold">54 / 118 <span class="font-normal text-label-lg">BPM</span></span>
            </div>
            <div class="text-right">
              <span class="font-label-sm uppercase text-on-surface-variant">AI Risk Level</span>
              <div class="flex items-center justify-end gap-1.5 text-primary-container">
                <span class="h-2 w-2 rounded-full bg-primary-container"></span>
                <span class="font-label-lg text-primary-container">Low Risk</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-section-gap overflow-hidden rounded-2xl bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mb-4 flex items-center justify-between">
            <h3 class="font-headline-md text-headline-md">BPM Trends</h3>
            <span class="material-symbols-outlined text-on-surface-variant">info</span>
          </div>
          <div class="relative mt-2 h-48 w-full">
            <svg class="h-full w-full overflow-visible" viewBox="0 0 400 150">
              <line stroke="#E5E7EB" stroke-dasharray="4" x1="0" x2="400" y1="30" y2="30"></line>
              <line stroke="#E5E7EB" stroke-dasharray="4" x1="0" x2="400" y1="80" y2="80"></line>
              <line stroke="#E5E7EB" stroke-dasharray="4" x1="0" x2="400" y1="130" y2="130"></line>
              <path d="M0,90 Q50,70 100,100 T200,80 T300,110 T400,70 L400,150 L0,150 Z" fill="rgba(11, 122, 40, 0.2)"></path>
              <path d="M0,90 Q50,70 100,100 T200,80 T300,110 T400,70" fill="none" stroke="#0B7A28" stroke-linecap="round" stroke-width="3"></path>
              <circle cx="100" cy="100" fill="#ba1a1a" r="5"></circle>
              <circle cx="300" cy="110" fill="#734700" r="5"></circle>
            </svg>
            <div class="mt-4 flex justify-between">
              <span class="text-label-sm text-on-surface-variant">08:00</span>
              <span class="text-label-sm text-on-surface-variant">12:00</span>
              <span class="text-label-sm text-on-surface-variant">16:00</span>
              <span class="text-label-sm text-on-surface-variant">20:00</span>
            </div>
          </div>
        </div>

        <h3 class="mb-stack-gap font-headline-md text-headline-md">AI Analysis Timeline</h3>
        <div class="mb-section-gap space-y-stack-gap">
          <div class="rounded-2xl border-l-4 border-primary bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-start justify-between">
              <div>
                <p class="font-label-lg font-bold text-on-surface">15 Jul, 2024</p>
                <p class="mt-1 font-body-md text-on-surface-variant">No abnormal arrhythmia detected. Recovery phase stable.</p>
              </div>
              <div class="rounded-full bg-primary/10 px-3 py-1 font-label-sm text-primary">LOW RISK</div>
            </div>
          </div>
          <div class="rounded-2xl border-l-4 border-tertiary bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-start justify-between">
              <div>
                <p class="font-label-lg font-bold text-on-surface">14 Jul, 2024</p>
                <p class="mt-1 font-body-md text-on-surface-variant">Irregular rhythm detected during light exercise. Suggested rest.</p>
              </div>
              <div class="rounded-full bg-tertiary/10 px-3 py-1 font-label-sm text-tertiary">MODERATE</div>
            </div>
          </div>
          <div class="rounded-2xl border-l-4 border-error bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-start justify-between">
              <div>
                <p class="font-label-lg font-bold text-on-surface">13 Jul, 2024</p>
                <p class="mt-1 font-body-md text-on-surface-variant">Emergency protocol activated. Arrhythmia episode lasted 120s.</p>
              </div>
              <div class="rounded-full bg-error/10 px-3 py-1 font-label-sm text-error">HIGH RISK</div>
            </div>
          </div>
        </div>

        <section class="mb-section-gap">
          <h3 class="mb-stack-gap font-headline-md text-headline-md">Emergency Events</h3>
          <div class="rounded-2xl border border-error/20 bg-error-container/20 p-padding-card">
            <div class="mb-3 flex items-center gap-3">
              <span class="material-symbols-outlined text-error" style="font-variation-settings: 'FILL' 1;">emergency_share</span>
              <p class="font-label-lg font-bold text-error">Protocol Activated: 13 July</p>
            </div>
            <div class="space-y-2 font-body-md text-on-surface">
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Time:</span>
                <span>02:45 AM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Action:</span>
                <span>Automated Emergency Call</span>
              </div>
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Notified:</span>
                <span>Dr. Sarah Jenkins</span>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-section-gap">
          <h3 class="mb-stack-gap font-headline-md text-headline-md">Consultations</h3>
          <div class="space-y-stack-gap">
            <div class="flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-surface-container">
                <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeTgRiyf6h5hJMxd4ew96OfdYXv2ouXbTFjyM5ODscUAFgDQmir7mNelcMXgnzSAhumEX-RO_6_Lmeik5-szvn5rPPXn0NPLggd1FueMb0WkUffRmvqzDgcXgYJvOvqzFg_7LsGwd94qlDRsWF6pw5C4TeFFy2hK6Ro1sjvLYs27YhqAXfPdOdnc8eJQ15lRen9v8B08cWIdJOQC6ng8ViXUlsqadywO7DOh-6mMkPpCKq6yyPWPg2w" alt="Doctor avatar" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate font-label-lg font-bold text-on-surface">Dr. Sarah Jenkins</p>
                <p class="text-label-sm text-on-surface-variant">St. Mary’s Hospital • 16 Jul</p>
              </div>
              <div class="text-right">
                <span class="rounded-lg bg-secondary-container px-2 py-1 font-label-sm text-on-secondary-container">Follow-up</span>
              </div>
            </div>
            <div class="flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-surface-container">
                <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrR5CbL4Y7el8d13A5PNzSWT1R9sffBpsCGzVhJTLmjH__r2S7DX_tO3JH-oH5zX640rBShMukBPe_hX-VyVjKyrE3t9CK98QBb-AOMEY0vAHmn2nCQ-UUx3jypJX1mKC3pQydVlsXJkV88cUshoq8UJefxToAC7PDiAPyLiV55LHmBYZf7KR9uiVqWuVKMGWsGPAIqhZmT7YncsGgmet61UAXpC6utVHPyv-2y0qKIvVfPzpdsrdKWQ" alt="Doctor avatar" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate font-label-lg font-bold text-on-surface">Dr. Mark Walton</p>
                <p class="text-label-sm text-on-surface-variant">Virtual Consultation • 10 Jul</p>
              </div>
              <div class="text-right">
                <span class="rounded-lg bg-surface-container-highest px-2 py-1 font-label-sm text-on-surface-variant">Initial Call</span>
              </div>
            </div>
          </div>
        </section>

        <button class="mb-4 flex w-full items-center justify-between rounded-2xl bg-primary p-5 text-on-primary transition-all hover:opacity-90 active:scale-[0.98]">
          <div class="flex items-center gap-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span class="material-symbols-outlined">picture_as_pdf</span>
            </div>
            <div class="text-left">
              <p class="font-label-lg font-bold">Export Health Report</p>
              <p class="text-sm opacity-80">PDF/CSV for your physician</p>
            </div>
          </div>
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </main>
    </div>
  `
  });
}
