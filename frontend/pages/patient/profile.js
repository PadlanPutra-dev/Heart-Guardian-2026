import { createPatientPageShell } from './layout.js';

function getUserName(authState, fallback = 'Alex Mercer') {
  return authState?.user?.fullName || authState?.user?.name || authState?.fullName || authState?.name || fallback;
}

export function createPatientProfilePage(authState) {
  const displayName = getUserName(authState, 'Alex Mercer');

  return createPatientPageShell({
    title: 'Profile',
    activeTab: 'profile',
    headerActions: '<button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-low"><span class="material-symbols-outlined text-on-surface-variant">notifications</span></button><button class="rounded-2xl bg-primary px-4 py-2 font-label-lg text-on-primary transition-all hover:opacity-90 active:scale-95">Edit Profile</button>',
    headerIcon: 'person',
    bodyClass: 'bg-background',
    children: `
      <main class="mx-auto mt-6 max-w-2xl space-y-section-gap px-margin-screen">
        <section class="flex flex-col items-center text-center">
          <div class="group relative mb-4">
            <div class="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1n5LSqiMl05Ts7OFVsK6bq1c3keH9rjDi2PReOCmfoZAmdbPNjsCLowhMZcvNGtHWPRNwv6aose7rMENgtLy5c0djF5I67gBCwIKfZTRE7EGp5jpAp1dzgYH4CPgZ93m20IfOMXhiwP0Nhwh205mPM9NWjXvHpMGj0fcr5Mek6uyJsAG3XE3RTq3AyFPa8iprm9KoN3eDRZwbYe81BmY6mv4Rb_U6hRWCHuPKIEwVISVSoSNJGI01lg" alt="Patient avatar" />
            </div>
            <div class="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary text-on-primary">
              <span class="material-symbols-outlined text-sm">photo_camera</span>
            </div>
          </div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface">${displayName}</h2>
          <div class="mt-3 flex flex-wrap justify-center gap-2">
            <span class="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-label-sm text-primary">
              <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">verified</span>
              Verified Patient
            </span>
            <span class="rounded-full bg-amber-100 px-3 py-1 font-label-sm text-amber-800">Arrhythmia Patient</span>
          </div>
          <p class="mt-2 font-label-lg text-on-surface-variant">Patient ID: <span class="font-bold">HG-88291</span> • Age: 45</p>
        </section>

        <div class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mb-stack-gap flex items-center justify-between">
            <h3 class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
              <span class="material-symbols-outlined text-primary">person_outline</span>
              Personal Information
            </h3>
            <button class="font-label-lg text-primary transition-all hover:underline">Edit Information</button>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="space-y-1">
              <p class="font-label-sm text-on-surface-variant">FULL NAME</p>
              <p class="font-body-md text-on-surface">Alex Mercer</p>
            </div>
            <div class="space-y-1">
              <p class="font-label-sm text-on-surface-variant">GENDER</p>
              <p class="font-body-md text-on-surface">Male</p>
            </div>
            <div class="space-y-1">
              <p class="font-label-sm text-on-surface-variant">DOB</p>
              <p class="font-body-md text-on-surface">May 12, 1979</p>
            </div>
            <div class="space-y-1">
              <p class="font-label-sm text-on-surface-variant">PHONE</p>
              <p class="font-body-md text-on-surface">+1 555-0123</p>
            </div>
            <div class="col-span-1 space-y-1 md:col-span-2">
              <p class="font-label-sm text-on-surface-variant">EMAIL</p>
              <p class="font-body-md text-on-surface">alex.mercer@email.com</p>
            </div>
            <div class="col-span-1 space-y-1 md:col-span-2">
              <p class="font-label-sm text-on-surface-variant">ADDRESS</p>
              <p class="font-body-md text-on-surface">123 Health Ave, Suite 402, Portland, OR 97201</p>
            </div>
          </div>
        </div>

        <div class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mb-stack-gap flex items-center justify-between">
            <h3 class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
              <span class="material-symbols-outlined text-primary">monitor_heart</span>
              Medical Information
            </h3>
            <button class="font-label-lg text-primary transition-all hover:underline">Update Medical Profile</button>
          </div>
          <div class="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div class="rounded-xl border border-surface-variant/50 bg-surface-container-low p-3">
              <p class="font-label-sm text-on-surface-variant">Blood Type</p>
              <p class="mt-1 font-headline-md text-primary">A+</p>
            </div>
            <div class="rounded-xl border border-surface-variant/50 bg-surface-container-low p-3">
              <p class="font-label-sm text-on-surface-variant">Height</p>
              <p class="mt-1 font-headline-md text-on-surface">182 cm</p>
            </div>
            <div class="rounded-xl border border-surface-variant/50 bg-surface-container-low p-3">
              <p class="font-label-sm text-on-surface-variant">Weight</p>
              <p class="mt-1 font-headline-md text-on-surface">78 kg</p>
            </div>
            <div class="rounded-xl border border-surface-variant/50 bg-surface-container-low p-3">
              <p class="font-label-sm text-on-surface-variant">BMI</p>
              <p class="mt-1 font-headline-md text-on-surface">23.5</p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <span class="material-symbols-outlined text-red-600">emergency</span>
              </span>
              <div>
                <p class="font-label-lg text-on-surface-variant">Medical Conditions</p>
                <p class="font-body-md text-on-surface">Atrial Fibrillation (Persistent)</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <span class="material-symbols-outlined text-blue-600">medication</span>
              </span>
              <div>
                <p class="font-label-lg text-on-surface-variant">Medication</p>
                <p class="font-body-md text-on-surface">Atorvastatin (20mg), Lisinopril (10mg)</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 border-t border-surface-variant pt-2">
              <div>
                <p class="font-label-sm text-on-surface-variant">Allergies</p>
                <p class="font-label-lg text-on-surface">None Reported</p>
              </div>
              <div>
                <p class="font-label-sm text-on-surface-variant">Smoking</p>
                <p class="font-label-lg text-on-surface">Non-smoker</p>
              </div>
              <div>
                <p class="font-label-sm text-on-surface-variant">Activity</p>
                <p class="font-label-lg text-on-surface">Moderate (3x/week)</p>
              </div>
              <div>
                <p class="font-label-sm text-on-surface-variant">Avg Sleep</p>
                <p class="font-label-lg text-on-surface">7.5h / night</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-stack-gap md:grid-cols-2">
          <div class="flex flex-col rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <h3 class="mb-4 font-label-lg uppercase tracking-wider text-on-surface-variant">Assigned Specialist</h3>
            <div class="mb-4 flex items-center gap-4">
              <div class="h-16 w-16 overflow-hidden rounded-2xl shadow-sm">
                <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5C0jvNgseFYcVbzGOK4IsKWBTQ6P2-OzKOCzJAmhqVz7je0LpfH1V14DZTNLebxHHwoWTCgzyYARLIUOLSLQBpgZarKhqkHL-JBJ0KaHoEYfA3ifRkNzfv3zT4wRuP0TkykfVpJNaFrJC1GZp-zDMby9MAMPxLqKOLXY8NZQTioXoZrBVU10Kr0eft0zsqUrkvBJ0bd_nZhHpoHer9hcQJ9awOaJ90equKBxObRVrZ5WmI1sh-a6Kyw" alt="Doctor avatar" />
              </div>
              <div>
                <p class="font-headline-md text-on-surface">Dr. Sarah Johnson</p>
                <p class="text-label-lg text-on-surface-variant">Cardiology Specialist</p>
                <p class="font-label-sm text-primary">St. Mary's Hospital</p>
              </div>
            </div>
            <div class="mt-auto flex flex-col gap-2">
              <button class="rounded-xl bg-secondary-container py-2 font-label-lg text-on-secondary-container transition-all hover:opacity-90 active:scale-95">View Profile</button>
              <button class="rounded-xl bg-primary py-2 font-label-lg text-on-primary transition-all hover:opacity-90 active:scale-95">Schedule Consultation</button>
            </div>
          </div>

          <div class="flex flex-col rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <h3 class="mb-4 font-label-lg uppercase tracking-wider text-on-surface-variant">Primary Caregiver</h3>
            <div class="mb-4 rounded-2xl border border-surface-variant/30 bg-surface-container-low p-4">
              <p class="font-headline-md text-on-surface">Elena Mercer</p>
              <p class="mb-2 text-label-lg text-on-surface-variant">Spouse</p>
              <div class="flex items-center gap-2 font-body-md text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-primary">call</span>
                +1 555-0987
              </div>
            </div>
            <button class="mt-auto rounded-xl border border-primary py-2 font-label-lg text-primary transition-all hover:bg-primary/5 active:scale-95">Manage Caregiver</button>
          </div>
        </div>

        <div class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <h3 class="mb-4 flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
            <span class="material-symbols-outlined text-red-600" style="font-variation-settings: 'FILL' 1;">emergency_home</span>
            Emergency Contacts
          </h3>
          <div class="flex items-center justify-between rounded-xl border border-red-100 bg-red-50 p-3">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <span class="material-symbols-outlined text-red-600">person</span>
              </div>
              <div>
                <p class="font-label-lg text-on-surface">Mark Mercer (Brother)</p>
                <p class="font-label-sm text-on-surface-variant">+1 555-0456</p>
              </div>
            </div>
            <button class="p-2 text-on-surface-variant transition-colors hover:text-primary"><span class="material-symbols-outlined">edit</span></button>
          </div>
          <button class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2 font-label-lg text-primary transition-all hover:bg-primary/5">
            <span class="material-symbols-outlined">add</span> Add Contact
          </button>
        </div>

        <div class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <h3 class="mb-6 flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
            <span class="material-symbols-outlined text-primary">settings</span>
            App Settings
          </h3>
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">notifications_active</span>
                <div>
                  <p class="font-label-lg text-on-surface">Notification Settings</p>
                  <p class="text-[11px] text-on-surface-variant">Manage system alerts</p>
                </div>
              </div>
              <label class="custom-toggle">
                <input checked type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">alarm</span>
                <div>
                  <p class="font-label-lg text-on-surface">Medication Reminder</p>
                  <p class="text-[11px] text-on-surface-variant">Daily dosage alerts</p>
                </div>
              </div>
              <label class="custom-toggle">
                <input checked type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">event</span>
                <div>
                  <p class="font-label-lg text-on-surface">Appointment Reminder</p>
                  <p class="text-[11px] text-on-surface-variant">Dr. visits notifications</p>
                </div>
              </div>
              <label class="custom-toggle">
                <input checked type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3 text-red-600">
                <span class="material-symbols-outlined">report_problem</span>
                <div>
                  <p class="font-label-lg">Emergency Alert</p>
                  <p class="text-[11px] opacity-80">Notify caregivers on crisis</p>
                </div>
              </div>
              <label class="custom-toggle">
                <input checked type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div class="space-y-4 border-t border-surface-variant pt-4">
              <div class="flex cursor-pointer items-center justify-between group">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-on-surface-variant">language</span>
                  <p class="font-label-lg text-on-surface">Language</p>
                </div>
                <div class="flex items-center gap-1">
                  <span class="font-label-sm text-on-surface-variant">English (US)</span>
                  <span class="material-symbols-outlined text-[20px] text-on-surface-variant">chevron_right</span>
                </div>
              </div>
              <div class="flex items-center justify-between group">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-on-surface-variant">dark_mode</span>
                  <p class="font-label-lg text-on-surface">Dark Mode</p>
                </div>
                <span class="font-label-sm text-on-surface-variant">Off</span>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[20px] bg-white p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <h3 class="mb-4 flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
            <span class="material-symbols-outlined text-primary">security</span>
            Security & Privacy
          </h3>
          <div class="space-y-4">
            <button class="flex w-full items-center justify-between rounded-xl p-2 transition-all hover:bg-surface-container-low">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">key</span>
                <span class="font-label-lg text-on-surface">Change Password</span>
              </div>
              <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-xl p-2 transition-all hover:bg-surface-container-low">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">verified_user</span>
                <span class="font-label-lg text-on-surface">Two-Factor Authentication</span>
              </div>
              <span class="font-label-sm text-primary">On</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-xl p-2 transition-all hover:bg-surface-container-low">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">devices</span>
                <span class="font-label-lg text-on-surface">Manage Devices</span>
              </div>
              <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-xl p-2 transition-all hover:bg-surface-container-low">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-on-surface-variant">privacy_tip</span>
                <span class="font-label-lg text-on-surface">Privacy Settings</span>
              </div>
              <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </div>
        </div>

        <div class="rounded-2xl border-2 border-red-100 bg-red-50/30 p-padding-card">
          <h3 class="mb-4 font-label-lg uppercase tracking-widest text-red-600">Account Management</h3>
          <div class="flex flex-col gap-3">
            <button data-logout type="button" class="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white py-3 font-label-lg text-red-600 transition-all hover:bg-red-50">
              <span class="material-symbols-outlined">logout</span> Logout
            </button>
            <button class="w-full py-2 font-label-sm text-red-400 transition-all hover:text-red-600">Delete Account</button>
          </div>
        </div>

        <div class="h-8"></div>
      </main>
    </div>
  `
  });
}
