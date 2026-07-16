function getUserName(authState, fallback = 'Emily') {
  return authState?.user?.fullName || authState?.user?.name || authState?.name || fallback;
}

export function createCaregiverProfilePage(authState) {
  const displayName = getUserName(authState, 'Emily');

  return `
    <div class="min-h-screen bg-[linear-gradient(180deg,#f8fbf8_0%,#f4f7fa_100%)] pb-32 font-body-md text-on-background selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <header class="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant/40 bg-white/85 px-margin-screen backdrop-blur-md">
        <div class="flex items-center gap-3">
          <button class="rounded-full p-2 text-primary transition-colors duration-200 hover:bg-surface-container-low active:scale-95">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Profile</h1>
        </div>
        <div class="flex items-center gap-2">
          <button class="rounded-full p-2 text-primary transition-colors duration-200 hover:bg-surface-container-low active:scale-95">
            <span class="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main class="mx-auto flex w-full max-w-6xl flex-col gap-stack-gap px-margin-screen py-6 lg:px-8">
        <section class="flex items-start justify-between">
          <div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">Caregiver Profile</h2>
            <p class="font-body-md text-on-surface-variant">Manage your caregiver account</p>
          </div>
          <button class="rounded-full bg-primary px-4 py-2 font-label-lg text-on-primary shadow-clinical transition-transform duration-200 active:scale-95">
            Edit Profile
          </button>
        </section>

        <section class="flex items-center gap-4 rounded-card border border-surface-variant/30 bg-surface-container-lowest p-padding-card shadow-clinical">
          <div class="relative">
            <div class="h-20 w-20 rounded-full border-4 border-secondary-container bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFZoZAYTP6wCZjFuMPocs6jVbe_wdcPFW1cdvJl80Q9JLVXCXuYHUuuWQN-yil8Nmlv-6eiD7Lmkg1zk436NQffrbGKWLLPC3VMLZ7gbiMQkqKWaevfVc6XNLUO7SfnMN7aBmV2v15KJjMwSCoaTnyt0pHdQ202rqQFrnxLYWbwbLyy4fubrRZaumeWYU5v7FgpHYMScBmueDWNXEWdY3Vct3UQpM-tTlXmxgmL8gaj13p3XRtPrq9bA')"></div>
            <div class="absolute bottom-0 right-0 rounded-full border-2 border-white bg-primary-container p-1 text-on-primary-container">
              <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-headline-md text-headline-md text-on-surface">${displayName}</h3>
              <span class="rounded-full bg-secondary-container/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">Verified</span>
            </div>
            <p class="text-label-lg text-on-surface-variant">Member since Oct 2023</p>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <div class="flex items-center justify-between px-1">
            <h4 class="text-[11px] font-label-lg uppercase tracking-widest text-on-surface-variant">Personal Information</h4>
            <button class="font-label-lg text-primary">Edit</button>
          </div>
          <div class="space-y-4 rounded-card border border-surface-variant/30 bg-surface-container-lowest p-padding-card shadow-clinical">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-label-sm text-on-surface-variant">Full Name</p>
                <p class="font-body-lg text-on-surface">${displayName}</p>
              </div>
              <div>
                <p class="text-label-sm text-on-surface-variant">Relationship</p>
                <p class="font-body-lg text-on-surface">Daughter</p>
              </div>
              <div>
                <p class="text-label-sm text-on-surface-variant">Email</p>
                <p class="font-body-lg text-on-surface">emily@example.com</p>
              </div>
              <div>
                <p class="text-label-sm text-on-surface-variant">Phone</p>
                <p class="font-body-lg text-on-surface">+1 (555) 123-4567</p>
              </div>
              <div>
                <p class="text-label-sm text-on-surface-variant">Gender</p>
                <p class="font-body-lg text-on-surface">Female</p>
              </div>
              <div>
                <p class="text-label-sm text-on-surface-variant">Date of Birth</p>
                <p class="font-body-lg text-on-surface">June 12, 1985</p>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h4 class="px-1 text-[11px] font-label-lg uppercase tracking-widest text-on-surface-variant">Connected Patients</h4>
          <div class="grid grid-cols-1 gap-stack-gap md:grid-cols-2">
            <div class="relative flex items-center gap-4 overflow-hidden rounded-card border border-surface-variant/30 bg-surface-container-lowest p-padding-card shadow-clinical">
              <div class="absolute right-0 top-0 h-1 w-24 rounded-bl-full bg-primary"></div>
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed-dim/20 text-primary">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
              </div>
              <div class="flex-1">
                <h5 class="font-headline-md text-headline-md text-on-surface">Alex Mercer</h5>
                <div class="flex items-center gap-2">
                  <span class="text-label-lg text-on-surface-variant">Father</span>
                  <span class="h-1 w-1 rounded-full bg-outline-variant"></span>
                  <span class="font-bold text-label-lg text-primary">Stable</span>
                </div>
                <p class="mt-1 text-label-sm italic text-on-surface-variant">Connected since Nov 2023</p>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <button class="flex flex-col items-center justify-center gap-2 rounded-card border-2 border-dashed border-outline-variant bg-surface-container p-padding-card text-on-surface-variant transition-colors hover:bg-surface-container-high">
              <span class="material-symbols-outlined">add_circle</span>
              <span class="font-label-lg">Connect New Patient</span>
            </button>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h4 class="px-1 text-[11px] font-label-lg uppercase tracking-widest text-on-surface-variant">Emergency Contacts</h4>
          <div class="overflow-hidden rounded-card border border-surface-variant/30 bg-surface-container-lowest shadow-clinical">
            <div class="flex items-center gap-4 border-b border-surface-variant/30 p-padding-card">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-error-container/10 text-error">
                <span class="material-symbols-outlined">medical_services</span>
              </div>
              <div class="flex-1">
                <p class="text-label-sm text-on-surface-variant">Primary Physician</p>
                <p class="font-body-lg font-semibold text-on-surface">Dr. Sarah Johnson</p>
                <p class="text-label-lg text-on-surface-variant">St. Mary's Hospital</p>
              </div>
              <button class="rounded-full p-2 text-primary transition-colors hover:bg-surface-container">
                <span class="material-symbols-outlined">call</span>
              </button>
            </div>
            <div class="flex items-center gap-4 border-b border-surface-variant/30 p-padding-card">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-error-container/10 text-error">
                <span class="material-symbols-outlined">emergency_share</span>
              </div>
              <div class="flex-1">
                <p class="text-label-sm text-on-surface-variant">Local Emergency</p>
                <p class="font-body-lg font-semibold text-on-surface">911 Services</p>
              </div>
              <button class="rounded-full p-2 text-primary transition-colors hover:bg-surface-container">
                <span class="material-symbols-outlined">call</span>
              </button>
            </div>
            <div class="flex items-center gap-4 p-padding-card">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container/10 text-secondary">
                <span class="material-symbols-outlined">group</span>
              </div>
              <div class="flex-1">
                <p class="text-label-sm text-on-surface-variant">Family Member</p>
                <p class="font-body-lg font-semibold text-on-surface">Mark Watson</p>
                <p class="text-label-lg text-on-surface-variant">Brother</p>
              </div>
              <button class="rounded-full p-2 text-primary transition-colors hover:bg-surface-container">
                <span class="material-symbols-outlined">call</span>
              </button>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h4 class="px-1 text-[11px] font-label-lg uppercase tracking-widest text-on-surface-variant">Notifications & Preferences</h4>
          <div class="divide-y divide-surface-variant/30 rounded-card border border-surface-variant/30 bg-surface-container-lowest px-padding-card shadow-clinical">
            <label class="flex cursor-pointer items-center justify-between py-4">
              <div class="flex flex-col">
                <span class="font-body-lg text-on-surface">Emergency Alerts</span>
                <span class="text-label-sm text-on-surface-variant">Instant push for high-risk vitals</span>
              </div>
              <div class="relative inline-flex items-center cursor-pointer">
                <input checked class="peer sr-only" type="checkbox" />
                <div class="peer h-6 w-11 rounded-full bg-surface-container-highest after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </div>
            </label>
            <label class="flex cursor-pointer items-center justify-between py-4">
              <div class="flex flex-col">
                <span class="font-body-lg text-on-surface">Medication Reminders</span>
                <span class="text-label-sm text-on-surface-variant">Confirm if patient took prescribed meds</span>
              </div>
              <div class="relative inline-flex items-center cursor-pointer">
                <input checked class="peer sr-only" type="checkbox" />
                <div class="peer h-6 w-11 rounded-full bg-surface-container-highest after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </div>
            </label>
            <label class="flex cursor-pointer items-center justify-between py-4">
              <div class="flex flex-col">
                <span class="font-body-lg text-on-surface">Daily AI Summary</span>
                <span class="text-label-sm text-on-surface-variant">Morning briefing on heart trend lines</span>
              </div>
              <div class="relative inline-flex items-center cursor-pointer">
                <input class="peer sr-only" type="checkbox" />
                <div class="peer h-6 w-11 rounded-full bg-surface-container-highest after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </div>
            </label>
            <label class="flex cursor-pointer items-center justify-between py-4">
              <div class="flex flex-col">
                <span class="font-body-lg text-on-surface">Weekly Health Report</span>
                <span class="text-label-sm text-on-surface-variant">Full diagnostic report every Monday</span>
              </div>
              <div class="relative inline-flex items-center cursor-pointer">
                <input checked class="peer sr-only" type="checkbox" />
                <div class="peer h-6 w-11 rounded-full bg-surface-container-highest after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </div>
            </label>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h4 class="px-1 text-[11px] font-label-lg uppercase tracking-widest text-on-surface-variant">Security & Support</h4>
          <div class="overflow-hidden rounded-card border border-surface-variant/30 bg-surface-container-lowest shadow-clinical">
            <button class="group flex w-full items-center justify-between p-padding-card transition-colors hover:bg-surface-container">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline group-hover:text-primary">lock</span>
                <span class="font-body-lg text-on-surface">Change Password</span>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </button>
            <div class="flex w-full items-center justify-between border-t border-surface-variant/30 p-padding-card group">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline group-hover:text-primary">shield</span>
                <span class="font-body-lg text-on-surface">Two-Factor Authentication</span>
              </div>
              <span class="rounded-full bg-primary-container/10 px-3 py-1 text-label-sm font-bold text-primary">Active</span>
            </div>
            <button class="group flex w-full items-center justify-between border-t border-surface-variant/30 p-padding-card transition-colors hover:bg-surface-container">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline group-hover:text-primary">help</span>
                <span class="font-body-lg text-on-surface">Help Center</span>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </button>
            <button class="group flex w-full items-center justify-between border-t border-surface-variant/30 p-padding-card transition-colors hover:bg-surface-container">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline group-hover:text-primary">quiz</span>
                <span class="font-body-lg text-on-surface">FAQs</span>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </button>
          </div>
        </section>

        <section class="pt-4">
          <button
            type="button"
            class="flex w-full items-center justify-center gap-2 rounded-card border border-error/20 bg-error-container/10 p-4 font-headline-md text-error transition-transform duration-200 active:scale-95"
            data-logout="caregiver"
          >
            <span class="material-symbols-outlined">logout</span>
            Logout
          </button>
          <p class="mt-8 text-center text-label-sm text-on-surface-variant opacity-60">Version 2.4.0 (Build 1290)</p>
        </section>
      </main>

      <nav class="fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t border-surface-variant bg-white/95 px-2 pb-safe backdrop-blur">
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-colors duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/dashboard">
          <span class="material-symbols-outlined">home</span>
          <span class="font-label-sm text-label-sm">Home</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-colors duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-monitoring">
          <span class="material-symbols-outlined">monitor_heart</span>
          <span class="font-label-sm text-label-sm">Monitoring</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-colors duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-alerts">
          <div class="relative">
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-error"></span>
          </div>
          <span class="font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-2 transition-colors duration-200 active:scale-90 hover:bg-surface-container-low" data-bottom-nav-link="caregiver" href="#/caregiver-history">
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
