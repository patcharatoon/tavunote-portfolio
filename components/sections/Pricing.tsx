'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Tag from '../ui/Tag';

const plans = [
  {
    name: 'Starter',
    desc: 'For curious individuals',
    list: ['3 example meetings', 'Basic summary preview', 'Browse action items'],
  },
  {
    name: 'Pro',
    desc: 'For teams finding their flow',
    list: [
      'Unlimited concept meetings',
      'Detailed summary views',
      'Action item organization',
      'Search meeting notes',
    ],
  },
  {
    name: 'Team',
    desc: 'For teams working together',
    list: [
      'Everything in Pro',
      'Team workspace concept',
      'Shared note organization',
      'Priority support concept',
    ],
  },
];

const monthlyPrices = [0, 12, 29];
const yearlyPrices = [0, 9, 23];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-9 lg:px-12">
        <div className="text-center">
          <Tag>SIMPLE PLAN PREVIEW</Tag>
          <h2 id="pricing-heading" className="mb-4 mt-6 text-4xl font-extrabold sm:text-5xl">
            A plan for <span className="gradient-text">every team.</span>
          </h2>
          <p className="mx-auto max-w-lg text-sm leading-7 text-muted">
            Interactive sample pricing for this fictional product. No checkout or subscription is
            connected.
          </p>
          <fieldset className="mt-7 inline-flex items-center gap-1 rounded-full border border-[#eeebf4] bg-[#f7f5fa] p-1.5 text-xs font-bold">
            <legend className="sr-only">Billing period</legend>
            <button
              type="button"
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`rounded-full px-5 py-2.5 transition ${!annual ? 'bg-white text-ink shadow-sm' : 'text-muted'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`rounded-full px-5 py-2.5 transition ${annual ? 'bg-white text-ink shadow-sm' : 'text-muted'}`}
            >
              Yearly <span className="ml-1 text-[#46a574]">Save 20%+</span>
            </button>
          </fieldset>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`relative rounded-[29px] border p-8 ${i === 1 ? 'border-[#9b83f8] bg-[#faf8ff] shadow-[0_18px_65px_rgba(112,76,244,.12)]' : 'border-[#eeeaf5] bg-white'}`}
            >
              {i === 1 && (
                <div className="absolute -top-3 left-7 rounded-full bg-violet px-3 py-1 text-[10px] font-bold text-white">
                  POPULAR PREVIEW
                </div>
              )}
              <h3 className="text-xl font-extrabold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.desc}</p>
              <div className="my-7 flex items-baseline">
                <span className="text-[45px] font-extrabold tracking-tight">
                  ${annual ? yearlyPrices[i] : monthlyPrices[i]}
                </span>
                <span className="ml-2 text-xs text-muted">/ month · example</span>
              </div>
              <a
                href="#faq"
                className={`flex w-full items-center justify-center rounded-full py-3.5 text-sm font-bold transition ${i === 1 ? 'gradient-btn text-white hover:opacity-90' : 'border border-[#e9e4f3] bg-white hover:bg-[#f7f4fc]'}`}
              >
                View plan details <ArrowRight className="ml-2" size={15} />
              </a>
              <ul className="mt-8 space-y-4">
                {plan.list.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[13px] text-[#686278]">
                    <Check size={16} className="mt-0.5 shrink-0 text-violet" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
