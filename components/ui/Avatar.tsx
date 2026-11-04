export default function Avatar({ name, color }: { name: string; color: string }) {
  return (
    <span
      role="img"
      aria-label={name}
      title={name}
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-[3px] border-white text-[11px] font-bold text-white ${color}`}
    >
      {name
        .split(' ')
        .map((x) => x[0])
        .join('')}
    </span>
  );
}
