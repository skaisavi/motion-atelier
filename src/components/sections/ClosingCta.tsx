import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/lib/motionPresets";

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
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

export function ClosingCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="closing-title"
      className="relative isolate overflow-hidden bg-atelier-black px-5 py-[clamp(4rem,6vw,5.75rem)] text-atelier-ivory md:px-8"
    >
      <div aria-hidden="true" className="closing-atmosphere" />
      <div aria-hidden="true" className="hero-grain opacity-[0.1]" />

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={container}
        className="relative z-10 mx-auto w-full max-w-[1060px] border-t border-atelier-ivory/10 pt-10"
      >
        <motion.div
          variants={reveal}
          className="mb-8 flex items-center gap-4 font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-champagne"
        >
          <span>Final frame</span>
          <span className="h-px w-12 bg-atelier-champagne/50" />
          <span className="text-atelier-stone">Motion Atelier</span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
          <div>
            <motion.h2
              id="closing-title"
              variants={reveal}
              className="max-w-[10ch] font-display text-[clamp(3rem,10vw,4.5rem)] font-normal leading-[0.94] text-atelier-ivory md:text-[clamp(4rem,5.4vw,5.25rem)]"
            >
              Motion, composed with restraint.
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-md text-[0.95rem] leading-7 text-atelier-stone md:text-base md:leading-8"
            >
              Built with React, TypeScript, Tailwind CSS and Framer Motion.
            </motion.p>
          </div>

          <motion.div
            variants={reveal}
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <motion.a
              href="https://github.com/skaisavi/motion-atelier"
              className="group relative inline-flex h-11 min-w-36 items-center justify-center overflow-hidden border border-atelier-champagne/[0.65] px-5 font-sans text-[0.66rem] uppercase tracking-editorial text-atelier-ivory transition duration-500 ease-atelier hover:border-atelier-ivory hover:text-atelier-black focus:outline-none focus-visible:ring-2 focus-visible:ring-atelier-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-atelier-black"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-y-full bg-atelier-ivory transition-transform duration-500 ease-atelier group-hover:translate-y-0"
              />
              <span className="relative">View Code</span>
            </motion.a>

            <motion.a
              href="#top"
              className="group relative inline-flex h-11 min-w-36 items-center justify-center overflow-hidden border border-atelier-ivory/15 px-5 font-sans text-[0.66rem] uppercase tracking-editorial text-atelier-stone transition duration-500 ease-atelier hover:border-atelier-ivory/50 hover:text-atelier-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-atelier-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-atelier-black"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-atelier-ivory/70 transition-transform duration-500 ease-atelier group-hover:scale-x-100"
              />
              <span className="relative">Return to Top</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
