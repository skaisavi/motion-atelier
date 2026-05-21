import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/lib/motionPresets";
import { cn } from "@/lib/cn";

const principles = [
  {
    number: "01",
    title: "Typography",
    text: "Scale sets the first emotional cue. Letterforms arrive like frames in a sequence, with enough silence around them to feel deliberate.",
    detail: "Display / tension / negative space",
    cue: "w-8",
    className: "md:col-span-2 xl:col-span-4",
  },
  {
    number: "02",
    title: "Rhythm",
    text: "Motion follows cadence rather than spectacle. Reveals, pauses, and transitions are paced like editorial cuts.",
    detail: "Stagger / restraint / tempo",
    cue: "w-16",
    className: "md:col-span-1 xl:col-span-2 xl:min-h-[16rem]",
  },
  {
    number: "03",
    title: "Interaction",
    text: "The interface responds as if it has weight. Hover states are quiet, tactile, and precise enough to reward attention.",
    detail: "Magnetism / pressure / intent",
    cue: "w-12",
    className: "md:col-span-1 xl:col-span-3 xl:min-h-[19rem]",
  },
  {
    number: "04",
    title: "Atmosphere",
    text: "Grain, glow, and shadow are treated like lighting on a set: present, cinematic, and never louder than the composition.",
    detail: "Grain / depth / light falloff",
    cue: "w-20",
    className: "md:col-span-2 xl:col-span-3 xl:min-h-[18rem]",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

export function MotionPrinciples() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="motion-studies"
      aria-labelledby="motion-principles-title"
      className="relative isolate overflow-hidden bg-atelier-black px-5 py-[clamp(4rem,6vw,5.75rem)] text-atelier-ivory md:px-8"
    >
      <div aria-hidden="true" className="principles-atmosphere" />
      <div aria-hidden="true" className="hero-grain opacity-[0.12]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1060px] gap-10 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-[clamp(2.75rem,4vw,4.25rem)]">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={container}
          className="max-w-lg lg:sticky lg:top-24 lg:max-w-[24rem] lg:self-start"
        >
          <motion.div
            variants={reveal}
            className="mb-7 flex items-center gap-4 font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-champagne"
          >
            <span>Principles</span>
            <span className="h-px w-12 bg-atelier-champagne/50" />
            <span className="text-atelier-stone">Motion grammar</span>
          </motion.div>

          <motion.h2
            id="motion-principles-title"
            variants={reveal}
            className="max-w-[8.5ch] font-display text-[clamp(3rem,10vw,4.4rem)] font-normal italic leading-[0.94] text-atelier-ivory md:text-[clamp(3.9rem,5vw,4.8rem)]"
          >
            Motion Principles
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-sm text-[0.95rem] leading-7 text-atelier-stone md:text-base md:leading-8"
          >
            Four rules shape the atelier: type as image, rhythm as structure,
            interaction as touch, and atmosphere as editorial lighting.
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:ml-[clamp(0.75rem,1.5vw,1.5rem)] xl:grid-cols-6 xl:items-stretch"
        >
          {principles.map((principle) => (
            <motion.article
              key={principle.title}
              variants={reveal}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      borderColor: "rgba(199, 169, 107, 0.48)",
                    }
              }
              transition={revealTransition}
              className={cn(
                "group relative min-h-[14.5rem] min-w-0 overflow-hidden border border-atelier-ivory/10 bg-atelier-ivory/[0.028] p-5 [container-type:inline-size] transition-colors duration-500 ease-atelier hover:border-atelier-champagne/45 md:min-h-[16rem] md:p-5 xl:p-6",
                principle.className,
              )}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-atelier group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(199, 169, 107, 0.16), transparent 58%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-atelier-ivory/10"
              >
                <motion.span
                  className="block h-full w-1/2 bg-gradient-to-r from-transparent via-atelier-champagne/70 to-transparent"
                  animate={shouldReduceMotion ? undefined : { x: ["-110%", "220%"] }}
                  transition={{
                    duration: 6.5 + Number(principle.number),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 z-0 h-16 w-11 border border-atelier-ivory/10 opacity-70 transition duration-500 ease-atelier group-hover:-translate-y-2 group-hover:border-atelier-champagne/35 md:right-8 md:top-8 md:h-20 md:w-14"
              >
                <motion.span
                  className={cn(
                    "absolute left-3 top-1/2 h-px bg-atelier-champagne/55",
                    principle.cue,
                  )}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, 12, 0],
                          opacity: [0.35, 0.85, 0.35],
                        }
                  }
                  transition={{
                    duration: 5.8 + Number(principle.number) * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="relative z-10 flex h-full min-w-0 flex-col justify-between gap-12">
                <div className="min-w-0">
                  <div className="mb-5 flex min-w-0 items-start justify-between gap-5 font-sans text-[0.6rem] uppercase tracking-editorial text-atelier-stone">
                    <span>{principle.number}</span>
                    <span className="max-w-[12rem] text-right leading-5">{principle.detail}</span>
                  </div>
                  <h3 className="max-w-full whitespace-normal break-words font-display text-[clamp(1.75rem,8.5cqw,2.55rem)] font-normal leading-[1.08] text-atelier-ivory">
                    {principle.title}
                  </h3>
                </div>

                <div className="min-w-0">
                  <div
                    aria-hidden="true"
                    className="mb-5 h-px w-16 bg-atelier-ivory/12 transition-all duration-500 ease-atelier group-hover:w-28 group-hover:bg-atelier-champagne/45"
                  />
                  <p className="max-w-sm text-sm leading-7 text-atelier-ivory/70 transition-colors duration-500 ease-atelier group-hover:text-atelier-ivory/90 md:text-[0.95rem] md:leading-7">
                    {principle.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
