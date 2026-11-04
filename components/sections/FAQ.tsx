'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Tag from '../ui/Tag';

const faq = [
  {
    q: 'Is Tavunote a real AI service?',
    a: 'No. Tavunote is a fictional frontend concept created as a portfolio demonstration. The preview uses example meeting data and does not transcribe or upload audio.',
  },
  {
    q: 'Can I upload a real meeting recording?',
    a: 'Not in this demo. File uploads and transcription would require a separately built backend and an AI provider integration.',
  },
  {
    q: 'Does the pricing represent real subscriptions?',
    a: 'No. The pricing cards illustrate the interface and billing toggle only. There are no payments, subscriptions, or real accounts.',
  },
  {
    q: 'Is this demo responsive on mobile?',
    a: 'Yes. The page layout, navigation and interactive pricing and FAQ controls are built for mobile and desktop.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-[#f8f6ff] py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-9">
        <div className="mb-12 text-center">
          <Tag>FAQ</Tag>
          <h2 id="faq-heading" className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Good to <span className="gradient-text">know.</span>
          </h2>
        </div>
        <dl className="space-y-3">
          {faq.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-[#eee9f6] bg-white">
              <dt>
                <button
                  type="button"
                  onClick={() => setActive(active === i ? null : i)}
                  aria-expanded={active === i}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-sm font-extrabold"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    size={17}
                    className={`shrink-0 text-violet transition-transform ${active === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all ${active === i ? 'px-6 pb-6' : 'h-0'}`}
                hidden={active !== i}
              >
                <p className="text-sm leading-7 text-muted">{f.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
