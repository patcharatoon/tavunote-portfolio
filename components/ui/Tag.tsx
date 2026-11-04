import { Sparkles } from 'lucide-react';

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e9defa] bg-white/80 px-4 py-2 text-xs font-bold text-violet shadow-sm">
      <Sparkles size={13} />
      {children}
    </span>
  );
}
