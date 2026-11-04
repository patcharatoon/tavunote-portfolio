import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-10 sm:px-9 md:flex-row md:items-center lg:px-12">
        <Logo />
        <p className="text-xs leading-6 text-muted">
          © {new Date().getFullYear()} Tavunote · Fictional product · Frontend portfolio concept
          <br />
          No AI backend, payments or customer accounts are connected.
        </p>
        <a className="text-xs font-bold text-violet hover:underline" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
