export function createDoctorPatientDetailsPage(authState = {}) {
  const storedPatient = (() => {
    try {
      return JSON.parse(sessionStorage.getItem('heart-guardian-selected-patient') || '{}');
    } catch (error) {
      return {};
    }
  })();

  const patient = {
    name: storedPatient.name || 'Alex Carter',
    age: storedPatient.age || '56',
    id: storedPatient.id || 'HG-001',
    bpm: storedPatient.bpm || '118',
    statusLabel: storedPatient.statusLabel || 'Warning',
    riskLabel: storedPatient.riskLabel || 'Moderate Risk Level',
    doctorName: storedPatient.doctorName || 'Dr. Michael Johnson',
    lastUpdated: storedPatient.lastUpdated || 'Updated 2m ago',
    avatar: storedPatient.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpblr-6nHbGEVEJ9WHdTkE7ZUEtjFXHPs3oH_EDXA3FIF64IoPpdmXx5JOkupr4KOWTwgww4iwmIyHeSj4tgViWjG_O_Hi7JCQRyz36_GVzMw1D4BdXSBNVQWbMtfx-DISQjuM2K8sgbdecjb6bzbHNhwedLl1hk7UdUaSkkn8c1r2wEm4H8SKb2aFBxCoRE4jrK-tbFmAlLzABFyH-ZqROMR0Tu8PsWEwRKKS6DbJnU8Uza9vc7Apcw',
    accent: storedPatient.accent || 'warning',
  };

  const accentConfig = patient.accent === 'error'
    ? { badgeClass: 'bg-error/10 text-error', iconClass: 'text-error', dotClass: 'bg-error', chartColor: '#BA1A1A' }
    : patient.accent === 'primary'
      ? { badgeClass: 'bg-primary/10 text-primary', iconClass: 'text-primary', dotClass: 'bg-primary', chartColor: '#005F1B' }
      : { badgeClass: 'bg-warning/10 text-warning', iconClass: 'text-warning', dotClass: 'bg-warning', chartColor: '#F59E0B' };

  return `
    <div class="min-h-screen bg-background text-on-background">
      <header class="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <div class="flex items-center gap-inline-gap">
          <button
            type="button"
            onclick="window.location.hash = '#/doctor-patients'"
            class="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-surface-container-low active:opacity-80"
          >
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 class="font-headline-md text-headline-md text-primary">Patient Details</h1>
        </div>
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdTYEC4An0dPwpe68VxTLzMnhIsV_zrsdbiA-ykfnzAJROkiWhH3Wq3AHxTUbqdpBm_zSfMxqh1o8mkBJfcGs4gZV6btv5EfDUhzetbHSK8gwY3k4sJN7yCDLRpoyhWsn-drYcQJ-edNGYT2yez3NOezPmLLN7SDXcMM7T6JhFrvIxC7aqp1X-cY5v4NtO5r_nGZ5qQR3gPhzITKujKS-iXdXCKKsW-Fnd23i4L7jbkTGETXWDrH5w" alt="Doctor avatar" />
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto px-margin-screen py-6 pb-32 space-y-section-gap">
        <section class="bg-surface-container-lowest rounded-20px p-padding-card shadow-soft flex items-center gap-4">
          <div class="relative">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-warning pulse-warning">
              <img class="w-full h-full object-cover" src="${patient.avatar}" alt="${patient.name}" />
            </div>
            <div class="absolute -bottom-1 -right-1 bg-warning text-white rounded-full p-1 border-2 border-white">
              <span class="material-symbols-outlined text-sm block" style="font-variation-settings: 'FILL' 1;">warning</span>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="font-headline-md text-headline-md text-on-surface">${patient.name}</h2>
                <p class="font-label-sm text-label-sm text-on-surface-variant">${patient.age} Years Old • ID: ${patient.id}</p>
              </div>
              <span class="${accentConfig.badgeClass} px-3 py-1 rounded-full font-label-lg text-label-lg flex items-center gap-1">
                ${patient.statusLabel}
              </span>
            </div>
            <div class="mt-3 pt-3 border-t border-outline-variant flex justify-between items-center">
              <div>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Primary Doctor</p>
                <p class="font-body-md text-body-md font-semibold">${patient.doctorName}</p>
              </div>
              <p class="font-label-sm text-label-sm text-on-surface-variant italic">${patient.lastUpdated}</p>
            </div>
          </div>
        </section>

        <section class="grid grid-cols-2 gap-stack-gap">
          <div class="col-span-2 bg-surface-container-lowest rounded-20px p-padding-card shadow-soft overflow-hidden">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-xl ${accentConfig.badgeClass} flex items-center justify-center ${accentConfig.iconClass}">
                  <span class="material-symbols-outlined">favorite</span>
                </div>
                <div>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Current HR</p>
                  <h3 class="font-display-lg text-display-lg ${accentConfig.iconClass}">${patient.bpm} <span class="text-headline-md font-medium">BPM</span></h3>
                </div>
              </div>
              <div class="text-right">
                <p class="font-label-lg text-label-lg ${accentConfig.iconClass} font-semibold">Irregular Rhythm</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">${patient.riskLabel}</p>
              </div>
            </div>
            <div class="w-full h-24 bg-surface rounded-xl flex items-center justify-center overflow-hidden border border-outline-variant"></div>
          </div>
        </section>

        <section class="bg-surface-container-lowest rounded-20px p-padding-card shadow-soft">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-headline-md text-headline-md">Heart Rate Trend</h3>
            <span class="text-on-surface-variant font-label-lg text-label-lg bg-surface px-3 py-1 rounded-full">Last 24 Hours</span>
          </div>
          <div class="relative h-48 w-full mt-4">
            <svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 150">
              <defs>
                <lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="${accentConfig.chartColor}" stop-opacity="0.3"></stop>
                  <stop offset="100%" stop-color="${accentConfig.chartColor}" stop-opacity="0"></stop>
                </lineargradient>
              </defs>
              <path d="M0,130 L80,120 L160,105 L240,90 L320,60 L400,50" fill="none" stroke="${accentConfig.chartColor}" stroke-linecap="round" stroke-width="3"></path>
              <path d="M0,130 L80,120 L160,105 L240,90 L320,60 L400,50 V150 H0 Z" fill="url(#chartGradient)"></path>
              <circle cx="0" cy="130" fill="${accentConfig.chartColor}" r="4"></circle>
              <circle cx="80" cy="120" fill="${accentConfig.chartColor}" r="4"></circle>
              <circle cx="160" cy="105" fill="${accentConfig.chartColor}" r="4"></circle>
              <circle cx="240" cy="90" fill="${accentConfig.chartColor}" r="4"></circle>
              <circle cx="320" cy="60" fill="${accentConfig.chartColor}" r="4"></circle>
              <circle cx="400" cy="50" fill="${accentConfig.chartColor}" r="6" stroke="white" stroke-width="2"></circle>
            </svg>
            <div class="flex justify-between mt-2 font-label-sm text-label-sm text-on-surface-variant">
              <span>08:00</span>
              <span>12:00</span>
              <span>16:00</span>
              <span>20:00</span>
              <span>Now</span>
            </div>
          </div>
        </section>

        <section class="bg-primary/5 rounded-20px p-padding-card border border-primary/10 shadow-soft">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
              <h3 class="font-headline-md text-headline-md text-primary">AI Insights</h3>
            </div>
            <div class="bg-primary text-on-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">92% Confidence</div>
          </div>
          <p class="font-body-md text-body-md text-on-surface mb-4 leading-relaxed">
            Heart Guardian AI detected increasing variability in heart rhythm over the last several hours.
          </p>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-lg mt-0.5">event_upcoming</span>
              <p class="font-label-lg text-label-lg text-on-surface-variant">Schedule a consultation</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-lg mt-0.5">bedtime</span>
              <p class="font-label-lg text-label-lg text-on-surface-variant">Recommend temporary reduction of physical activity</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-lg mt-0.5">monitor_heart</span>
              <p class="font-label-lg text-label-lg text-on-surface-variant">Continue monitoring heart rhythm</p>
            </div>
          </div>
        </section>

        <section class="bg-surface-container-lowest rounded-20px p-padding-card shadow-soft">
          <h3 class="font-headline-md text-headline-md mb-4">Medical History</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-surface-container px-3 py-1 rounded-full font-label-lg text-label-lg text-on-surface">Arrhythmia</span>
            <span class="bg-surface-container px-3 py-1 rounded-full font-label-lg text-label-lg text-on-surface">Hypertension</span>
            <span class="bg-surface-container px-3 py-1 rounded-full font-label-lg text-label-lg text-on-surface">Prior Hospitalization</span>
          </div>
          <div class="mb-6">
            <p class="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Current Medication</p>
            <div class="flex gap-4">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">pill</span>
                <span class="font-body-md text-body-md">Bisoprolol</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">pill</span>
                <span class="font-body-md text-body-md">Aspirin</span>
              </div>
            </div>
          </div>
          <button class="w-full py-3 border border-outline rounded-xl font-label-lg text-label-lg text-primary hover:bg-surface-container-low transition-colors">View Full History</button>
        </section>

        <section class="bg-error/5 rounded-20px p-padding-card border border-error/10 shadow-soft">
          <h3 class="font-headline-md text-headline-md text-error mb-4">Emergency Contact</h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5WaVqZlLexvP3AcCwL_K6nkoIQZqmRlkXARSPVkiqPegHW1t7Fkca66p1OT9TRlrUkVdQAGLeIs_7RmTrgZ43_Q3W48VMNGkOQGIDyzwqEmRN3svtaMDTuucmbSWGrpAJNunmB9TRtiApyECdeBUWafeOm9d-_usWnmtM3vIX8I79br_T31GngO2zQ__8XZvwaGz-q8--0XbQst2rirENBN2K4WnC1Ok76KwwWl5LbSEWVDrCiiYWcg" alt="Sarah Carter" />
              </div>
              <div>
                <p class="font-body-lg text-body-lg font-semibold">Sarah Carter</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Wife</p>
              </div>
            </div>
            <a class="w-12 h-12 rounded-full bg-error text-white flex items-center justify-center active:scale-95 transition-transform" href="tel:+620000000000">
              <span class="material-symbols-outlined">call</span>
            </a>
          </div>
          <p class="mt-3 font-body-md text-body-md text-on-surface-variant">+62 xxx xxxx xxxx</p>
        </section>

        <section class="grid grid-cols-2 gap-stack-gap">
          <button class="flex flex-col items-center justify-center gap-2 bg-primary text-on-primary p-4 rounded-20px shadow-soft active:scale-95 transition-all">
            <span class="material-symbols-outlined">event_note</span>
            <span class="font-label-lg text-label-lg text-center leading-tight">Schedule Consultation</span>
          </button>
          <button class="flex flex-col items-center justify-center gap-2 bg-secondary-container text-on-secondary-container p-4 rounded-20px shadow-soft active:scale-95 transition-all">
            <span class="material-symbols-outlined">chat</span>
            <span class="font-label-lg text-label-lg text-center leading-tight">Start Chat</span>
          </button>
          <button class="flex flex-col items-center justify-center gap-2 bg-surface-container-lowest text-on-surface p-4 rounded-20px shadow-soft active:scale-95 transition-all border border-outline-variant">
            <span class="material-symbols-outlined">group</span>
            <span class="font-label-lg text-label-lg text-center leading-tight">Contact Caregiver</span>
          </button>
          <button class="flex flex-col items-center justify-center gap-2 bg-error text-on-error p-4 rounded-20px shadow-soft active:scale-95 transition-all">
            <span class="material-symbols-outlined">notifications_active</span>
            <span class="font-label-lg text-label-lg text-center leading-tight">Emergency Alert</span>
          </button>
        </section>

        <section class="pb-8">
          <h3 class="font-headline-md text-headline-md mb-6">Recent Health Events</h3>
          <div class="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
            <div class="relative pl-10">
              <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container border-2 border-outline-variant z-10"></div>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Yesterday</p>
              <p class="font-body-md text-body-md font-medium">Heart rhythm stable.</p>
            </div>
            <div class="relative pl-10">
              <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-warning border-2 border-white shadow-sm z-10 pulse-warning"></div>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Today 09:10</p>
              <p class="font-body-md text-body-md font-medium">Heart rate increased.</p>
            </div>
            <div class="relative pl-10">
              <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary border-2 border-white shadow-sm z-10"></div>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Today 11:45</p>
              <p class="font-body-md text-body-md font-medium">AI generated warning.</p>
            </div>
            <div class="relative pl-10">
              <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary border-2 border-white shadow-sm z-10"></div>
              <p class="font-label-sm text-label-sm text-on-surface-variant">Today 12:30</p>
              <p class="font-body-md text-body-md font-medium">Doctor opened patient profile.</p>
            </div>
          </div>
        </section>
      </main>

      <nav class="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-safe bg-surface border-t border-outline-variant">
        <a class="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1 transition-transform active:scale-95" href="#/dashboard">
          <span class="material-symbols-outlined">dashboard</span>
          <span class="font-label-sm text-label-sm">Dashboard</span>
        </a>
        <a class="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-5 py-1 transition-transform active:scale-95" href="#/doctor-patients">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">groups</span>
          <span class="font-label-sm text-label-sm">Patients</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1 transition-transform active:scale-95" href="#/doctor-calendar">
          <span class="material-symbols-outlined">calendar_today</span>
          <span class="font-label-sm text-label-sm">Calendar</span>
        </a>
        <a class="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1 transition-transform active:scale-95" href="#/doctor-profile">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
    </div>
  `;
}
