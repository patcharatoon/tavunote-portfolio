import { CheckCheck, Mic2, Sparkles } from 'lucide-react';
import Tag from '../ui/Tag';

const features = [
  {
    icon: Mic2,
    title: 'Capture every conversation',
    desc: 'A concept for effortless meeting transcription with speaker-friendly notes.',
    iconStyle: 'bg-[#efe8ff] text-violet',
  },
  {
    icon: Sparkles,
    title: 'Find the important bits',
    desc: 'See key decisions and highlights presented in a clear, scannable summary.',
    iconStyle: 'bg-[#fff0e8] text-[#ee9069]',
  },
  {
    icon: CheckCheck,
    title: 'Turn talk into action',
    desc: 'Keep next steps organized so your team knows what happens after the call.',
    iconStyle: 'bg-[#e8f5ff] text-[#5f9dd6]',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-20 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-9 lg:px-12">
        <div className="mx-auto max-w-[670px] text-center">
          <Tag>MADE FOR FOCUSED TEAMS</Tag>
          <h2
            id="features-heading"
            className="mb-4 mt-6 text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            Everything important.
            <br />
            <span className="gradient-text">Nothing overlooked.</span>
          </h2>
          <p className="text-base leading-7 text-muted">
            A clean concept for turning busy conversations into organized, easy-to-follow outcomes.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group rounded-[27px] border border-[#f0ecf6] bg-[#fdfbff] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div
                  className={`mb-8 grid h-14 w-14 place-items-center rounded-2xl ${f.iconStyle}`}
                  aria-hidden="true"
                >
                  <Icon size={25} />
                </div>
                <h3 className="mb-3 text-[19px] font-extrabold tracking-[-.04em]">{f.title}</h3>
                <p className="text-sm leading-7 text-muted">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
