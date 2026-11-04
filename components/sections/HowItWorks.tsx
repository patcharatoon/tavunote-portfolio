import { WandSparkles } from 'lucide-react';
import Tag from '../ui/Tag';

const steps = [
  {
    n: '01',
    title: 'Capture the moment',
    desc: 'A future real product could integrate meeting audio and live transcription.',
  },
  {
    n: '02',
    title: 'See the full story',
    desc: 'Browse a structured summary, topics and decisions.',
  },
  {
    n: '03',
    title: 'Keep things moving',
    desc: 'Find tasks and follow-up items in one place.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-heading" className="scroll-mt-20 bg-[#f7f5ff] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-9 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <Tag>HOW IT WORKS</Tag>
          <h2 id="how-heading" className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            Make room for <span className="gradient-text">the big picture.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-muted">
            The concept is simple: let people focus on the conversation, and present the takeaways
            in one calm workspace.
          </p>
          <ol className="mt-9 space-y-7">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-sm font-extrabold text-violet shadow-sm"
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-base font-extrabold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div
          className="rounded-[36px] bg-gradient-to-br from-[#ede5ff] via-[#f8f1ff] to-[#ffdfce] p-5 shadow-card sm:p-10"
          aria-hidden="true"
        >
          <div className="rounded-[23px] border border-[#ebe7f4] bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <span className="rounded-lg bg-[#f0e9ff] p-2 text-violet">
                  <WandSparkles size={17} />
                </span>
                Meeting overview
              </div>
              <span className="text-[10px] font-bold text-muted">SAMPLE VIEW</span>
            </div>
            <div className="my-7 flex h-32 items-end justify-center gap-[3px] overflow-hidden rounded-xl bg-[#faf8ff] p-3 sm:gap-[5px] sm:p-5">
              {[
                22, 31, 45, 25, 54, 41, 65, 37, 80, 51, 64, 30, 77, 50, 59, 38, 70, 44, 26, 56, 39,
                67, 30, 48, 72, 39, 28,
              ].map((h, i) => (
                <span
                  key={i}
                  className="w-[4px] shrink-0 rounded-full bg-gradient-to-t from-[#8b6af9] to-[#ed9db9] sm:w-[6px]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                ['32 min', 'Duration'],
                ['3', 'Speakers'],
                ['5', 'Highlights'],
              ].map(([a, b]) => (
                <div key={b} className="rounded-xl bg-[#faf9ff] px-2 py-3">
                  <p className="text-lg font-extrabold text-violet">{a}</p>
                  <p className="text-[10px] text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
