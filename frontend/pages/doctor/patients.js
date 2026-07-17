function getUserName(authState, fallback = 'Dr. Sarah Johnson') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createDoctorPatientsPage(authState) {
  return `
    <div class="min-h-screen bg-surface pb-24 text-on-surface">
      <header class="sticky top-0 z-40 w-full border-b border-outline-variant bg-surface">
        <div class="flex h-16 items-center justify-between px-margin-screen">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 overflow-hidden rounded-full border border-outline-variant">
              <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe93KtePFBN3d2cRtEA2umgz8mQct9WNx-AHe0rJxFWwXEN2yhRCkBFABTAcIOiyPp1wRgp5zE1LVouf07_PNL4FCAtyVgT9vq0COywPN0vFbmF_UQ7kdsfWqKoqQdSL0NvWiUDNXKdil4u0nZNEoon-VVkPFbUplOaMoMGZ6PcRuN-hWZgHJr7M0zLFm0aM3qxlcWYNSInyGNWWI3jHW8nyHxiV-pjXzL5a1_JDLHzswEhP4y5-1j6w" alt="Doctor avatar" />
            </div>
            <div class="flex flex-col">
              <span class="font-headline-lg-mobile text-headline-lg-mobile text-primary">CardioPulse</span>
            </div>
          </div>
          <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-low active:opacity-80">
            <span class="material-symbols-outlined text-on-surface-variant">settings</span>
          </button>
        </div>
      </header>

      <main class="dashboard-shell mx-auto w-full space-y-section-gap px-margin-screen pt-6 lg:px-8">
        <section class="space-y-2">
          <div class="flex items-end justify-between">
            <div>
              <h1 class="font-headline-lg text-headline-lg text-on-background">Patients</h1>
              <p class="font-body-md text-body-md text-on-surface-variant">Manage and monitor your assigned patients</p>
            </div>
            <button class="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-highest text-primary transition-transform active:scale-95">
              <span class="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </section>

        <section>
          <div class="group relative">
            <div class="pointer-events-none absolute inset-y-0 left-4 flex items-center">
              <span class="material-symbols-outlined text-outline">search</span>
            </div>
            <input class="h-14 w-full rounded-full border border-outline-variant bg-surface-container-lowest pl-12 pr-4 font-body-md text-body-md outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary" placeholder="Search patient by name, ID, or diagnosis" type="text" />
          </div>
        </section>

        <section class="-mx-margin-screen">
          <div class="no-scrollbar flex gap-3 overflow-x-auto px-margin-screen">
            <button class="whitespace-nowrap rounded-full bg-primary px-5 py-2 font-label-lg text-label-lg text-on-primary">All</button>
            <button class="whitespace-nowrap rounded-full bg-surface-container-highest px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container-high">Stable</button>
            <button class="whitespace-nowrap rounded-full bg-surface-container-highest px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container-high">Warning</button>
            <button class="whitespace-nowrap rounded-full bg-surface-container-highest px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container-high">Critical</button>
            <button class="whitespace-nowrap rounded-full bg-surface-container-highest px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container-high">Upcoming Appointment</button>
            <button class="whitespace-nowrap rounded-full bg-surface-container-highest px-5 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container-high">Recently Updated</button>
          </div>
        </section>

        <section>
          <div class="flex items-center justify-between rounded-card border border-outline-variant bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="space-y-1">
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Assigned Patients</span>
              <div class="font-display-lg text-display-lg text-primary">48</div>
            </div>
            <div class="flex gap-4 border-l border-outline-variant pl-6">
              <div class="text-center">
                <div class="mx-auto mb-1 h-2 w-2 rounded-full bg-error"></div>
                <div class="font-headline-md text-headline-md text-on-background">3</div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">Critical</div>
              </div>
              <div class="text-center">
                <div class="mx-auto mb-1 h-2 w-2 rounded-full bg-tertiary"></div>
                <div class="font-headline-md text-headline-md text-on-background">7</div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">Review</div>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h2 class="pb-2 font-label-lg text-label-lg uppercase tracking-widest text-outline">Priority Monitoring</h2>

          <div class="overflow-hidden rounded-card border-l-4 border-error bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all active:scale-[0.98]">
            <div class="p-padding-card">
              <div class="mb-4 flex items-start justify-between">
                <div class="flex gap-4">
                  <div class="relative">
                    <div class="h-14 w-14 overflow-hidden rounded-full border-2 border-surface">
                      <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAuIBTojIrVnzYw11rLSewtfZGMM-iGPxW62jEXkf2wWLCuZk5yPd0EiEdH0mwcsAfs-PVHPtrx5HfoE8paEHcp_GhEvMYus39chz5EZSESRBqzUje17QFfIBJlgVZd0pBdW7bFhwcNAtiobNYpxc8ahRWOvMw2AqTnIiEYFy4F1lUc6Sz36NQwiFskqWQFy4PnhuFMUKupihxPck87vopSBp2p5rNZApLUbUNjzykiFpyQfYTSE4TQg" alt="Alex Mercer" />
                    </div>
                    <div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-surface-container-lowest bg-error"></div>
                  </div>
                  <div>
                    <h3 class="font-headline-md text-headline-md text-on-background">Alex Mercer</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant">Age: 72 | ID: HG-88291</p>
                  </div>
                </div>
                <div class="flex flex-col items-end">
                  <div class="flex items-center gap-1 rounded-full bg-error-container px-3 py-1 font-label-lg text-label-lg text-on-error-container">
                    <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">warning</span>
                    Critical
                  </div>
                  <span class="mt-1 font-headline-md text-headline-md text-error">112 <span class="text-label-sm">BPM</span></span>
                </div>
              </div>
              <div class="mb-4 flex items-start gap-3 rounded-xl bg-surface-container-low p-3">
                <span class="material-symbols-outlined mt-0.5 text-error">ecg_heart</span>
                <div>
                  <p class="font-label-lg text-label-lg text-on-background">AI Detection Summary</p>
                  <p class="font-body-md text-body-md text-on-surface-variant">Detected Possible Atrial Fibrillation. Significant increase in heart rate over last 2 hours.</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-outline">Last updated: 4 mins ago</span>
                <button class="rounded-full bg-primary px-4 py-2 font-label-lg text-label-lg text-on-primary active:opacity-90" type="button" data-view-details data-patient-name="Alex Mercer" data-patient-age="72" data-patient-id="HG-88291" data-patient-bpm="112" data-patient-status-label="Critical" data-patient-risk-label="Significant increase in heart rate over last 2 hours." data-patient-doctor-name="Dr. Michael Johnson" data-patient-last-updated="Updated 4 mins ago" data-patient-avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCAuIBTojIrVnzYw11rLSewtfZGMM-iGPxW62jEXkf2wWLCuZk5yPd0EiEdH0mwcsAfs-PVHPtrx5HfoE8paEHcp_GhEvMYus39chz5EZSESRBqzUje17QFfIBJlgVZd0pBdW7bFhwcNAtiobNYpxc8ahRWOvMw2AqTnIiEYFy4F1lUc6Sz36NQwiFskqWQFy4PnhuFMUKupihxPck87vopSBp2p5rNZApLUbUNjzykiFpyQfYTSE4TQg" data-patient-accent="error">View Details</button>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-card border-l-4 border-tertiary-fixed-dim bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all active:scale-[0.98]">
            <div class="p-padding-card">
              <div class="mb-4 flex items-start justify-between">
                <div class="flex gap-4">
                  <div class="relative">
                    <div class="h-14 w-14 overflow-hidden rounded-full border-2 border-surface">
                      <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZP6RgHVjoae6KdP7XwTYHLVjmQSI-FQuvPu4XJQZ_PIshl0qI3JUxhVmVLsg2uZoX8MUXSVvzGEMByVsNCClb5yDhUIkj5I57ssf8NWq1Xt5gh5h8SpcO4EtmHSJairBsB6Fr4jSU62wBlgbjMvTF-EltWWMEkNaa0aT_qG42jj75RqzIwGPiL5etbKxD6sbpMQ8MbBXRwJY65Y7o5kGS2jO0ZNcvmxFr1W8xxQxhABbew-1kO5K_KQ" alt="Emma Thompson" />
                    </div>
                    <div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-surface-container-lowest bg-tertiary"></div>
                  </div>
                  <div>
                    <h3 class="font-headline-md text-headline-md text-on-background">Emma Thompson</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant">Age: 58 | ID: HG-91204</p>
                  </div>
                </div>
                <div class="flex flex-col items-end">
                  <div class="flex items-center gap-1 rounded-full bg-tertiary-fixed px-3 py-1 font-label-lg text-label-lg text-on-tertiary-fixed">
                    <span class="material-symbols-outlined text-[16px]">info</span>
                    Warning
                  </div>
                  <span class="mt-1 font-headline-md text-headline-md text-tertiary">94 <span class="text-label-sm">BPM</span></span>
                </div>
              </div>
              <div class="mb-4 flex items-start gap-3 rounded-xl bg-surface-container-low p-3">
                <span class="material-symbols-outlined mt-0.5 text-tertiary">monitoring</span>
                <div>
                  <p class="font-label-lg text-label-lg text-on-background">AI Detection Summary</p>
                  <p class="font-body-md text-body-md text-on-surface-variant">Elevated resting heart rate compared to 7-day average. Blood pressure slightly above threshold.</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-outline">Last updated: 18 mins ago</span>
                <button class="rounded-full bg-primary px-4 py-2 font-label-lg text-label-lg text-on-primary active:opacity-90" type="button" data-view-details data-patient-name="Emma Thompson" data-patient-age="58" data-patient-id="HG-91204" data-patient-bpm="94" data-patient-status-label="Warning" data-patient-risk-label="Elevated resting heart rate compared to 7-day average." data-patient-doctor-name="Dr. Michael Johnson" data-patient-last-updated="Updated 18 mins ago" data-patient-avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAZP6RgHVjoae6KdP7XwTYHLVjmQSI-FQuvPu4XJQZ_PIshl0qI3JUxhVmVLsg2uZoX8MUXSVvzGEMByVsNCClb5yDhUIkj5I57ssf8NWq1Xt5gh5h8SpcO4EtmHSJairBsB6Fr4jSU62wBlgbjMvTF-EltWWMEkNaa0aT_qG42jj75RqzIwGPiL5etbKxD6sbpMQ8MbBXRwJY65Y7o5kGS2jO0ZNcvmxFr1W8xxQxhABbew-1kO5K_KQ" data-patient-accent="warning">View Details</button>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-card border-l-4 border-primary bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all active:scale-[0.98]">
            <div class="p-padding-card">
              <div class="mb-4 flex items-start justify-between">
                <div class="flex gap-4">
                  <div class="relative">
                    <div class="h-14 w-14 overflow-hidden rounded-full border-2 border-surface">
                      <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzLDM3PC42ZcFmA_HoK6dcLFbd5ORNvbRKq52PtsGJi5y71Nen0HZ2iMw8WoHBaBDPA8UQIIyVG1K8mk-UxjZuPiLTmDnjRViB2P6VvP7j5AAdCq6fmHJc7Rs3VXQdhI1E3j5KmDBv2O42Q0leaePUaAfTqLmi9uVdNrmqzUg5c6qpdXxC9MNjyGjvzXcXpX02LLMT2syZY6UbGCcjsc9PICMsPinwzqSS2Au-Jsj4b3AGnok2HEbT9Q" alt="Marcus Chen" />
                    </div>
                    <div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-surface-container-lowest bg-primary"></div>
                  </div>
                  <div>
                    <h3 class="font-headline-md text-headline-md text-on-background">Marcus Chen</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant">Age: 32 | ID: HG-77312</p>
                  </div>
                </div>
                <div class="flex flex-col items-end">
                  <div class="flex items-center gap-1 rounded-full bg-primary-fixed px-3 py-1 font-label-lg text-label-lg text-on-primary-fixed">
                    <span class="material-symbols-outlined text-[16px]">check_circle</span>
                    Stable
                  </div>
                  <span class="mt-1 font-headline-md text-headline-md text-primary">72 <span class="text-label-sm">BPM</span></span>
                </div>
              </div>
              <div class="mb-4 flex items-start gap-3 rounded-xl bg-surface-container-low p-3">
                <span class="material-symbols-outlined mt-0.5 text-primary">favorite</span>
                <div>
                  <p class="font-label-lg text-label-lg text-on-background">AI Detection Summary</p>
                  <p class="font-body-md text-body-md text-on-surface-variant">Normal Sinus Rhythm. All vitals within healthy range for the last 24-hour monitoring period.</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-outline">Last updated: 1 hour ago</span>
                <button class="rounded-full bg-primary px-4 py-2 font-label-lg text-label-lg text-on-primary active:opacity-90" type="button" data-view-details data-patient-name="Marcus Chen" data-patient-age="32" data-patient-id="HG-77312" data-patient-bpm="72" data-patient-status-label="Stable" data-patient-risk-label="All vitals within healthy range for the last 24-hour monitoring period." data-patient-doctor-name="Dr. Michael Johnson" data-patient-last-updated="Updated 1 hour ago" data-patient-avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBzLDM3PC42ZcFmA_HoK6dcLFbd5ORNvbRKq52PtsGJi5y71Nen0HZ2iMw8WoHBaBDPA8UQIIyVG1K8mk-UxjZuPiLTmDnjRViB2P6VvP7j5AAdCq6fmHJc7Rs3VXQdhI1E3j5KmDBv2O42Q0leaePUaAfTqLmi9uVdNrmqzUg5c6qpdXxC9MNjyGjvzXcXpX02LLMT2syZY6UbGCcjsc9PICMsPinwzqSS2Au-Jsj4b3AGnok2HEbT9Q" data-patient-accent="primary">View Details</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 left-0 right-0 z-50 mx-auto grid h-20 w-full max-w-6xl grid-cols-5 items-center rounded-t-[24px] border-t border-outline-variant/60 bg-white/95 px-2 pb-2 shadow-[0px_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/dashboard" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">home</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-patients" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">group</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Patients</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-calendar" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">calendar_today</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Appointments</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-alerts" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">notifications_active</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-profile" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined">person</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
