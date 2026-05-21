export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-atelier-ivory/10 bg-atelier-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1060px] items-center justify-between px-5 md:px-8">
        <a
          className="font-sans text-xs uppercase tracking-editorial text-atelier-ivory"
          href="/"
        >
          Motion Atelier
        </a>
        <nav aria-label="Primary navigation">
          <a
            className="font-sans text-xs uppercase tracking-editorial text-atelier-stone transition-colors duration-500 ease-atelier hover:text-atelier-ivory"
            href="mailto:hello@motionatelier.dev"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
