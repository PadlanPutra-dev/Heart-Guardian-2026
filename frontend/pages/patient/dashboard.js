import { createPatientPageShell, createPatientActionGrid } from './layout.js';

function getUserName(authState, fallback = 'Alex') {
  return authState?.user?.fullName || authState?.user?.name || authState?.fullName || authState?.name || fallback;
}

function getGreeting() {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 12) return 'Good Morning';
  if (hours >= 12 && hours < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export function createPatientDashboardPage(authState) {
  const displayName = getUserName(authState, 'Alex');
  const greeting = getGreeting();
  const greetingLabel = `${greeting}, ${displayName} 👋`;
  const actionGrid = createPatientActionGrid([
    { href: '#/monitoring', icon: 'monitor_heart', iconBg: 'bg-primary/10', iconClass: 'text-primary', label: 'Monitoring' },
    { href: '#/ai-insights', icon: 'psychology', iconBg: 'bg-tertiary/10', iconClass: 'text-tertiary', label: 'AI Insights' },
    { href: '#/history', icon: 'history', iconBg: 'bg-secondary/10', iconClass: 'text-secondary', label: 'History' },
    { href: '#/profile', icon: 'emergency', iconBg: 'bg-error/10', iconClass: 'text-error', label: 'SOS' },
  ]);

  return createPatientPageShell({
    title: 'Patient Dashboard',
    activeTab: 'home',
    headerActions: '<button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-low"><span class="material-symbols-outlined text-primary">notifications</span></button>',
    headerIcon: 'home',
    bodyClass: 'bg-background',
    children: `
      <main class="space-y-6 px-margin-screen py-6">
        <section>
          <h2 class="font-headline-lg text-headline-lg text-on-surface">${greetingLabel}</h2>
          <p class="font-body-md text-on-surface-variant">Here's your heart condition for today.</p>
        </section>

        <section class="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-primary-container to-primary p-6 text-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="pointer-events-none absolute right-0 top-0 opacity-10">
            <span class="material-symbols-outlined text-[160px]" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </div>
          <div class="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full opacity-20">
            <svg class="h-full w-full" viewBox="0 0 400 100">
              <path d="M0,50 L50,50 L60,20 L75,80 L90,50 L140,50 L150,10 L170,90 L190,50 L240,50 L250,30 L260,70 L270,50 L320,50 L330,0 L350,100 L370,50 L400,50" fill="none" stroke="white" stroke-width="2" />
            </svg>
          </div>
          <div class="relative z-10 space-y-4">
            <div class="flex items-start justify-between">
              <div>
                <p class="font-label-lg uppercase tracking-wider opacity-80">Current Heart Status</p>
                <div class="mt-1 flex items-center gap-2">
                  <span class="h-3 w-3 animate-pulse rounded-full bg-white"></span>
                  <span class="font-headline-md text-headline-md">Stable</span>
                </div>
              </div>
              <div class="text-right">
                <p class="font-label-sm opacity-80">AI Confidence</p>
                <p class="font-headline-md text-headline-md">96%</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <p class="font-label-sm opacity-80">Heart Rate</p>
                <p class="font-headline-lg text-headline-lg">72 <span class="text-sm font-normal">BPM</span></p>
              </div>
              <div class="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <p class="font-label-sm opacity-80">Rhythm</p>
                <p class="font-body-lg font-bold">Normal Sinus</p>
              </div>
            </div>
            <p class="text-center font-label-sm italic opacity-70">Last updated 2 minutes ago</p>
          </div>
        </section>

        <section class="rounded-[20px] border border-outline-variant/30 bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mb-stack-gap flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <span class="material-symbols-outlined text-primary">psychology</span>
            </div>
            <h3 class="font-headline-md text-headline-md">Today's AI Summary</h3>
          </div>
          <p class="font-body-md leading-relaxed text-on-surface-variant">
            No abnormal arrhythmia pattern detected. Your heart rhythm has remained stable over the last 24 hours. Continue taking your prescribed medication and maintain a healthy lifestyle.
          </p>
          <button class="mt-4 w-full rounded-[20px] bg-primary py-3 font-label-lg text-white transition-all active:scale-95">
            View Detailed AI Analysis
          </button>
        </section>

        <section class="grid gap-4 md:grid-cols-2">
          <div class="rounded-[20px] border border-outline-variant/30 bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <h3 class="mb-3 font-label-lg text-on-surface-variant">Risk Prediction</h3>
            <div class="mb-4 flex items-end justify-between">
              <div class="space-y-1">
                <p class="font-headline-lg text-headline-lg text-primary">Low Risk</p>
                <p class="font-label-sm text-on-surface-variant">Probability: 8%</p>
              </div>
              <div class="text-right">
                <span class="material-symbols-outlined text-3xl text-primary">trending_flat</span>
                <p class="font-label-sm text-primary">Stable</p>
              </div>
            </div>
            <div class="rounded-xl bg-surface-container-low p-3">
              <p class="text-[10px] leading-tight text-on-surface-variant">Based on heart rhythm, historical data, and lifestyle assessment.</p>
            </div>
          </div>

          <div class="flex flex-col justify-between rounded-[20px] border border-outline-variant/30 bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <h3 class="mb-3 font-label-lg text-on-surface-variant">Heart Health Score</h3>
            <div class="flex items-center gap-4">
              <div class="relative h-16 w-16">
                <svg class="h-full w-full" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e1e2e4" stroke-dasharray="100, 100" stroke-width="3"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#005f1b" stroke-dasharray="91, 100" stroke-linecap="round" stroke-width="3"></path>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-bold">91</div>
              </div>
              <div>
                <p class="font-headline-md text-headline-md text-primary">Excellent</p>
                <p class="font-label-sm text-secondary">+3 from yesterday</p>
              </div>
            </div>
          </div>
        </section>

        ${actionGrid}

        <section class="space-y-4">
          <div class="rounded-[20px] border border-outline-variant/30 bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="mb-4 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">medication</span>
                <h3 class="font-headline-md text-headline-md">Medication</h3>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between rounded-xl bg-surface-container-low p-3">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                  <div>
                    <p class="font-label-lg">Morning Dose (08:00)</p>
                    <p class="text-xs text-on-surface-variant">Aspirin 81mg</p>
                  </div>
                </div>
                <span class="rounded-full bg-primary/20 px-2 py-1 text-[10px] font-bold text-primary">COMPLETED</span>
              </div>
              <div class="flex items-center justify-between rounded-xl border border-outline-variant bg-white p-3">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-on-surface-variant">schedule</span>
                  <div>
                    <p class="font-label-lg">Evening Dose (20:00)</p>
                    <p class="text-xs text-on-surface-variant">Atorvastatin 20mg</p>
                  </div>
                </div>
                <span class="rounded-full bg-surface-container-highest px-2 py-1 text-[10px] font-bold text-on-surface-variant">UPCOMING</span>
              </div>
            </div>
          </div>

          <div class="rounded-[20px] border border-outline-variant/30 bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <h3 class="mb-4 font-label-lg text-on-surface-variant">Upcoming Consultation</h3>
            <div class="mb-4 flex items-center gap-4">
              <div class="h-14 w-14 overflow-hidden rounded-xl bg-surface-container">
                <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP0qUZYEELIKwydylaVrLrk5zKQr5dYE5TanAPcNsuV_OzH7h7eLf6xSCSDCcScsInhU4EQ_VmsNwIrVoKzv0EyjijvoggICNlUflYFq7pxhcWutIYAw8ce8NZbH7J2lryRoPCwRSJvNHqL0xw23Hhpe1r6n_FWAWeYtRBf6vDEp4a0wqLIYZ41JhgrJIV1zhJcPDHcnxKJJGPDQ-qbMNKoPEnc03875qhuyNJYIYIz0_-tvchc8Bw7w" alt="Doctor avatar" />
              </div>
              <div>
                <p class="font-headline-md text-headline-md">Dr. Sarah Johnson</p>
                <p class="font-body-md text-on-surface-variant">Tomorrow, 09:30 AM</p>
              </div>
            </div>
            <button class="w-full rounded-[20px] border-2 border-primary py-3 font-label-lg text-primary transition-colors hover:bg-primary/5">
              View Appointment
            </button>
          </div>
        </section>

        <section class="rounded-[20px] bg-surface-container-high p-padding-card">
          <h3 class="mb-4 flex items-center gap-2 font-headline-md text-headline-md">
            <span class="material-symbols-outlined text-primary">tips_and_updates</span>
            Today's Recommendations
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-sm text-primary">check_circle</span>
              <span class="font-body-md">Walk for 30 minutes at a moderate pace.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-sm text-primary">check_circle</span>
              <span class="font-body-md">Avoid caffeine after 4:00 PM.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-sm text-primary">check_circle</span>
              <span class="font-body-md">Hydrate: Drink at least 8 glasses of water.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-sm text-primary">check_circle</span>
              <span class="font-body-md">Rest: Plan to sleep before 10:00 PM.</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  `
  });
}
