export function createFooter() {
  return `
    <footer class="border-t border-outline/20 bg-surface-container-lowest">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-on-surface-variant sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Heart Guardian. Continuous care for every heartbeat.</p>
        <div class="flex gap-4">
          <a href="#/" class="transition hover:text-primary">Home</a>
          <a href="#/login" class="transition hover:text-primary">Login</a>
          <a href="#/register" class="transition hover:text-primary">Register</a>
        </div>
      </div>
    </footer>
  `;
}
