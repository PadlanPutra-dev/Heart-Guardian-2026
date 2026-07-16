import { createPatientPageShell } from './layout.js';

function getUserName(authState, fallback = 'Alex') {
  return authState?.user?.fullName || authState?.user?.name || authState?.fullName || authState?.name || fallback;
}

export function createPatientAiInsightsPage(authState) {
  return createPatientPageShell({
    title: 'AI Insights',
    activeTab: 'ai-insights',
    headerActions: '<button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-surface-container-low active:scale-95"><span class="material-symbols-outlined text-on-surface-variant">notifications</span></button>',
    headerIcon: 'psychology',
    bodyClass: 'bg-background',
    children: `
      <main class="px-margin-screen pt-6">
        <section class="mt-4">
          <h2 class="mb-stack-gap font-headline-lg-mobile text-headline-lg-mobile">AI Health Insights</h2>
          <div class="relative overflow-hidden rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="absolute right-0 top-0 p-4">
              <span class="material-symbols-outlined text-[96px] text-primary/10" style="font-variation-settings: 'FILL' 1;">psychology</span>
            </div>
            <div class="relative z-10">
              <div class="mb-3 flex items-center gap-2">
                <span class="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">Low Risk</span>
                <span class="text-label-sm text-on-surface-variant">98% Confidence</span>
              </div>
              <p class="mb-4 font-body-lg leading-relaxed text-on-surface">
                Your heart health is stable. No signs of arrhythmia detected in the last 24 hours. Continue your current routine.
              </p>
              <div class="flex items-center gap-2 text-label-sm text-on-surface-variant">
                <span class="material-symbols-outlined text-[16px]">schedule</span>
                Last updated: 10 mins ago
              </div>
            </div>
          </div>
        </section>

        <section class="mt-section-gap">
          <h3 class="mb-stack-gap font-label-lg uppercase tracking-wider text-on-surface-variant">Risk Prediction</h3>
          <div class="flex gap-stack-gap overflow-x-auto pb-2 hide-scrollbar">
            <div class="min-w-[140px] flex-shrink-0 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <p class="mb-2 text-label-sm text-on-surface-variant">Today</p>
              <div class="relative mb-2 h-12 w-12">
                <svg class="h-full w-full -rotate-90">
                  <circle class="text-surface-container-high" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-width="4"></circle>
                  <circle class="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-dasharray="125.6" stroke-dashoffset="113" stroke-linecap="round" stroke-width="4"></circle>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="material-symbols-outlined text-[20px] text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                </div>
              </div>
              <p class="font-label-lg text-primary">Low Risk</p>
            </div>

            <div class="min-w-[140px] flex-shrink-0 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <p class="mb-2 text-label-sm text-on-surface-variant">Next 7 Days</p>
              <div class="relative mb-2 h-12 w-12">
                <svg class="h-full w-full -rotate-90">
                  <circle class="text-surface-container-high" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-width="4"></circle>
                  <circle class="text-secondary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-dasharray="125.6" stroke-dashoffset="115" stroke-linecap="round" stroke-width="4"></circle>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-label-sm font-bold">8%</div>
              </div>
              <p class="font-label-lg text-on-surface">Prob.</p>
            </div>

            <div class="min-w-[140px] flex-shrink-0 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <p class="mb-2 text-label-sm text-on-surface-variant">Next 30 Days</p>
              <div class="relative mb-2 h-12 w-12">
                <svg class="h-full w-full -rotate-90">
                  <circle class="text-surface-container-high" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-width="4"></circle>
                  <circle class="text-secondary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-dasharray="125.6" stroke-dashoffset="110" stroke-linecap="round" stroke-width="4"></circle>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-label-sm font-bold">12%</div>
              </div>
              <p class="font-label-lg text-on-surface">Prob.</p>
            </div>
          </div>
        </section>

        <section class="mt-section-gap">
          <h3 class="mb-stack-gap font-label-lg uppercase tracking-wider text-on-surface-variant">AI Reasoning</h3>
          <div class="space-y-3 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[20px] text-primary">task_alt</span>
              <span class="text-body-md text-on-surface">Heart rate matches baseline</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[20px] text-primary">task_alt</span>
              <span class="text-body-md text-on-surface">Blood pressure is optimal</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[20px] text-primary">task_alt</span>
              <span class="text-body-md text-on-surface">No irregular rhythm patterns</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[20px] text-primary">task_alt</span>
              <span class="text-body-md text-on-surface">Oxygen levels stable</span>
            </div>
          </div>
        </section>

        <section class="mt-section-gap">
          <h3 class="mb-stack-gap font-label-lg uppercase tracking-wider text-on-surface-variant">Health Trend Analysis</h3>
          <div class="grid grid-cols-2 gap-stack-gap">
            <div class="rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="mb-2 flex items-start justify-between">
                <span class="text-label-sm text-on-surface-variant">Heart Rate</span>
                <span class="material-symbols-outlined text-[18px] text-primary">favorite</span>
              </div>
              <div class="flex h-10 w-full items-end gap-1 rounded bg-surface-container px-1">
                <div class="h-1/2 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-2/3 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-1/2 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-3/4 w-full rounded-t-sm bg-primary"></div>
              </div>
            </div>
            <div class="rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="mb-2 flex items-start justify-between">
                <span class="text-label-sm text-on-surface-variant">Blood Pressure</span>
                <span class="material-symbols-outlined text-[18px] text-primary">speed</span>
              </div>
              <div class="flex h-10 w-full items-end gap-1 rounded bg-surface-container px-1">
                <div class="h-2/3 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-3/4 w-full rounded-t-sm bg-primary"></div>
                <div class="h-2/3 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-1/2 w-full rounded-t-sm bg-primary/20"></div>
              </div>
            </div>
            <div class="rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="mb-2 flex items-start justify-between">
                <span class="text-label-sm text-on-surface-variant">Stress</span>
                <span class="material-symbols-outlined text-[18px] text-primary">psychology</span>
              </div>
              <div class="flex h-10 w-full items-end gap-1 rounded bg-surface-container px-1">
                <div class="h-1/3 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-1/2 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-1/4 w-full rounded-t-sm bg-primary"></div>
                <div class="h-1/3 w-full rounded-t-sm bg-primary/20"></div>
              </div>
            </div>
            <div class="rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="mb-2 flex items-start justify-between">
                <span class="text-label-sm text-on-surface-variant">Sleep</span>
                <span class="material-symbols-outlined text-[18px] text-primary">bedtime</span>
              </div>
              <div class="flex h-10 w-full items-end gap-1 rounded bg-surface-container px-1">
                <div class="h-4/5 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-full w-full rounded-t-sm bg-primary"></div>
                <div class="h-3/4 w-full rounded-t-sm bg-primary/20"></div>
                <div class="h-4/5 w-full rounded-t-sm bg-primary/20"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-section-gap">
          <h3 class="mb-stack-gap font-label-lg uppercase tracking-wider text-on-surface-variant">AI Recommendations</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-4 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span class="material-symbols-outlined text-primary">directions_walk</span>
              </div>
              <div>
                <p class="font-label-lg text-on-surface">Exercise</p>
                <p class="text-body-md text-on-surface-variant">30m brisk walk</p>
              </div>
            </div>
            <div class="flex items-center gap-4 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span class="material-symbols-outlined text-primary">water_drop</span>
              </div>
              <div>
                <p class="font-label-lg text-on-surface">Hydration</p>
                <p class="text-body-md text-on-surface-variant">2.5L target</p>
              </div>
            </div>
            <div class="flex items-center gap-4 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span class="material-symbols-outlined text-primary">nightlight</span>
              </div>
              <div>
                <p class="font-label-lg text-on-surface">Sleep</p>
                <p class="text-body-md text-on-surface-variant">8h restorative sleep</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-section-gap">
          <button class="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-container to-primary font-label-lg text-on-primary shadow-lg transition-transform active:scale-95">
            <span class="material-symbols-outlined">chat</span>
            Explain in Simple Language
          </button>
          <div class="mt-stack-gap rounded-[20px] border border-primary/10 bg-primary/5 p-padding-card italic">
            <p class="text-body-md leading-relaxed text-on-surface-variant">
              "Essentially, your heart is beating like a drummer in perfect time. All your vitals are exactly where your doctor wants them to be."
            </p>
          </div>
        </section>

        <section class="mt-section-gap">
          <h3 class="mb-stack-gap font-label-lg uppercase tracking-wider text-on-surface-variant">Prevention Plan</h3>
          <div class="flex items-center gap-6 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="relative h-24 w-24 flex-shrink-0">
              <svg class="h-full w-full -rotate-90">
                <circle class="text-surface-container-high" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-width="8"></circle>
                <circle class="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="15" stroke-linecap="round" stroke-width="8"></circle>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-headline-md text-on-surface">94</span>
                <span class="text-[10px] text-on-surface-variant">/ 100</span>
              </div>
            </div>
            <div class="space-y-2">
              <p class="mb-1 font-label-lg text-primary">Excellent Score</p>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px] text-primary">check</span>
                <span class="text-body-md text-on-surface">Daily Walk</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px] text-primary">check</span>
                <span class="text-body-md text-on-surface">Limit Sodium</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px] text-primary">check</span>
                <span class="text-body-md text-on-surface">Stress Check</span>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-section-gap">
          <h3 class="mb-stack-gap font-label-lg uppercase tracking-wider text-on-surface-variant">AI Activity Timeline</h3>
          <div class="ml-2 space-y-6 border-l-2 border-outline-variant pl-6">
            <div class="relative">
              <div class="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary"></div>
              <p class="font-bold text-label-sm text-primary">08:00 AM</p>
              <p class="text-body-md text-on-surface">New Analysis Generated</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-background bg-outline-variant"></div>
              <p class="text-label-sm text-on-surface-variant">Yesterday</p>
              <p class="text-body-md text-on-surface">Risk Level Updated: Low</p>
            </div>
          </div>
        </section>

        <footer class="mt-section-gap pb-8">
          <p class="text-center text-label-sm leading-relaxed text-on-surface-variant">
            This AI analysis is intended to support health monitoring and should not replace professional medical diagnosis.
          </p>
        </footer>
      </main>
    </div>
  `
  });
}
