function getUserName(authState, fallback = 'Dr. Sarah Johnson') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

function getGreeting() {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 12) return 'Good Morning';
  if (hours >= 12 && hours < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export function createDoctorDashboardPage(authState) {
  const doctorName = getUserName(authState, 'Dr. Sarah Johnson');
  const greeting = getGreeting();

  return `
    <div class="min-h-screen bg-surface text-on-surface pb-24">
      <header class="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen max-w-6xl left-0 right-0 mx-auto">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 overflow-hidden rounded-full border-2 border-primary-container">
            <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwMjl-LjDJ1bWoPQPra01xmHsL7rWluZsDnXHiR8gblRXOiLHUn4ZeTqWBbTh14cPSCZIYGGIQGxjsBKW3VN_n8GV7fEhcACpdN85V8SiPDnE_VTHw8cwbBHkeYJzyPnGgE7IIpYZXxcsAW5CFFXdKBrtf-VJrX68-Xk7B1eLNEhWnx5G06Uqv-56i9JYFj_GQZtWxHAL1CkE_VMSVsY7vZQwyJ9wRoUgX1r0jdsd64_4FHXKSmJBhg" alt="Doctor avatar" />
          </div>
          <div class="flex flex-col">
            <span class="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary">Heart Guardian</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low">
            <span class="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main class="dashboard-shell mx-auto w-full space-y-section-gap px-margin-screen pt-20 lg:px-8">
        <section class="space-y-1">
          <h1 class="font-headline-lg text-headline-lg text-on-surface">${greeting}, ${doctorName}</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">Cardiologist • Heart Guardian Doctor</p>
        </section>

        <section class="grid grid-cols-2 gap-stack-gap sm:grid-cols-2 lg:grid-cols-4">
          <div class="medical-card flex min-h-[100px] flex-col justify-between p-padding-card">
            <div class="mb-4 flex items-center justify-between">
              <span class="font-label-sm text-label-sm text-on-surface-variant">Total Patients</span>
              <span class="h-2 w-2 rounded-full bg-primary"></span>
            </div>
            <div class="font-headline-lg text-headline-lg">48</div>
          </div>
          <div class="medical-card flex min-h-[100px] flex-col justify-between p-padding-card">
            <div class="mb-4 flex items-center justify-between">
              <span class="font-label-sm text-label-sm text-on-surface-variant">Stable</span>
              <span class="h-2 w-2 rounded-full bg-[#0B7A28]"></span>
            </div>
            <div class="font-headline-lg text-headline-lg">38</div>
          </div>
          <div class="medical-card flex min-h-[100px] flex-col justify-between p-padding-card">
            <div class="mb-4 flex items-center justify-between">
              <span class="font-label-sm text-label-sm text-on-surface-variant">Warning</span>
              <span class="h-2 w-2 rounded-full bg-tertiary"></span>
            </div>
            <div class="font-headline-lg text-headline-lg">7</div>
          </div>
          <div class="medical-card relative flex min-h-[100px] flex-col justify-between overflow-hidden p-padding-card">
            <div class="pointer-events-none absolute inset-0 bg-error/5"></div>
            <div class="relative z-10 mb-4 flex items-center justify-between text-error">
              <span class="font-label-sm text-label-sm">Critical</span>
              <span class="h-2 w-2 rounded-full bg-error"></span>
            </div>
            <div class="relative z-10 font-headline-lg text-headline-lg text-error">3</div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center justify-between">
            <h2 class="flex items-center gap-2 font-headline-md text-headline-md">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
              AI Priority Queue
            </h2>
            <span class="font-label-lg text-label-lg text-primary">3 Alerts</span>
          </div>
          <div class="space-y-stack-gap">
            <div class="medical-card relative overflow-hidden border-l-4 border-error p-padding-card">
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <h3 class="font-headline-md text-headline-md">Alex Mercer</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">Possible Arrhythmia</p>
                </div>
                <span class="status-pill bg-error/10 text-error">Critical</span>
              </div>
              <div class="flex gap-4">
                <div class="flex flex-col">
                  <span class="font-label-sm text-label-sm text-on-surface-variant">Heart Rate</span>
                  <span class="font-headline-md text-headline-md text-error">112 BPM</span>
                </div>
                <div class="flex flex-col border-l border-outline-variant pl-4">
                  <span class="font-label-sm text-label-sm text-on-surface-variant">Risk Score</span>
                  <span class="font-headline-md text-headline-md">94%</span>
                </div>
              </div>
            </div>
            <div class="medical-card border-l-4 border-tertiary p-padding-card">
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <h3 class="font-headline-md text-headline-md">Emma Thompson</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">Irregular Rhythm</p>
                </div>
                <span class="status-pill bg-tertiary/10 text-tertiary">Warning</span>
              </div>
              <div class="flex gap-4">
                <div class="flex flex-col">
                  <span class="font-label-sm text-label-sm text-on-surface-variant">Heart Rate</span>
                  <span class="font-headline-md text-headline-md">88 BPM</span>
                </div>
                <div class="flex flex-col border-l border-outline-variant pl-4">
                  <span class="font-label-sm text-label-sm text-on-surface-variant">Risk Score</span>
                  <span class="font-headline-md text-headline-md">62%</span>
                </div>
              </div>
            </div>
            <div class="medical-card border-l-4 border-tertiary p-padding-card">
              <div class="mb-3 flex items-start justify-between">
                <div>
                  <h3 class="font-headline-md text-headline-md">James Wilson</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">Missing Medication</p>
                </div>
                <span class="status-pill bg-tertiary/10 text-tertiary">Warning</span>
              </div>
              <div class="flex gap-4">
                <div class="flex flex-col">
                  <span class="font-label-sm text-label-sm text-on-surface-variant">Heart Rate</span>
                  <span class="font-headline-md text-headline-md">92 BPM</span>
                </div>
                <div class="flex flex-col border-l border-outline-variant pl-4">
                  <span class="font-label-sm text-label-sm text-on-surface-variant">Risk Score</span>
                  <span class="font-headline-md text-headline-md">58%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h2 class="font-headline-md text-headline-md">Quick Actions</h2>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
            <a href="#/doctor-patients" class="flex h-14 items-center justify-center gap-2 rounded-[20px] bg-primary font-label-lg text-on-primary shadow-sm transition-all hover:opacity-90 active:scale-95">
              <span class="material-symbols-outlined text-[20px]">group</span>
              Patients
            </a>
            <a href="#/doctor-calendar" class="flex h-14 items-center justify-center gap-2 rounded-[20px] bg-secondary-container font-label-lg text-on-secondary-container transition-all hover:bg-secondary-container/80 active:scale-95">
              <span class="material-symbols-outlined text-[20px]">calendar_month</span>
              Appointments
            </a>
            <a href="#/doctor-alerts" class="flex h-14 items-center justify-center gap-2 rounded-[20px] bg-error-container font-label-lg text-on-error-container transition-all hover:opacity-90 active:scale-95">
              <span class="material-symbols-outlined text-[20px]">emergency</span>
              Alerts
            </a>
            <a href="#/doctor-profile" class="flex h-14 items-center justify-center gap-2 rounded-[20px] bg-surface-container-high font-label-lg text-on-surface transition-all hover:bg-surface-container-highest active:scale-95">
              <span class="material-symbols-outlined text-[20px]">description</span>
              Profile
            </a>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center justify-between">
            <h2 class="font-headline-md text-headline-md">Today's Schedule</h2>
            <button class="font-label-lg text-label-lg text-primary">View All</button>
          </div>
          <div class="medical-card divide-y divide-outline-variant/30">
            <div class="flex items-center gap-4 p-padding-card">
              <div class="min-w-[60px] text-center">
                <p class="font-label-lg text-label-lg text-primary">10:30</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">AM</p>
              </div>
              <div class="flex-1">
                <p class="font-headline-md text-headline-md text-[16px]">Liam Davis</p>
                <p class="font-body-md text-body-md text-on-surface-variant">Initial Checkup</p>
              </div>
              <button class="material-symbols-outlined text-on-surface-variant">chevron_right</button>
            </div>
            <div class="flex items-center gap-4 p-padding-card">
              <div class="min-w-[60px] text-center">
                <p class="font-label-lg text-label-lg text-on-surface">11:15</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">AM</p>
              </div>
              <div class="flex-1">
                <p class="font-headline-md text-headline-md text-[16px]">Sofia Garcia</p>
                <p class="font-body-md text-body-md text-on-surface-variant">AFib Follow-up</p>
              </div>
              <button class="material-symbols-outlined text-on-surface-variant">chevron_right</button>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h2 class="font-headline-md text-headline-md">Recent Alerts</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-4 rounded-[20px] bg-surface-container-low p-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-error/10 text-error">
                <span class="material-symbols-outlined">heart_broken</span>
              </div>
              <div class="flex-1">
                <p class="font-label-lg text-label-lg">Possible AFib Detected</p>
                <p class="font-body-md text-body-md text-on-surface-variant">Sofia Garcia • 08:45 AM</p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-[20px] bg-surface-container-low p-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary">
                <span class="material-symbols-outlined">pill</span>
              </div>
              <div class="flex-1">
                <p class="font-label-lg text-label-lg">Medication Missed</p>
                <p class="font-body-md text-body-md text-on-surface-variant">James Wilson • 07:30 AM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 left-0 right-0 z-50 mx-auto grid h-20 w-full max-w-6xl grid-cols-5 items-center rounded-t-[24px] border-t border-outline-variant/60 bg-white/95 px-2 pb-2 shadow-[0px_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] p-2 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/dashboard" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">home</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] p-2 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-patients" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">group</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Patients</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] p-2 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-calendar" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">calendar_today</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Appointments</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] p-2 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-alerts" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">notification_important</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] p-2 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-profile" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">person</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
