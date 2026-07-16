function getPatientNavItems(activeTab) {
  const items = [
    { id: 'home', href: '#/dashboard', icon: 'home', label: 'Home' },
    { id: 'monitoring', href: '#/monitoring', icon: 'monitor_heart', label: 'Monitoring' },
    { id: 'ai-insights', href: '#/ai-insights', icon: 'psychology', label: 'AI Insights' },
    { id: 'history', href: '#/history', icon: 'history', label: 'History' },
    { id: 'profile', href: '#/profile', icon: 'person', label: 'Profile' },
  ];

  return items.map((item) => {
    const isActive = item.id === activeTab;
    return `
      <a href="${item.href}" class="flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-all duration-150 ${isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:text-primary'}">
        <span class="material-symbols-outlined ${isActive ? 'text-[24px]' : ''}" style="${isActive ? "font-variation-settings: 'FILL' 1;" : ''}">${item.icon}</span>
        <span class="font-label-sm">${item.label}</span>
      </a>
    `;
  }).join('');
}

export function createPatientPageShell({ title, activeTab, headerActions = '', headerIcon = 'home', children, bodyClass = 'bg-background' }) {
  return `
    <div class="min-h-screen ${bodyClass} pb-24 text-on-surface">
      <header class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-margin-screen">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-outline-variant bg-surface-container-high">
            <span class="material-symbols-outlined text-primary">${headerIcon}</span>
          </div>
          <div class="flex flex-col">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile leading-none text-primary">Heart Guardian</h1>
            <p class="font-label-sm text-on-surface-variant">${title}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">${headerActions}</div>
      </header>

      ${children}

      <nav class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-outline-variant bg-surface px-4 py-2" style="padding-bottom: calc(12px + env(safe-area-inset-bottom));">
        ${getPatientNavItems(activeTab)}
      </nav>
    </div>
  `;
}

export function createPatientActionGrid(items) {
  return `
    <section class="grid grid-cols-2 gap-3">
      ${items.map((item) => `
        <a href="${item.href}" class="flex flex-col items-center gap-2 rounded-[20px] border border-outline-variant/30 bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-transform active:scale-95">
          <div class="flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}">
            <span class="material-symbols-outlined ${item.iconClass}">${item.icon}</span>
          </div>
          <span class="font-label-lg text-on-surface">${item.label}</span>
        </a>
      `).join('')}
    </section>
  `;
}
