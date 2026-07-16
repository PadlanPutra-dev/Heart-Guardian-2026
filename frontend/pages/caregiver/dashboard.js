function getUserName(authState, fallback = 'Emily') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createCaregiverDashboardPage(authState) {
  const displayName = getUserName(authState, 'Emily');

  return `
    <div class="min-h-screen bg-[linear-gradient(180deg,#f8fbf8_0%,#f4f7fa_100%)] pb-24 text-on-background">
      <header class="sticky top-0 z-40 border-b border-outline-variant/40 bg-white/85 backdrop-blur-md">
        <div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-margin-screen">
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/10 bg-primary/10">
              <span class="material-symbols-outlined text-[22px] text-primary" style="font-variation-settings: 'FILL' 1;">ecg</span>
            </div>
            <div class="flex flex-col">
              <h1 class="font-headline-md text-headline-md leading-none text-primary">Hello, ${displayName}</h1>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Caregiver • Alex Mercer</p>
            </div>
          </div>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors duration-200 hover:bg-primary/10 active:scale-95">
            <span class="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main class="mx-auto flex w-full max-w-6xl flex-col gap-stack-gap px-margin-screen py-6 lg:px-8">
        <section class="overflow-hidden rounded-[24px] border border-outline-variant/40 bg-white p-padding-card shadow-[0px_10px_40px_rgba(15,23,42,0.06)]">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-center gap-4">
              <div class="h-16 w-16 overflow-hidden rounded-[20px] border border-outline-variant">
                <img class="h-full w-full object-cover" data-alt="A high-quality portrait of Alex Mercer, a 72-year-old man with a kind and dignified appearance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO1coZJSBX5Z9WcbrkabQ-w6Fo6ESUVo6phzc0lJW_JUTNiZSccGgsHnw1MNv3xTkfTZ8Y4kwlJwcOXHvy9KXSkjtlPqHPe7u8ptwgD4BeeIGVHKGEUQEWPwKAhFJ1iahhnDfnTa2co6GzV_mosajm37nRIcrN83g-XEWHZHxjr3q2hHb7ra2C3LYsXiCzheQrfr0Jqlzdb-Y_E9x-qrsi8_YOIdk6_PyfbnXuhzxqTHkSNnGnIRFSg" />
              </div>
              <div>
                <h2 class="font-headline-md text-headline-md text-on-surface">Alex Mercer</h2>
                <p class="font-label-lg text-label-lg text-on-surface-variant">Father • 72 years old</p>
              </div>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
              <span class="h-2 w-2 rounded-full bg-primary status-pulse"></span>
              <span class="font-label-sm text-label-sm font-semibold text-primary">Connected • 2 min ago</span>
            </div>
          </div>
        </section>

        <section class="grid gap-stack-gap lg:grid-cols-[1.1fr_0.9fr]">
          <div class="overflow-hidden rounded-[24px] border border-outline-variant/40 bg-white p-padding-card shadow-[0px_10px_40px_rgba(15,23,42,0.06)]">
            <div class="mb-4 flex items-center justify-between">
              <h3 class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">Current Heart Status</h3>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Live ECG</span>
            </div>
            <div class="mb-3 flex items-baseline gap-2">
              <span class="font-display-lg text-display-lg text-primary">72</span>
              <span class="font-headline-md text-headline-md text-primary/70">BPM</span>
            </div>
            <div class="mb-5 flex flex-wrap gap-2">
              <div class="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
                <span class="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                <span class="font-label-sm text-label-sm font-bold text-primary">Stable</span>
              </div>
              <div class="rounded-full bg-surface-container-low px-3 py-1">
                <span class="font-label-sm text-label-sm text-on-surface-variant">Normal Sinus Rhythm</span>
              </div>
            </div>
            <div class="h-16 w-full opacity-40">
              <svg class="h-full w-full fill-none stroke-2 stroke-primary" viewBox="0 0 400 100">
                <path d="M0,50 L50,50 L60,30 L70,70 L80,50 L120,50 L130,20 L145,90 L160,50 L200,50 L210,30 L220,70 L230,50 L270,50 L280,20 L295,90 L310,50 L350,50 L360,30 L370,70 L380,50 L400,50"></path>
              </svg>
            </div>
          </div>

          <div class="rounded-[24px] border border-secondary-container/40 bg-secondary-container/25 p-padding-card shadow-[0px_10px_40px_rgba(15,23,42,0.06)]">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[20px] text-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
              <p class="font-body-md text-body-md leading-relaxed text-on-secondary-container">
                Alex&apos;s heart rhythm is consistent and healthy today. No unusual activity detected.
              </p>
            </div>
            <button class="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-left font-label-lg text-label-lg text-primary shadow-sm">
              <span class="material-symbols-outlined text-[18px]">visibility</span>
              View Details
            </button>
          </div>
        </section>

        <section class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <a href="#/caregiver-profile" class="flex flex-col items-center gap-2 rounded-[20px] bg-white p-3 shadow-[0px_6px_24px_rgba(15,23,42,0.05)] transition-transform active:scale-95">
            <div class="flex h-12 w-12 items-center justify-center rounded-[16px] bg-primary/10 text-primary">
              <span class="material-symbols-outlined text-[24px]">account_circle</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant">Profile</span>
          </a>
          <a href="#/caregiver-monitoring" class="flex flex-col items-center gap-2 rounded-[20px] bg-white p-3 shadow-[0px_6px_24px_rgba(15,23,42,0.05)] transition-transform active:scale-95">
            <div class="flex h-12 w-12 items-center justify-center rounded-[16px] bg-primary/10 text-primary">
              <span class="material-symbols-outlined text-[24px]">monitor_heart</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant">Monitoring</span>
          </a>
          <a href="#/caregiver-alerts" class="flex flex-col items-center gap-2 rounded-[20px] bg-white p-3 shadow-[0px_6px_24px_rgba(15,23,42,0.05)] transition-transform active:scale-95">
            <div class="flex h-12 w-12 items-center justify-center rounded-[16px] bg-error/10 text-error">
              <span class="material-symbols-outlined text-[24px]">notifications</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant">Alerts</span>
          </a>
          <a href="#/caregiver-history" class="flex flex-col items-center gap-2 rounded-[20px] bg-white p-3 shadow-[0px_6px_24px_rgba(15,23,42,0.05)] transition-transform active:scale-95">
            <div class="flex h-12 w-12 items-center justify-center rounded-[16px] bg-secondary/10 text-secondary">
              <span class="material-symbols-outlined text-[24px]">history</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant">History</span>
          </a>
        </section>

        <div class="grid gap-stack-gap md:grid-cols-2">
          <section class="rounded-[24px] border border-outline-variant/40 bg-white p-padding-card shadow-[0px_10px_40px_rgba(15,23,42,0.06)]">
            <h3 class="mb-4 font-headline-md text-headline-md text-on-surface">Today&apos;s Care Tasks</h3>
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between rounded-[16px] border border-outline-variant/40 bg-surface-container-low p-3">
                <div class="flex items-center gap-3">
                  <div class="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                    <span class="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span class="font-body-md text-body-md text-on-surface-variant line-through opacity-60">Morning Medication</span>
                </div>
              </div>
              <div class="flex items-center justify-between rounded-[16px] border border-outline-variant/40 bg-surface-container-low p-3">
                <div class="flex items-center gap-3">
                  <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-outline"></div>
                  <span class="font-body-md text-body-md text-on-surface">Hydration: 2L Water</span>
                </div>
              </div>
              <div class="flex items-center justify-between rounded-[16px] border border-outline-variant/40 bg-surface-container-low p-3">
                <div class="flex items-center gap-3">
                  <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-outline"></div>
                  <span class="font-body-md text-body-md text-on-surface">15 Min Light Walk</span>
                </div>
              </div>
            </div>
          </section>

          <section class="flex flex-col gap-stack-gap">
            <div class="rounded-[24px] border border-primary/20 bg-primary-container p-padding-card text-white shadow-[0px_10px_40px_rgba(15,23,42,0.06)]">
              <div class="flex items-start gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <span class="material-symbols-outlined text-white">pill</span>
                </div>
                <div>
                  <p class="font-label-sm text-label-sm text-on-primary-container">Next Medication</p>
                  <h4 class="font-headline-md text-headline-md">Lisinopril (10mg)</h4>
                  <p class="font-label-lg text-label-lg opacity-90">Today at 2:00 PM</p>
                </div>
              </div>
            </div>

            <div class="rounded-[24px] border border-outline-variant/40 bg-white p-padding-card shadow-[0px_10px_40px_rgba(15,23,42,0.06)]">
              <div class="flex items-start gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-primary">
                  <span class="material-symbols-outlined">calendar_today</span>
                </div>
                <div class="flex-1">
                  <p class="font-label-sm text-label-sm text-on-surface-variant">Upcoming Appointment</p>
                  <h4 class="font-label-lg text-label-lg text-on-surface">Dr. Sarah Johnson</h4>
                  <p class="font-body-md text-body-md text-on-surface-variant">St. Mary&apos;s Hospital</p>
                  <div class="mt-2 flex items-center gap-1.5 text-primary">
                    <span class="material-symbols-outlined text-[16px]">schedule</span>
                    <span class="font-label-lg text-label-lg">Tomorrow, 10:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <nav class="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around border-t border-outline-variant/50 bg-white/95 px-2 shadow-[0px_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/dashboard">
          <span class="material-symbols-outlined">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-monitoring">
          <span class="material-symbols-outlined">monitor_heart</span>
          <span class="font-label-sm text-label-sm">Monitoring</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-alerts">
          <span class="material-symbols-outlined">notifications</span>
          <span class="font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-history">
          <span class="material-symbols-outlined">history</span>
          <span class="font-label-sm text-label-sm">History</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-transform duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-profile">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
