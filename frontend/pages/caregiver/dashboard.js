function getUserName(authState, fallback = 'Emily') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createCaregiverDashboardPage(authState) {
  const displayName = getUserName(authState, 'Emily');

  return `
    <div class="min-h-screen pb-24 text-on-background">
      <header class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-background px-margin-screen">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/10 bg-surface-container-high">
            <img class="h-full w-full object-cover" data-alt="A professional close-up portrait of a female caregiver named Emily. She has a friendly, trustworthy expression and is wearing a neat, light green clinical uniform. The background is a brightly lit, soft-focus modern healthcare facility with clean lines and warm lighting. The overall aesthetic is professional, clinical, and reassuring." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhe6th478o6DvkMYJ44GAVr1UjCcisC92Tn1qEGwRa9FB5pG1818Jg5I4E1XUGz9s-oUXc6RwHXqc1au7QgLto3A6dCEx9obnBvuTLFreiNvVRFk0_nhTElKpTzEeafBb5k9k_9bfPYrBOv_BPxjzf3Xw5dmaXSojaV1RNcktwkvAplkfteZBbqiiN3LtV4Er-FUBNchZna6jIlwyXotptOljeQb390HtORGs9AXtpfaomb22jD0t01g" />
          </div>
          <div class="flex flex-col">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile leading-none text-primary">Hello, ${displayName}</h1>
            <p class="font-label-sm text-label-sm text-on-surface-variant">Caring for Alex Mercer</p>
          </div>
        </div>
        <button class="rounded-full text-primary transition-opacity duration-200 active:scale-95 hover:opacity-80">
          <span class="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main class="mt-6 flex flex-col gap-stack-gap px-margin-screen">
        <section class="flex items-center gap-4 rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="h-16 w-16 overflow-hidden rounded-[20px] border border-outline-variant">
            <img class="h-full w-full object-cover" data-alt="A high-quality portrait of Alex Mercer, a 72-year-old man with a kind and dignified appearance. He has silver hair and is wearing a comfortable navy blue knit sweater. He is sitting in a sunlit living room with soft, warm tones. The image style is clean, sharp, and photography-grade, conveying a sense of health and stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO1coZJSBX5Z9WcbrkabQ-w6Fo6ESUVo6phzc0lJW_JUTNiZSccGgsHnw1MNv3xTkfTZ8Y4kwlJwcOXHvy9KXSkjtlPqHPe7u8ptwgD4BeeIGVHKGEUQEWPwKAhFJ1iahhnDfnTa2co6GzV_mosajm37nRIcrN83g-XEWHZHxjr3q2hHb7ra2C3LYsXiCzheQrfr0Jqlzdb-Y_E9x-qrsi8_YOIdk6_PyfbnXuhzxqTHkSNnGnIRFSg" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between">
              <div>
                <h2 class="font-headline-md text-headline-md text-on-surface">Alex Mercer</h2>
                <p class="font-label-lg text-label-lg text-on-surface-variant">Father, 72 Years Old</p>
              </div>
              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5">
                  <span class="h-2 w-2 rounded-full bg-primary status-pulse"></span>
                  <span class="font-label-sm text-label-sm text-primary">Connected</span>
                </div>
                <span class="mt-1 font-label-sm text-label-sm text-on-surface-variant">2 mins ago</span>
              </div>
            </div>
          </div>
        </section>

        <section class="relative overflow-hidden rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mb-4 flex items-center justify-between">
            <h3 class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">Current Heart Status</h3>
            <span class="font-label-sm text-label-sm text-on-surface-variant">Live ECG</span>
          </div>
          <div class="mb-2 flex items-baseline gap-2">
            <span class="font-display-lg text-display-lg text-primary">72</span>
            <span class="font-headline-md text-headline-md text-primary/70">BPM</span>
          </div>
          <div class="mb-6 flex flex-wrap gap-2">
            <div class="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
              <span class="material-symbols-outlined text-[16px] text-primary">check_circle</span>
              <span class="font-label-sm text-label-sm font-bold text-primary">Stable</span>
            </div>
            <div class="rounded-full bg-surface-container-low px-3 py-1">
              <span class="font-label-sm text-label-sm text-on-surface-variant">Normal Sinus Rhythm</span>
            </div>
            <div class="rounded-full bg-surface-container-low px-3 py-1">
              <span class="font-label-sm text-label-sm text-on-surface-variant">98% AI Confidence</span>
            </div>
          </div>
          <div class="h-16 w-full opacity-40">
            <svg class="h-full w-full fill-none stroke-2 stroke-primary" viewBox="0 0 400 100">
              <path d="M0,50 L50,50 L60,30 L70,70 L80,50 L120,50 L130,20 L145,90 L160,50 L200,50 L210,30 L220,70 L230,50 L270,50 L280,20 L295,90 L310,50 L350,50 L360,30 L370,70 L380,50 L400,50"></path>
            </svg>
          </div>
        </section>

        <section class="flex flex-col gap-1 rounded-[20px] border border-secondary-container bg-secondary-container/30 px-4 py-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px] text-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
            <p class="font-body-md text-body-md leading-relaxed text-on-secondary-container">
              Alex's heart rhythm is consistent and healthy today. No unusual activity detected.
            </p>
          </div>
          <button class="mt-1 self-start text-left font-label-lg text-label-lg text-primary hover:underline">View Details</button>
        </section>

        <section class="my-2 grid grid-cols-4 gap-4">
          <div class="flex flex-col items-center gap-2">
            <button class="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white text-primary shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
              <span class="material-symbols-outlined text-[28px]">account_circle</span>
            </button>
            <span class="text-center font-label-sm text-label-sm text-on-surface-variant">Profile</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button class="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white text-primary shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
              <span class="material-symbols-outlined text-[28px]">call</span>
            </button>
            <span class="text-center font-label-sm text-label-sm text-on-surface-variant">Call Alex</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button class="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white text-primary shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
              <span class="material-symbols-outlined text-[28px]">medical_services</span>
            </button>
            <span class="text-center font-label-sm text-label-sm text-on-surface-variant">Call Doctor</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button class="flex h-14 w-14 items-center justify-center rounded-[20px] bg-error-container text-error shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
              <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">emergency</span>
            </button>
            <span class="text-center font-label-sm text-label-sm text-error">SOS</span>
          </div>
        </section>

        <div class="grid gap-stack-gap md:grid-cols-2">
          <section class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <h3 class="mb-4 font-headline-md text-headline-md text-on-surface">Today's Care Tasks</h3>
            <div class="flex flex-col gap-4">
              <div class="group flex cursor-pointer items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-primary">
                    <span class="material-symbols-outlined text-[16px] text-white">check</span>
                  </div>
                  <span class="font-body-md text-body-md text-on-surface-variant line-through opacity-60">Morning Medication</span>
                </div>
              </div>
              <div class="group flex cursor-pointer items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-outline transition-transform group-active:scale-90"></div>
                  <span class="font-body-md text-body-md text-on-surface">Hydration: 2L Water</span>
                </div>
              </div>
              <div class="group flex cursor-pointer items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-outline transition-transform group-active:scale-90"></div>
                  <span class="font-body-md text-body-md text-on-surface">15 Min Light Walk</span>
                </div>
              </div>
            </div>
          </section>

          <section class="flex flex-col gap-stack-gap">
            <div class="rounded-[20px] bg-primary-container p-padding-card text-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
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

            <div class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-start gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-primary">
                  <span class="material-symbols-outlined">calendar_today</span>
                </div>
                <div class="flex-1">
                  <p class="font-label-sm text-label-sm text-on-surface-variant">Upcoming Appointment</p>
                  <h4 class="font-label-lg text-label-lg text-on-surface">Dr. Sarah Johnson, Cardiologist</h4>
                  <p class="font-body-md text-body-md text-on-surface-variant">St. Mary's Hospital</p>
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

      <nav class="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around border-t border-outline-variant bg-surface px-2">
        <a class="flex flex-col items-center justify-center text-primary transition-transform duration-200 active:scale-90" href="#/dashboard">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant transition-transform duration-200 active:scale-90 hover:bg-surface-variant/50" href="#/monitoring">
          <span class="material-symbols-outlined">monitor_heart</span>
          <span class="font-label-sm text-label-sm">Monitoring</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant transition-transform duration-200 active:scale-90 hover:bg-surface-variant/50" href="#/history">
          <span class="material-symbols-outlined">history</span>
          <span class="font-label-sm text-label-sm">History</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant transition-transform duration-200 active:scale-90 hover:bg-surface-variant/50" href="#/profile">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
