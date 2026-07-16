export function createInfoPage(title, description) {
  return `
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="rounded-[2rem] border border-outline/20 bg-surface-container-lowest p-8 shadow-health-card">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">More about Heart Guardian</p>
        <h1 class="mt-3 text-3xl font-semibold text-on-surface">${title}</h1>
        <p class="mt-4 max-w-2xl text-lg leading-8 text-on-surface-variant">${description}</p>
      </div>
    </section>
  `;
}
