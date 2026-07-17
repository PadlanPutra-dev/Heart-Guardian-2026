export function createRegisterPage(selectedRole = 'patient', stage = 'role-select') {
  const roleValue = ['patient', 'caregiver', 'doctor'].includes(selectedRole) ? selectedRole : 'patient';
  const isRoleSelectionStage = stage === 'role-select';
  const isPatientFormStage = roleValue === 'patient' && stage === 'patient-form';
  const isCaregiverFormStage = roleValue === 'caregiver' && stage === 'caregiver-form';
  const isDoctorFormStage = roleValue === 'doctor' && stage === 'doctor-form';
  const roleCopy = {
    patient: { label: 'Patient', icon: 'favorite', description: 'Track your own health and follow AI recommendations.' },
    caregiver: { label: 'Caregiver', icon: 'groups', description: 'Support a loved one and monitor their wellbeing.' },
    doctor: { label: 'Doctor', icon: 'stethoscope', description: 'Review patient insights and alerts in one place.' },
  };
  const selectedCopy = roleCopy[roleValue] || roleCopy.patient;
  const patientChecked = roleValue === 'patient' ? 'checked' : '';
  const caregiverChecked = roleValue === 'caregiver' ? 'checked' : '';
  const doctorChecked = roleValue === 'doctor' ? 'checked' : '';

  if (isPatientFormStage) {
    return `
      <div class="min-h-screen w-full overflow-x-hidden bg-background text-on-surface">
        <header class="sticky top-0 z-50 w-full border-b border-surface-variant bg-surface">
          <div class="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-margin-screen">
            <button data-back-to-role class="-ml-2 rounded-full p-2 text-primary transition-colors hover:bg-surface-container-low active:opacity-70" type="button">
              <span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
            </button>
            <button class="-mr-2 rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low active:opacity-70" type="button">
              <span class="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        <main class="dashboard-shell mx-auto w-full px-margin-screen pb-32 sm:px-8">
          <section class="mt-section-gap">
            <h1 class="mb-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Create Patient Account</h1>
            <p class="font-body-md text-body-md text-on-surface-variant">Create your account to start personalized heart monitoring powered by AI.</p>
          </section>

          <section class="mt-section-gap">
            <h2 class="mb-stack-gap font-label-lg text-label-lg uppercase tracking-wider text-primary">Account Information</h2>
            <form class="flex flex-col gap-stack-gap" data-register-form>
              <div class="flex flex-col gap-1.5">
                <label class="ml-1 font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary" data-icon="person">person</span>
                  <input class="h-14 w-full rounded-medical border border-[#E5E7EB] bg-[#F9FAFB] pl-12 pr-4 font-body-md text-body-md transition-all focus:border-primary focus:ring-0" name="fullName" placeholder="John Doe" type="text" required />
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="ml-1 font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary" data-icon="email">email</span>
                  <input class="h-14 w-full rounded-medical border border-[#E5E7EB] bg-[#F9FAFB] pl-12 pr-4 font-body-md text-body-md transition-all focus:border-primary focus:ring-0" name="email" placeholder="john@example.com" type="email" required autocomplete="email" />
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="ml-1 font-label-sm text-label-sm text-on-surface-variant">Password</label>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary" data-icon="lock">lock</span>
                  <input class="h-14 w-full rounded-medical border border-[#E5E7EB] bg-[#F9FAFB] pl-12 pr-12 font-body-md text-body-md transition-all focus:border-primary focus:ring-0" id="password" name="password" placeholder="••••••••" type="password" required autocomplete="new-password" />
                  <button class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-primary active:opacity-70" data-icon="visibility_off" onclick="window.togglePassword('password')" type="button">visibility_off</button>
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="ml-1 font-label-sm text-label-sm text-on-surface-variant">Confirm Password</label>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary" data-icon="lock">lock</span>
                  <input class="h-14 w-full rounded-medical border border-[#E5E7EB] bg-[#F9FAFB] pl-12 pr-12 font-body-md text-body-md transition-all focus:border-primary focus:ring-0" id="confirm-password" name="confirmPassword" placeholder="••••••••" type="password" required autocomplete="new-password" />
                  <button class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors hover:text-primary active:opacity-70" data-icon="visibility_off" onclick="window.togglePassword('confirm-password')" type="button">visibility_off</button>
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="ml-1 font-label-sm text-label-sm text-on-surface-variant">Phone Number</label>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary" data-icon="phone">phone</span>
                  <input class="h-14 w-full rounded-medical border border-[#E5E7EB] bg-[#F9FAFB] pl-12 pr-4 font-body-md text-body-md transition-all focus:border-primary focus:ring-0" name="phoneNumber" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>

              <div class="mt-stack-gap flex flex-col gap-3">
                <label class="group flex cursor-pointer items-start gap-3">
                  <div class="relative mt-0.5 flex items-center">
                    <input class="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary" name="terms" type="checkbox" />
                  </div>
                  <span class="font-body-md text-body-md leading-tight text-on-surface-variant">
                    I agree to the <a class="font-semibold text-primary hover:underline" href="#">Terms of Service</a>
                  </span>
                </label>
                <label class="group flex cursor-pointer items-start gap-3">
                  <div class="relative mt-0.5 flex items-center">
                    <input class="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                  </div>
                  <span class="font-body-md text-body-md leading-tight text-on-surface-variant">
                    I agree to the <a class="font-semibold text-primary hover:underline" href="#">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <button class="animated-button mt-section-gap flex h-14 w-full items-center justify-center gap-2 rounded-medical bg-primary font-headline-md text-headline-md text-on-primary shadow-lg transition-all active:scale-95" type="submit">
                Create Account
                <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>

              <div class="mt-inline-gap text-center">
                <button class="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary" type="button">
                  Already have an account? <span class="font-bold text-primary">Sign In</span>
                </button>
              </div>
            </form>
          </section>

          <section class="mt-section-gap flex items-center gap-4 rounded-medical border border-surface-variant bg-surface-container-lowest p-padding-card shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006e21]/10">
              <span class="material-symbols-outlined text-primary" data-icon="security" style="font-variation-settings: 'FILL' 1;">security</span>
            </div>
            <div>
              <p class="font-label-lg text-label-lg text-on-surface">Data Shield Active</p>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Your privacy is our medical priority.</p>
            </div>
          </section>

          <footer class="mt-section-gap mb-10 rounded-medical border border-outline-variant/30 bg-surface-container-low p-4">
            <div class="flex gap-3">
              <span class="material-symbols-outlined shrink-0 text-on-surface-variant" data-icon="info">info</span>
              <p class="font-label-sm text-label-sm leading-relaxed text-on-surface-variant">
                Your medical information will only be requested after your account has been created. This information is securely encrypted and protected.
              </p>
            </div>
          </footer>
        </main>
      </div>
    `;
  }

  if (isCaregiverFormStage) {
    return `
      <div class="min-h-screen w-full overflow-x-hidden bg-background text-on-surface">
        <header class="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div class="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-margin-screen">
            <button aria-label="Go back" data-back-to-role class="material-symbols-outlined -ml-2 rounded-full p-2 text-primary transition-colors hover:bg-surface-container-low active:opacity-70">
              arrow_back
            </button>
            <button class="material-symbols-outlined -mr-2 rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low active:opacity-70">
              more_vert
            </button>
          </div>
        </header>

        <main class="dashboard-shell mx-auto w-full px-margin-screen pb-12 sm:px-8">
          <div class="mb-section-gap">
            <h2 class="mb-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Create Caregiver Account</h2>
            <p class="font-body-md text-body-md leading-relaxed text-on-surface-variant">Create an account to securely monitor and support your loved one's heart health.</p>
          </div>

          <form class="flex flex-col gap-8" id="registrationForm" data-register-form>
            <div class="flex flex-col gap-4">
              <h3 class="font-label-lg text-label-lg uppercase tracking-wider text-outline">Personal Information</h3>
              <div class="flex flex-col gap-stack-gap">
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">person</span>
                  <input class="w-full rounded-xl border border-outline-variant bg-surface-container-low py-4 pl-12 pr-4 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:ring-0" name="fullName" placeholder="Full Name" type="text" required />
                </div>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">mail</span>
                  <input class="w-full rounded-xl border border-outline-variant bg-surface-container-low py-4 pl-12 pr-4 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:ring-0" name="email" placeholder="Email Address" type="email" required autocomplete="email" />
                </div>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">call</span>
                  <input class="w-full rounded-xl border border-outline-variant bg-surface-container-low py-4 pl-12 pr-4 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:ring-0" name="phoneNumber" placeholder="Phone Number" type="tel" />
                </div>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">lock</span>
                  <input class="w-full rounded-xl border border-outline-variant bg-surface-container-low py-4 pl-12 pr-12 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:ring-0" id="password" name="password" placeholder="Password" type="password" required autocomplete="new-password" />
                  <button class="absolute right-4 top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-on-surface" onclick="window.togglePassword('password', 'eye-icon')" type="button">
                    <span class="material-symbols-outlined" id="eye-icon">visibility</span>
                  </button>
                </div>
                <div class="group relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">lock</span>
                  <input class="w-full rounded-xl border border-outline-variant bg-surface-container-low py-4 pl-12 pr-4 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:ring-0" name="confirmPassword" placeholder="Confirm Password" type="password" required autocomplete="new-password" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <h3 class="font-label-lg text-label-lg uppercase tracking-wider text-outline">Relationship</h3>
              <div class="group relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary">group</span>
                <select class="w-full appearance-none rounded-xl border border-outline-variant bg-surface-container-low py-4 pl-12 pr-4 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:ring-0" name="relationship">
                  <option disabled selected value="">Relationship with Patient</option>
                  <option value="spouse">Spouse</option>
                  <option value="parent">Parent</option>
                  <option value="child">Child</option>
                  <option value="sibling">Sibling</option>
                  <option value="relative">Relative</option>
                  <option value="friend">Friend</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="other">Other</option>
                </select>
                <span class="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-outline">expand_more</span>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <label class="group flex cursor-pointer items-start gap-3">
                <input class="mt-1 h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-primary focus:ring-offset-0" name="terms" type="checkbox" />
                <span class="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">
                  I agree to the <a class="font-medium text-primary underline" href="#">Terms of Service</a>
                </span>
              </label>
              <label class="group flex cursor-pointer items-start gap-3">
                <input class="mt-1 h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-primary focus:ring-offset-0" type="checkbox" />
                <span class="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">
                  I have read and accept the <a class="font-medium text-primary underline" href="#">Privacy Policy</a>
                </span>
              </label>
            </div>

            <div class="relative">
              <button class="interactive-scale group relative w-full overflow-hidden rounded-full bg-primary py-5 font-headline-md text-headline-md text-on-primary shadow-lg transition-all duration-200 hover:bg-primary-container" type="submit">
                <span class="relative z-10">Create Account</span>
              </button>
            </div>
          </form>

          <div class="mt-6 text-center">
            <button class="rounded-lg px-4 py-2 font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary" type="button">
              Already have an account? <span class="font-semibold text-primary">Sign In</span>
            </button>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-4">
            <div class="flex items-start gap-4 rounded-[20px] border border-outline-variant/30 bg-surface-container-low p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <span class="material-symbols-outlined text-primary" data-weight="fill">verified_user</span>
              </div>
              <div>
                <h4 class="mb-1 font-label-lg text-label-lg text-on-surface">Approval Required</h4>
                <p class="text-[13px] leading-tight text-on-surface-variant">For security, patient approval is required before you can start monitoring vitals.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-[20px] border border-outline-variant/30 bg-surface-container-low p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-tertiary/10">
                <span class="material-symbols-outlined text-tertiary" data-weight="fill">rule</span>
              </div>
              <div>
                <h4 class="mb-1 font-label-lg text-label-lg text-on-surface">Limited Access</h4>
                <p class="text-[13px] leading-tight text-on-surface-variant">Your access level depends on the specific permissions granted by the patient account holder.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    `;
  }

  if (isDoctorFormStage) {
    return `
      <div class="min-h-screen w-full overflow-x-hidden bg-surface text-on-surface">
        <header class="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
          <div class="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-margin-screen">
            <button data-back-to-role class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-low active:scale-95" type="button">
              <span class="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 class="font-headline-md text-headline-md text-primary">Heart Guardian</h1>
            <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-low active:scale-95" type="button">
              <span class="material-symbols-outlined text-primary">more_vert</span>
            </button>
          </div>
        </header>

        <main class="dashboard-shell mx-auto w-full px-margin-screen py-10 sm:px-8 lg:px-10">
          <div class="mb-section-gap">
            <h2 class="mb-2 font-headline-lg text-headline-lg text-on-surface">Create Doctor Account</h2>
            <p class="font-body-md text-body-md text-on-surface-variant">Create a verified medical professional account to monitor patients and provide clinical support.</p>
          </div>

          <form class="space-y-section-gap" data-register-form>
            <section class="space-y-stack-gap">
              <h3 class="font-label-lg text-label-lg uppercase tracking-wider text-outline">Account Information</h3>
              <div class="space-y-4 rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <div class="relative">
                  <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Full Name</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">person</span>
                    <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" name="fullName" placeholder="Dr. John Doe" type="text" />
                  </div>
                </div>

                <div class="relative">
                  <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Email Address</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" name="email" placeholder="john.doe@hospital.com" type="email" autocomplete="email" />
                  </div>
                </div>

                <div class="relative">
                  <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Phone Number</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">call</span>
                    <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" name="phoneNumber" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div class="relative">
                    <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Password</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                      <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" id="password" name="password" type="password" autocomplete="new-password" />
                      <button class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary" onclick="window.togglePassword('password')" type="button">
                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </div>
                  <div class="relative">
                    <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Confirm Password</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                      <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" />
                      <button class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary" onclick="window.togglePassword('confirm-password')" type="button">
                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="space-y-stack-gap">
              <h3 class="font-label-lg text-label-lg uppercase tracking-wider text-outline">Professional Information</h3>
              <div class="space-y-4 rounded-[20px] border border-outline-variant/30 bg-surface-container-lowest p-padding-card shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div class="relative">
                    <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">License Number (STR)</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">badge</span>
                      <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" name="licenseNumber" placeholder="STR-12345678" type="text" />
                    </div>
                  </div>
                  <div class="relative">
                    <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Specialization</label>
                    <div class="relative">
                      <select class="w-full appearance-none rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md transition-all focus:border-primary" name="specialization">
                        <option disabled selected value="">Select Specialty</option>
                        <option value="General Practitioner">General Practitioner</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Internal Medicine">Internal Medicine</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Other">Other</option>
                      </select>
                      <span class="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-outline">expand_more</span>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div class="relative">
                    <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Hospital / Clinic Name</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">festival</span>
                      <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" name="hospitalName" placeholder="Central Heart Institute" type="text" />
                    </div>
                  </div>
                  <div class="relative">
                    <label class="mb-1 ml-1 block font-label-sm text-label-sm text-outline">Years of Experience</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
                      <input class="w-full rounded-xl border border-outline-variant bg-surface px-10 py-3 font-body-md text-body-md transition-all focus:border-primary" name="yearsExperience" placeholder="e.g. 10" type="number" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="space-y-3 px-1">
              <label class="flex cursor-pointer items-start gap-3 group">
                <div class="relative mt-1 flex items-center">
                  <input class="h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-0" name="terms" type="checkbox" />
                </div>
                <span class="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">I certify that I am a licensed medical professional.</span>
              </label>
              <label class="flex cursor-pointer items-start gap-3 group">
                <div class="relative mt-1 flex items-center">
                  <input class="h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-0" name="terms" type="checkbox" />
                </div>
                <span class="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">I agree to the <a class="font-medium text-primary hover:underline" href="#">Terms of Service</a>.</span>
              </label>
              <label class="flex cursor-pointer items-start gap-3 group">
                <div class="relative mt-1 flex items-center">
                  <input class="h-5 w-5 rounded border-outline-variant text-primary transition-all focus:ring-0" name="privacy" type="checkbox" />
                </div>
                <span class="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-on-surface">I agree to the <a class="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.</span>
              </label>
            </section>

            <div class="space-y-4 pt-4">
              <button class="w-full rounded-[20px] bg-primary-container py-4 font-headline-md text-headline-md text-on-primary-container shadow-lg transition-all duration-200 hover:shadow-xl active:scale-[0.98]" type="submit">
                Continue Verification
              </button>
              <p class="text-center font-body-md text-body-md">
                <span class="text-on-surface-variant">Already have an account?</span>
                <a class="ml-1 font-semibold text-primary hover:underline" href="#/login">Sign In</a>
              </p>
            </div>

            <div class="mt-section-gap rounded-xl border border-outline-variant/30 bg-surface-container-low p-4">
              <div class="flex gap-3">
                <span class="material-symbols-outlined shrink-0 text-primary">verified_user</span>
                <p class="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  Only verified healthcare professionals can access the Doctor Dashboard. Your professional information will be securely encrypted and reviewed before activation.
                </p>
              </div>
            </div>
          </form>
        </main>
      </div>
    `;
  }

  return `
    <section class="flex min-h-screen items-center justify-center bg-background px-6 py-8 text-on-background sm:px-8 lg:px-10">
      <main class="auth-card relative w-full overflow-hidden rounded-[20px] bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-8 md:p-12">
        <div class="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-primary-fixed opacity-10 blur-3xl"></div>

        <div class="relative z-10 mb-section-gap flex flex-col items-center">
          <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-container text-primary-container shadow-sm">
            <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">person_add</span>
          </div>
          <h1 class="mb-2 text-center font-headline-lg text-headline-lg text-on-surface">${isRoleSelectionStage ? 'Choose Your Role' : 'Create Account'}</h1>
          <p class="max-w-xs text-center font-body-md text-body-md text-on-surface-variant">${isRoleSelectionStage ? 'Select the role that best fits your access needs before creating your account.' : 'Join Heart Guardian and start monitoring your cardiac health.'}</p>
        </div>

        ${isRoleSelectionStage ? `
          <div class="relative z-10 flex flex-col gap-4" data-role-select>
            <div class="grid gap-3">
              ${['patient', 'caregiver', 'doctor'].map((role) => {
                const option = roleCopy[role];
                const isSelected = roleValue === role;
                return `
                  <button type="button" data-role-select-option="${role}" class="flex items-center justify-between rounded-[20px] border px-4 py-4 text-left transition-all duration-200 ${isSelected ? 'border-primary bg-secondary-container text-primary' : 'border-outline-variant bg-surface-bright text-on-surface hover:border-primary hover:bg-secondary-container/70'}">
                    <span class="flex items-center gap-3">
                      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">${option.icon}</span>
                      <span>
                        <span class="block font-label-lg text-label-lg">${option.label}</span>
                        <span class="block text-sm text-on-surface-variant">${option.description}</span>
                      </span>
                    </span>
                    ${isSelected ? '<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: \'FILL\' 1;">check_circle</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>
            <button type="button" data-continue-registration class="group relative flex w-full justify-center rounded-[20px] border border-transparent bg-primary-container px-4 py-4 font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-200 hover:bg-surface-tint hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2">
              Continue as ${selectedCopy.label}
            </button>
          </div>
        ` : `
          <form class="relative z-10 flex flex-col gap-stack-gap" data-register-form>
            <div class="mb-2">
              <label class="mb-inline-gap block font-label-lg text-label-lg text-on-surface">I am a...</label>
              <div class="flex gap-inline-gap">
                <label class="role-option relative flex-1 cursor-pointer">
                  <input ${patientChecked} class="sr-only" name="role" type="radio" value="patient" />
                  <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant bg-surface-bright p-4 text-center transition-all duration-200 hover:border-primary hover:bg-secondary-container hover:text-primary">
                    <span class="material-symbols-outlined mb-2 text-outline transition-colors duration-200" style="font-variation-settings: 'FILL' 1;">favorite</span>
                    <span class="font-label-lg text-label-lg">Patient</span>
                  </div>
                </label>
                <label class="role-option relative flex-1 cursor-pointer">
                  <input ${caregiverChecked} class="sr-only" name="role" type="radio" value="caregiver" />
                  <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant bg-surface-bright p-4 text-center transition-all duration-200 hover:border-primary hover:bg-secondary-container hover:text-primary">
                    <span class="material-symbols-outlined mb-2 text-outline transition-colors duration-200" style="font-variation-settings: 'FILL' 1;">groups</span>
                    <span class="font-label-lg text-label-lg">Caregiver</span>
                  </div>
                </label>
                <label class="role-option relative flex-1 cursor-pointer">
                  <input ${doctorChecked} class="sr-only" name="role" type="radio" value="doctor" />
                  <div class="flex flex-col items-center justify-center rounded-[20px] border border-outline-variant bg-surface-bright p-4 text-center transition-all duration-200 hover:border-primary hover:bg-secondary-container hover:text-primary">
                    <span class="material-symbols-outlined mb-2 text-outline transition-colors duration-200" style="font-variation-settings: 'FILL' 1;">stethoscope</span>
                    <span class="font-label-lg text-label-lg">Doctor</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" required placeholder="e.g., Alex Mercer" class="input-clinical block w-full appearance-none rounded-[20px] px-4 py-3 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
            </div>

            <div>
              <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="email">Email Address</label>
              <input id="email" name="email" type="email" required autocomplete="email" placeholder="alex@example.com" class="input-clinical block w-full appearance-none rounded-[20px] px-4 py-3 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
            </div>

            <div>
              <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="password">Password</label>
              <input id="password" name="password" type="password" required autocomplete="new-password" placeholder="Create password" class="input-clinical block w-full appearance-none rounded-[20px] px-4 py-3 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
            </div>

            <div>
              <label class="mb-1 block font-label-lg text-label-lg text-on-surface" for="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" required autocomplete="new-password" placeholder="Confirm password" class="input-clinical block w-full appearance-none rounded-[20px] px-4 py-3 font-body-md text-on-surface placeholder-outline transition-colors duration-200 focus:z-10" />
            </div>

            <div class="mb-2 mt-2 flex items-center gap-3">
              <input id="terms" name="terms" type="checkbox" class="h-5 w-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" />
              <label class="font-body-md text-body-md text-on-surface-variant" for="terms">I agree to the Terms & Conditions</label>
            </div>

            <div class="mt-section-gap">
              <button type="submit" class="group relative flex w-full justify-center rounded-[20px] border border-transparent bg-primary-container px-4 py-4 font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-200 hover:bg-surface-tint hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2">
                Sign Up
              </button>
            </div>
          </form>
        `}

        <div class="relative z-10 mt-section-gap border-t border-surface-variant pt-6 text-center">
          <p class="font-body-md text-body-md text-on-surface-variant">
            Already have an account?
            <a href="#/login" class="ml-1 font-label-lg text-label-lg text-primary transition-colors hover:text-surface-tint">Sign In</a>
          </p>
        </div>
      </main>
    </section>
  `;
}
