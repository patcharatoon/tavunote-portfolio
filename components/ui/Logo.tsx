import { AudioLines } from 'lucide-react';

export default function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 text-[21px] font-extrabold tracking-[-.06em]"
      aria-label="Tavunote home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet text-white shadow-lg shadow-violet/20">
        <AudioLines size={22} />
      </span>
      tavunote<span className="-ml-1 text-peach">.</span>
    </a>
  );
}
