export default function ActionButton({
  children,
  secondary = false,
  href = '#preview',
}: {
  children: React.ReactNode;
  secondary?: boolean;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`${
        secondary
          ? 'border border-[#e4e0ec] bg-white text-ink hover:bg-[#f5f1fb]'
          : 'gradient-btn text-white shadow-[0_12px_22px_rgba(109,77,244,.22)] hover:opacity-90'
      } inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet`}
    >
      {children}
    </a>
  );
}
