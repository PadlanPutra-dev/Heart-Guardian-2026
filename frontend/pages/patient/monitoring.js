import { createPatientPageShell } from './layout.js';

function getUserName(authState, fallback = 'Alex') {
  return authState?.user?.fullName || authState?.user?.name || authState?.fullName || authState?.name || fallback;
}

export function createPatientMonitoringPage(authState) {
  const displayName = getUserName(authState, 'Alex');

  return createPatientPageShell({
    title: 'Monitoring',
    activeTab: 'monitoring',
    headerActions: '<button class="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors duration-200 hover:bg-surface-container-low"><span class="material-symbols-outlined">notifications</span></button>',
    headerIcon: 'monitor_heart',
    bodyClass: 'bg-surface',
    children: `
      <main class="space-y-section-gap px-margin-screen pt-6">
        <section class="space-y-4">
          <div class="flex items-end justify-between">
            <div class="space-y-1">
              <p class="font-label-lg uppercase tracking-wider text-on-surface-variant">Dashboard Overview</p>
              <h2 class="font-display-lg text-display-lg text-on-surface">Hello, ${displayName}</h2>
            </div>
            <div class="flex items-center gap-1.5 rounded-full bg-primary-fixed px-3 py-1 font-label-lg text-on-primary-fixed">
              <span class="h-2 w-2 rounded-full bg-primary-container"></span>
              Safe
            </div>
          </div>
          <div class="flex items-center justify-between rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-center gap-3">
              <div class="rounded-xl bg-brand-blue p-2 text-brand-blue-dark">
                <span class="material-symbols-outlined">watch</span>
              </div>
              <div>
                <p class="font-label-lg text-on-surface">Apple Watch Ultra</p>
                <p class="font-label-sm text-on-surface-variant">Connected & Syncing</p>
              </div>
            </div>
            <p class="font-label-sm text-on-surface-variant">Just now</p>
          </div>
        </section>

        <section>
          <div class="relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="pointer-events-none absolute right-0 top-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
            <div class="flex flex-col items-center space-y-6 text-center">
              <div class="relative flex h-48 w-48 items-center justify-center">
                <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="#f3f4f6" stroke-width="8"></circle>
                  <circle cx="50" cy="50" fill="none" r="45" stroke="#005f1b" stroke-dasharray="210 283" stroke-linecap="round" stroke-width="8"></circle>
                </svg>
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
                  <span class="font-display-lg text-[48px] leading-none text-on-surface">74</span>
                  <span class="font-label-lg text-on-surface-variant">BPM</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-sm text-primary-container">verified</span>
                  <p class="font-headline-md text-headline-md text-on-surface">Stable Heart Rhythm</p>
                </div>
                <p class="px-12 font-label-lg text-on-surface-variant">AI Confidence: <span class="font-bold text-primary">96%</span> accurate matching baseline</p>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h3 class="px-1 font-headline-md text-headline-md text-on-surface">Live Vital Signs</h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-2 rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-center gap-2 text-primary">
                <span class="material-symbols-outlined text-sm">monitor_heart</span>
                <span class="font-label-lg">Heart Rate</span>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="font-headline-lg text-headline-lg">74</span>
                <span class="text-label-sm text-on-surface-variant">bpm</span>
              </div>
              <div class="w-fit rounded-full bg-secondary-container/30 px-2 py-0.5 text-[10px] font-bold text-secondary-fixed-dim">NORMAL</div>
            </div>
            <div class="space-y-2 rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-center gap-2 text-brand-blue-dark">
                <span class="material-symbols-outlined text-sm">blood_pressure</span>
                <span class="font-label-lg">Blood Pressure</span>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="font-headline-lg text-headline-lg">120/80</span>
                <span class="text-label-sm text-on-surface-variant">mmHg</span>
              </div>
              <div class="w-fit rounded-full bg-secondary-container/30 px-2 py-0.5 text-[10px] font-bold uppercase text-secondary-fixed-dim">Optimal</div>
            </div>
            <div class="space-y-2 rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-center gap-2 text-blue-500">
                <span class="material-symbols-outlined text-sm">opacity</span>
                <span class="font-label-lg">SpO2</span>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="font-headline-lg text-headline-lg">98</span>
                <span class="text-label-sm text-on-surface-variant">%</span>
              </div>
              <div class="w-fit rounded-full bg-secondary-container/30 px-2 py-0.5 text-[10px] font-bold uppercase text-secondary-fixed-dim">Normal</div>
            </div>
            <div class="space-y-2 rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-center gap-2 text-green-600">
                <span class="material-symbols-outlined text-sm">air</span>
                <span class="font-label-lg">Resp. Rate</span>
              </div>
              <div class="flex items-baseline gap-1">
                <span class="font-headline-lg text-headline-lg">16</span>
                <span class="text-label-sm text-on-surface-variant">brpm</span>
              </div>
              <div class="w-fit rounded-full bg-secondary-container/30 px-2 py-0.5 text-[10px] font-bold uppercase text-secondary-fixed-dim">Steady</div>
            </div>
            <div class="col-span-2 space-y-2 rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-orange-500">
                  <span class="material-symbols-outlined text-sm">thermostat</span>
                  <span class="font-label-lg">Temperature</span>
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="font-headline-lg text-headline-lg">36.6</span>
                  <span class="text-label-sm text-on-surface-variant">°C</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center justify-between px-1">
            <h3 class="font-headline-md text-headline-md text-on-surface">Heart Rate Trend</h3>
            <div class="flex rounded-lg bg-surface-container-high p-1 text-label-sm">
              <button class="rounded-md bg-white px-3 py-1 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">1h</button>
              <button class="px-3 py-1 text-on-surface-variant">6h</button>
              <button class="px-3 py-1 text-on-surface-variant">24h</button>
              <button class="px-3 py-1 text-on-surface-variant">7d</button>
            </div>
          </div>
          <div class="rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="relative h-40 w-full">
              <svg class="h-full w-full overflow-visible" viewBox="0 0 400 150">
                <path d="M0,120 Q50,110 80,130 T150,100 T220,110 T280,90 T350,115 T400,105" fill="none" stroke="#005f1b" stroke-linecap="round" stroke-width="3"></path>
                <circle cx="280" cy="90" fill="#005f1b" r="5"></circle>
                <line stroke="#e5e7eb" stroke-dasharray="4 4" x1="0" x2="400" y1="140" y2="140"></line>
                <line stroke="#e5e7eb" stroke-dasharray="4 4" x1="0" x2="400" y1="70" y2="70"></line>
              </svg>
              <div class="absolute left-64 top-2 rounded bg-primary px-2 py-1 text-[10px] font-bold text-white">110 BPM (Peak)</div>
            </div>
            <div class="mt-4 grid grid-cols-3 border-t border-outline-variant pt-4 text-center">
              <div>
                <p class="text-label-sm text-on-surface-variant">High</p>
                <p class="font-headline-md text-headline-md text-on-surface">110</p>
              </div>
              <div class="border-x border-outline-variant">
                <p class="text-label-sm text-on-surface-variant">Low</p>
                <p class="font-headline-md text-headline-md text-on-surface">58</p>
              </div>
              <div>
                <p class="text-label-sm text-on-surface-variant">Avg</p>
                <p class="font-headline-md text-headline-md text-on-surface">72</p>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h3 class="px-1 font-headline-md text-headline-md text-on-surface">AI Risk Analysis</h3>
          <div class="relative overflow-hidden rounded-2xl bg-primary-container p-5 text-on-primary-container shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="absolute -bottom-4 -right-4 opacity-10">
              <span class="material-symbols-outlined text-[100px]">psychology</span>
            </div>
            <div class="mb-4 flex items-start justify-between">
              <div>
                <p class="font-label-lg opacity-90">Risk Level</p>
                <h4 class="font-display-lg text-white">Low</h4>
              </div>
              <div class="rounded-full bg-white/20 px-3 py-1 text-label-sm backdrop-blur-md">Confidence 96%</div>
            </div>
            <p class="mb-4 font-body-md leading-relaxed text-white">Based on your last 24h of data, your cardiac health is highly stable. No significant risk factors detected in rhythm or baseline deviations.</p>
            <div class="flex items-center gap-2 rounded-xl bg-black/10 p-3">
              <span class="material-symbols-outlined text-primary-fixed">check_circle</span>
              <span class="font-bold text-label-lg">24h Prediction: Stable</span>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h3 class="px-1 font-headline-md text-headline-md text-on-surface">Personal Baseline</h3>
          <div class="divide-y divide-outline-variant rounded-2xl border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex items-center justify-between py-3">
              <span class="font-label-lg text-on-surface-variant">Resting Heart Rate</span>
              <div class="text-right">
                <p class="font-headline-md text-headline-md">62 <span class="text-label-sm">bpm</span></p>
                <p class="text-[10px] font-bold text-primary">NORMAL RANGE</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-3">
              <span class="font-label-lg text-on-surface-variant">Normal BP</span>
              <div class="text-right">
                <p class="font-headline-md text-headline-md">115/75 <span class="text-label-sm">mmHg</span></p>
                <p class="text-[10px] font-bold text-primary">OPTIMAL</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-3">
              <span class="font-label-lg text-on-surface-variant">Target Exercise HR</span>
              <div class="text-right">
                <p class="font-headline-md text-headline-md">145 <span class="text-label-sm">bpm</span></p>
              </div>
            </div>
            <div class="flex items-center justify-center gap-2 pt-4">
              <span class="material-symbols-outlined text-sm text-on-surface-variant">history</span>
              <p class="text-label-sm text-on-surface-variant">Last MCU Checkup: Oct 12, 2023</p>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center gap-4 rounded-2xl border border-outline-variant bg-white p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span class="material-symbols-outlined">ecg</span>
            </div>
            <div class="flex-1">
              <h4 class="font-label-lg text-on-surface-variant">Arrhythmia Status</h4>
              <p class="font-headline-md text-headline-md text-on-surface">Normal Sinus Rhythm</p>
              <p class="text-label-sm text-on-surface-variant">Last detected: 2 mins ago</p>
            </div>
            <div class="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center justify-between px-1">
            <h3 class="font-headline-md text-headline-md text-on-surface">Daily Recommendations</h3>
            <div class="text-right">
              <p class="text-label-sm text-on-surface-variant">Health Score</p>
              <p class="font-headline-md text-headline-md text-primary">92/100</p>
            </div>
          </div>
          <div class="no-scrollbar -mx-margin-screen flex gap-4 overflow-x-auto px-margin-screen pb-2 sm:-mx-0 sm:px-0">
            <div class="min-w-[160px] space-y-4 rounded-2xl border border-outline-variant bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <span class="material-symbols-outlined">directions_run</span>
              </div>
              <div>
                <p class="font-label-lg">Exercise</p>
                <p class="text-label-sm text-on-surface-variant">30m Cardio</p>
              </div>
            </div>
            <div class="min-w-[160px] space-y-4 rounded-2xl border border-outline-variant bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <span class="material-symbols-outlined">water_drop</span>
              </div>
              <div>
                <p class="font-label-lg">Hydration</p>
                <p class="text-label-sm text-on-surface-variant">2.1L / 2.5L</p>
              </div>
            </div>
            <div class="min-w-[160px] space-y-4 rounded-2xl border border-outline-variant bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <span class="material-symbols-outlined">bedtime</span>
              </div>
              <div>
                <p class="font-label-lg">Sleep</p>
                <p class="text-label-sm text-on-surface-variant">7h 45m</p>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h3 class="px-1 font-headline-md text-headline-md text-on-surface">Monitoring Timeline</h3>
          <div class="relative space-y-4 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-[2px] before:bg-outline-variant">
            <div class="relative flex gap-4">
              <div class="z-10 h-8 w-8 shrink-0 rounded-full border-4 border-surface bg-primary"></div>
              <div class="flex-1 rounded-xl border border-outline-variant bg-white p-3 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <div class="mb-1 flex items-center justify-between">
                  <span class="font-label-lg text-on-surface">Daily Summary Generated</span>
                  <span class="text-label-sm text-on-surface-variant">8:00 AM</span>
                </div>
                <p class="text-label-sm text-on-surface-variant">All vitals within normal range during rest period.</p>
              </div>
            </div>
            <div class="relative flex gap-4">
              <div class="z-10 h-8 w-8 shrink-0 rounded-full border-4 border-surface bg-brand-blue-dark"></div>
              <div class="flex-1 rounded-xl border border-outline-variant bg-white p-3 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <div class="mb-1 flex items-center justify-between">
                  <span class="font-label-lg text-on-surface">Moderate Activity</span>
                  <span class="text-label-sm text-on-surface-variant">7:15 AM</span>
                </div>
                <p class="text-label-sm text-on-surface-variant">Peak HR: 110 BPM. Rapid recovery noted.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div class="fixed bottom-16 left-0 z-40 w-full bg-gradient-to-t from-surface via-surface/90 to-transparent px-margin-screen pb-4">
        <div class="grid grid-cols-2 gap-2">
          <button class="flex items-center justify-center gap-2 rounded-xl bg-error py-3 font-label-lg text-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
            <span class="material-symbols-outlined text-[20px]">medical_services</span>
            Ambulance
          </button>
          <button class="flex items-center justify-center gap-2 rounded-xl bg-on-surface py-3 font-label-lg text-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
            <span class="material-symbols-outlined text-[20px]">call</span>
            Call Doctor
          </button>
        </div>
      </div>

    </div>
  `
  });
}
