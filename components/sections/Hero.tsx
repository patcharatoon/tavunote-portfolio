import { ArrowRight, Play } from 'lucide-react';
import Tag from '../ui/Tag';
import ActionButton from '../ui/ActionButton';
import Avatar from '../ui/Avatar';
import DemoBoard from '../demo/DemoBoard';

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-28 pt-8 sm:px-9 md:pt-16 lg:grid-cols-[.95fr_1.05fr] lg:gap-8 lg:px-12 lg:pb-40">
        <div className="relative z-10 max-w-[580px]">
          <Tag>MEETINGS, MADE MEANINGFUL</Tag>
          <h1 className="mb-7 mt-7 text-[clamp(2.3rem,6.5vw,5.6rem)] font-extrabold leading-[1.08] tracking-[-.06em]">
            Less note-taking.
            <br />
            <span className="gradient-text">More great ideas.</span>
          </h1>
          <p className="max-w-[485px] text-[16px] leading-8 text-[#777184] sm:text-lg">
            Imagine a meeting assistant that captures the details, finds the highlights, and keeps
            your team moving forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton>
              Explore the demo <ArrowRight size={17} />
            </ActionButton>
            <ActionButton secondary href="#how">
              <Play size={16} /> How it works
            </ActionButton>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <Avatar name="Mia L" color="bg-[#ee9f7d]" />
              <Avatar name="Alex N" color="bg-[#8e7ed4]" />
              <Avatar name="Sam P" color="bg-[#70b6aa]" />
            </div>
            <p className="text-xs leading-5 text-[#898397]">
              <strong className="text-ink">Thoughtful product design</strong>
              <br />A frontend portfolio concept
            </p>
          </div>
        </div>
        <div className="lg:pl-5">
          <DemoBoard />
        </div>
      </div>
    </section>
  );
}
