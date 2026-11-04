'use client';

import { useState } from 'react';
import { Check, CheckCheck, FileText, Search, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import Avatar from '../ui/Avatar';

export default function DemoBoard() {
  const [active, setActive] = useState<'summary' | 'transcript'>('summary');
  const [query, setQuery] = useState('');
  const tasks = [
    'Send updated product roadmap',
    'Review homepage concepts',
    'Share stakeholder feedback',
  ];
  const visible = tasks.filter((x) => x.toLowerCase().includes(query.toLowerCase()));

  return (
    <div id="preview" className="relative mx-auto w-full max-w-[570px] scroll-mt-24">
      <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-[#ded3ff]/60 to-[#ffdbc5]/60 blur-3xl" />
      <div className="relative overflow-hidden rounded-[25px] border border-[#edeaf5] bg-white shadow-float">
        <div className="flex items-center justify-between border-b border-[#f0edf5] px-5 py-4 sm:px-7">
          <div className="flex items-center gap-2">
            <span className="rounded-xl bg-[#f0eaff] p-2 text-violet">
              <FileText size={19} />
            </span>
            <div>
              <p className="text-[13px] font-extrabold">Product Sync Meeting</p>
              <p className="mt-0.5 text-[11px] text-muted">Today, 10:30 AM · 32 min</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#effbf3] px-3 py-1.5 text-[10px] font-bold text-[#379266]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#48ad7d]" />
            Sample
          </span>
        </div>

        <div className="border-b border-[#f0edf5] px-5 pt-4 sm:px-7">
          <div role="tablist" aria-label="Meeting views" className="flex items-center gap-2">
            <button
              id="tab-summary"
              role="tab"
              type="button"
              aria-selected={active === 'summary'}
              aria-controls="panel-summary"
              onClick={() => setActive('summary')}
              className={`border-b-2 px-3 pb-3 text-xs font-bold transition ${
                active === 'summary'
                  ? 'border-violet text-violet'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              AI Summary
            </button>
            <button
              id="tab-transcript"
              role="tab"
              type="button"
              aria-selected={active === 'transcript'}
              aria-controls="panel-transcript"
              onClick={() => setActive('transcript')}
              className={`border-b-2 px-3 pb-3 text-xs font-bold transition ${
                active === 'transcript'
                  ? 'border-violet text-violet'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              Transcript sample
            </button>
          </div>
        </div>

        <div className="min-h-[300px] px-5 py-6 sm:px-7">
          {active === 'summary' ? (
            <div id="panel-summary" role="tabpanel" aria-labelledby="tab-summary">
              <div className="mb-3 flex items-center gap-2 text-sm font-extrabold">
                <span className="rounded-lg bg-[#f6eefe] p-1.5 text-violet">
                  <Sparkles size={14} />
                </span>
                Meeting highlights
              </div>
              <p className="mb-5 text-[12px] leading-6 text-[#777487]">
                The team aligned on Q4 product priorities, reviewed early homepage concepts, and
                agreed to share a revised roadmap by Friday.
              </p>
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-sm font-extrabold tracking-tight">Action items</h4>
                <span className="rounded-full bg-[#f4f1ff] px-2.5 py-1 text-[10px] font-bold text-violet">
                  3 tasks
                </span>
              </div>
              <label className="mb-3 flex items-center gap-2 rounded-lg border border-[#eeebf4] px-3 py-2 text-muted">
                <Search size={14} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Filter sample action items"
                  className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-[#aaa5b6]"
                  placeholder="Filter action items..."
                />
              </label>
              <div className="space-y-2">
                {visible.map((task, i) => (
                  <div
                    key={task}
                    className="flex items-center gap-3 rounded-xl border border-[#f0edf7] bg-[#fdfcff] px-3 py-3"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-md border border-[#d9d1ef] bg-white text-violet">
                      <Check size={12} />
                    </span>
                    <span className="flex-1 text-[11px] font-semibold text-[#575269]">{task}</span>
                    <span className="text-[10px] text-muted">{i === 0 ? 'Fri' : 'Next week'}</span>
                  </div>
                ))}
                {visible.length === 0 && (
                  <p className="py-4 text-center text-xs text-muted">No matching action items.</p>
                )}
              </div>
            </div>
          ) : (
            <div
              id="panel-transcript"
              role="tabpanel"
              aria-labelledby="tab-transcript"
              className="space-y-5"
            >
              {[
                {
                  name: 'Alex',
                  time: '00:05',
                  line: "Let's start with our goals for the new release.",
                },
                {
                  name: 'Mia',
                  time: '00:19',
                  line: 'We should prioritize the homepage experience and roadmap.',
                },
                {
                  name: 'Sam',
                  time: '01:02',
                  line: "I'll share the next iteration for review on Friday.",
                },
              ].map((v) => (
                <div key={v.time}>
                  <p className="mb-1 text-[11px] font-extrabold text-violet">
                    {v.name}
                    <span className="ml-2 font-medium text-muted">{v.time}</span>
                  </p>
                  <p className="text-xs leading-6 text-[#6e687b]">{v.line}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#f0edf5] bg-[#fcfbff] px-5 py-4 sm:px-7">
          <div className="flex -space-x-2">
            <Avatar name="Alex N" color="bg-[#8b7adb]" />
            <Avatar name="Mia L" color="bg-[#ed9d79]" />
            <Avatar name="Sam P" color="bg-[#66a9a5]" />
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8c869b]">
            <ShieldCheck size={14} />
            Fictional demo data
          </span>
        </div>
      </div>

      <div className="floating absolute -left-2 top-[75px] hidden items-center gap-3 rounded-2xl border border-[#efedf6] bg-white px-4 py-3 shadow-card sm:flex lg:-left-16">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f9f1] text-[#41a37a]">
          <CheckCheck size={20} />
        </span>
        <div>
          <p className="text-xs font-extrabold">Notes organized</p>
          <p className="text-[10px] text-muted">Ready to review</p>
        </div>
      </div>

      <div className="floating-delay absolute -bottom-8 -right-3 hidden items-center gap-3 rounded-2xl border border-[#efedf6] bg-white px-4 py-3 shadow-card sm:flex lg:-right-10">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff2e8] text-peach">
          <Zap size={20} />
        </span>
        <div>
          <p className="text-xs font-extrabold">3 action items</p>
          <p className="text-[10px] text-muted">Ready for your team</p>
        </div>
      </div>
    </div>
  );
}
