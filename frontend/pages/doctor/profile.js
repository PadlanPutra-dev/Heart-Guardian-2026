export function createDoctorProfilePage(authState) {
  return `
    <div class="min-h-screen bg-surface pb-24 text-on-surface">
      <header class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <div class="flex flex-col">
          <h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Profile</h1>
          <span class="text-label-sm text-on-surface-variant">Manage your professional information</span>
        </div>
        <button class="rounded-full bg-primary px-4 py-2 font-label-lg text-on-primary shadow-sm transition-all active:scale-95">
          Edit Profile
        </button>
      </header>

      <main class="dashboard-shell mx-auto mt-6 w-full space-y-section-gap px-margin-screen lg:px-8">
        <section class="flex flex-col items-center gap-6 rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)] md:flex-row md:items-start">
          <div class="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md md:h-32 md:w-32">
            <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq2fDhBXC9mfauNjWb05ivFQmCMgTc-oyRNK83zBz6n76dX3pY_qib_tXpTfVjGkUfmoEE7AKcXhgL_uBaY3yYz3lPtXpmhawdUA7c8sdk5p4aA_lBjVkut-aeazVrryk5VyoM_rOb-PfswIAhjMG6mBbOrhF9gmvqgv71RwhMuTXDvSw695dv3E66tbOC0w5Zo7wcQ_vc-RelKsWzRp9xpO2iT3o9_7qgYdgJv9DmawqAkUYo1igLaA" alt="Doctor profile" />
          </div>
          <div class="flex-1 space-y-2 text-center md:text-left">
            <div class="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <h2 class="font-headline-lg text-headline-lg text-on-surface">Dr. Sarah Johnson</h2>
              <span class="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-label-sm text-primary">
                <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">verified</span>
                Verified Cardiologist
              </span>
            </div>
            <p class="font-body-lg text-body-lg text-on-surface-variant">Senior Cardiologist</p>
            <div class="flex items-center justify-center gap-2 text-on-surface-variant md:justify-start">
              <span class="material-symbols-outlined text-[20px]">local_hospital</span>
              <span class="font-body-md text-body-md">St. Mary's Hospital</span>
            </div>
          </div>
        </section>

        <section class="grid grid-cols-2 gap-stack-gap md:grid-cols-5">
          <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-4 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <span class="font-headline-md text-headline-md text-primary">48</span>
            <span class="text-label-sm text-on-surface-variant">Assigned Patients</span>
          </div>
          <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-4 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <span class="font-headline-md text-headline-md text-primary">1,240</span>
            <span class="text-label-sm text-on-surface-variant">Consultations</span>
          </div>
          <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-4 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <span class="font-headline-md text-headline-md text-error">86</span>
            <span class="text-label-sm text-on-surface-variant">Emergency Cases</span>
          </div>
          <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-4 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <span class="font-headline-md text-headline-md text-secondary">4m</span>
            <span class="text-label-sm text-on-surface-variant">Avg Response</span>
          </div>
          <div class="col-span-2 flex flex-col items-center justify-center rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-4 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)] md:col-span-1">
            <span class="font-headline-md text-headline-md text-tertiary">912</span>
            <span class="text-label-sm text-on-surface-variant">AI Assisted</span>
          </div>
        </section>

        <div class="grid gap-section-gap md:grid-cols-2">
          <section class="space-y-stack-gap">
            <div class="flex items-center justify-between px-2">
              <h3 class="font-headline-md text-headline-md text-on-surface">Professional Info</h3>
              <span class="material-symbols-outlined text-outline">info</span>
            </div>
            <div class="space-y-4 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex flex-col">
                <span class="text-label-sm text-on-surface-variant">Registration Number</span>
                <span class="font-body-md font-semibold">ID-992831</span>
              </div>
              <div class="flex flex-col">
                <span class="text-label-sm text-on-surface-variant">Experience</span>
                <span class="font-body-md">12 Years</span>
              </div>
              <div class="flex flex-col">
                <span class="text-label-sm text-on-surface-variant">Education</span>
                <span class="font-body-md">MD, Johns Hopkins University</span>
              </div>
              <div class="flex flex-col">
                <span class="text-label-sm text-on-surface-variant">Contact</span>
                <span class="font-body-md">+1 (555) 902-1234</span>
                <span class="font-body-md text-primary">s.johnson@cardioassist.med</span>
              </div>
            </div>
          </section>

          <section class="space-y-stack-gap">
            <div class="flex items-center justify-between px-2">
              <h3 class="font-headline-md text-headline-md text-on-surface">Verification</h3>
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
            </div>
            <div class="space-y-4 rounded-[20px] border-l-4 border-primary bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-label-sm uppercase tracking-wider text-on-surface-variant">License Status</span>
                  <div class="flex items-center gap-2 font-bold text-primary">
                    <span class="material-symbols-outlined text-[18px]">check_circle</span>
                    VERIFIED ACTIVE
                  </div>
                </div>
              </div>
              <div class="space-y-2 border-t border-outline-variant pt-2">
                <div class="flex justify-between text-body-md">
                  <span class="text-on-surface-variant">STR Number</span>
                  <span class="font-medium">STR-229-8817-X</span>
                </div>
                <div class="flex justify-between text-body-md">
                  <span class="text-on-surface-variant">SIP Number</span>
                  <span class="font-medium">SIP-SJ-0091</span>
                </div>
                <div class="flex justify-between text-body-md">
                  <span class="text-on-surface-variant">Last Verified</span>
                  <span class="font-medium">Oct 12, 2023</span>
                </div>
                <div class="flex justify-between text-body-md">
                  <span class="text-on-surface-variant">Authority</span>
                  <span class="font-medium">Board of Medical Practice</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="grid gap-section-gap md:grid-cols-3">
          <div class="space-y-stack-gap md:col-span-1">
            <h3 class="px-2 font-headline-md text-headline-md text-on-surface">Hospital</h3>
            <div class="space-y-4 rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex flex-col gap-2">
                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-container text-primary">
                  <span class="material-symbols-outlined">domain</span>
                </div>
                <div class="font-bold text-body-lg">St. Mary's Hospital</div>
                <p class="text-label-sm text-on-surface-variant">Cardiology Dept, Wing B, Floor 4</p>
                <p class="text-label-sm text-on-surface-variant">122 Healthcare Plaza, Central District</p>
              </div>
            </div>
          </div>

          <div class="space-y-stack-gap md:col-span-2">
            <div class="flex items-center justify-between px-2">
              <h3 class="font-headline-md text-headline-md text-on-surface">Availability Schedule</h3>
              <button class="flex items-center gap-1 text-label-lg text-primary">
                <span class="material-symbols-outlined text-[18px]">edit_calendar</span>
                Edit Schedule
              </button>
            </div>
            <div class="rounded-[20px] bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="grid grid-cols-7 gap-2">
                <div class="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary-container/10 p-2">
                  <span class="font-bold text-label-sm text-primary">MON</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">08:00</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">16:00</span>
                </div>
                <div class="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary-container/10 p-2">
                  <span class="font-bold text-label-sm text-primary">TUE</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">08:00</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">16:00</span>
                </div>
                <div class="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary-container/10 p-2">
                  <span class="font-bold text-label-sm text-primary">WED</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">08:00</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">16:00</span>
                </div>
                <div class="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary-container/10 p-2">
                  <span class="font-bold text-label-sm text-primary">THU</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">10:00</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">18:00</span>
                </div>
                <div class="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary-container/10 p-2">
                  <span class="font-bold text-label-sm text-primary">FRI</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">08:00</span>
                  <span class="text-[10px] text-on-primary-fixed-variant">12:00</span>
                </div>
                <div class="flex flex-col items-center gap-2 rounded-xl bg-surface-container p-2 text-outline">
                  <span class="font-bold text-label-sm">SAT</span>
                  <span class="text-[10px]">OFF</span>
                  <span class="text-[10px] opacity-0">-</span>
                </div>
                <div class="flex flex-col items-center gap-2 rounded-xl bg-surface-container p-2 text-outline">
                  <span class="font-bold text-label-sm">SUN</span>
                  <span class="text-[10px]">OFF</span>
                  <span class="text-[10px] opacity-0">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="space-y-stack-gap">
          <h3 class="px-2 font-headline-md text-headline-md text-on-surface">Settings & Security</h3>
          <div class="divide-y divide-outline-variant/30 overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex cursor-pointer items-center justify-between p-padding-card transition-colors hover:bg-surface-container-low">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline">notifications</span>
                <div>
                  <p class="font-body-md font-semibold">Notifications</p>
                  <p class="text-label-sm text-on-surface-variant">Emergency, Appointments, AI Alerts</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div class="flex items-center justify-between p-padding-card">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline">dark_mode</span>
                <div>
                  <p class="font-body-md font-semibold">Dark Mode</p>
                  <p class="text-label-sm text-on-surface-variant">Sync with system preferences</p>
                </div>
              </div>
              <label class="relative inline-flex cursor-pointer items-center">
                <input class="peer sr-only" type="checkbox" />
                <div class="peer h-6 w-11 rounded-full bg-surface-container-highest after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </label>
            </div>
            <div class="flex cursor-pointer items-center justify-between p-padding-card transition-colors hover:bg-surface-container-low">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline">lock</span>
                <div>
                  <p class="font-body-md font-semibold">Change Password</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div class="flex cursor-pointer items-center justify-between p-padding-card transition-colors hover:bg-surface-container-low">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-outline">shield_person</span>
                <div>
                  <p class="font-body-md font-semibold">Two-Factor Authentication (2FA)</p>
                  <p class="text-label-sm text-primary">Currently Enabled</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-outline">chevron_right</span>
            </div>
          </div>
        </section>

        <section class="space-y-stack-gap">
          <h3 class="px-2 font-headline-md text-headline-md text-on-surface">Account</h3>
          <div class="overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <button
              type="button"
              class="flex w-full items-center gap-4 p-padding-card text-on-surface transition-colors hover:bg-surface-container-low"
              data-logout="doctor"
            >
              <span class="material-symbols-outlined text-outline">logout</span>
              <span class="font-body-md font-semibold">Logout</span>
            </button>
            <div class="border-t border-error/10 bg-error-container/20 p-padding-card">
              <button class="flex w-full items-center gap-4 text-error transition-opacity hover:opacity-80">
                <span class="material-symbols-outlined">delete_forever</span>
                <div class="text-left">
                  <p class="font-body-md font-bold">Delete Account</p>
                  <p class="text-label-sm">This action is permanent and will delete all medical records.</p>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 z-50 grid h-20 w-full grid-cols-5 items-center rounded-t-[24px] border-t border-outline-variant/60 bg-white/95 px-2 pb-2 shadow-[0px_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur">
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
          <span class="material-symbols-outlined">emergency</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Alerts</span>
        </a>
        <a class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-[16px] px-2 py-1 text-center text-on-surface-variant transition-all duration-200 hover:bg-secondary-container/50 active:scale-95" href="#/doctor-profile" data-bottom-nav-link="doctor">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
          <span class="whitespace-nowrap font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
