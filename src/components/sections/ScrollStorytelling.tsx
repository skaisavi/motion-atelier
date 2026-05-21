import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { revealTransition } from "@/lib/motionPresets";

const sequence = [
  {
    number: "01",
    label: "Typography",
    line: "Scale sets the frame before motion begins.",
  },
  {
    number: "02",
    label: "Timing",
    line: "Pauses carry as much weight as transitions.",
  },
  {
    number: "03",
    label: "Masking",
    line: "The image arrives by aperture, not by noise.",
  },
  {
    number: "04",
    label: "Interaction",
    line: "Every response feels tactile, measured, and intentional.",
  },
  {
    number: "05",
    label: "Atmosphere",
    line: "Light, grain, and depth hold the composition together.",
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

export function ScrollStorytelling() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progressScale = useTransform(scrollYProgress, [0.18, 0.82], [0, 1]);
  const timelineScale = useTransform(scrollYProgress, [0.22, 0.78], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="scroll-storytelling-title"
      className="relative isolate overflow-hidden bg-atelier-black px-5 py-[clamp(4rem,6vw,5.75rem)] text-atelier-ivory md:px-8"
    >
      <div aria-hidden="true" className="story-atmosphere" />
      <div aria-hidden="true" className="hero-grain opacity-[0.1]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1060px] gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(17rem,0.55fr)] lg:gap-[clamp(2.5rem,4vw,4rem)]">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <motion.div
            variants={reveal}
            className="mb-7 flex items-center gap-4 font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-champagne"
          >
            <span>Sequence</span>
            <span className="h-px w-12 bg-atelier-champagne/50" />
            <span className="text-atelier-stone">Scroll chapter</span>
          </motion.div>

          <motion.h2
            id="scroll-storytelling-title"
            variants={reveal}
            style={shouldReduceMotion ? undefined : { y: statementY }}
            className="max-w-[10ch] font-display text-[clamp(2.85rem,9vw,4.25rem)] font-normal leading-[0.96] text-atelier-ivory md:text-[clamp(3.75rem,4.8vw,4.75rem)]"
          >
            Built in the space between frames.
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-sm text-[0.95rem] leading-7 text-atelier-stone md:text-base md:leading-8"
          >
            Motion Atelier treats scroll as a cinematic timeline: typography,
            timing, masking, interaction, and atmosphere resolving into one
            composed interface.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-y-4 left-0 hidden w-px bg-gradient-to-b from-transparent via-atelier-ivory/10 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 hidden h-28 w-20 border border-atelier-ivory/10 opacity-60 lg:block"
          />
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="relative z-10 ml-auto w-full max-w-md"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-3 top-3 w-px bg-atelier-ivory/10 md:left-4"
            >
              <motion.div
                className="h-full origin-top bg-gradient-to-b from-atelier-champagne via-atelier-ivory/50 to-transparent"
                style={shouldReduceMotion ? undefined : { scaleY: timelineScale }}
              />
            </div>

            <div className="grid gap-8 md:gap-9">
            {sequence.map((item, index) => (
              <motion.article
                key={item.label}
                variants={reveal}
                viewport={{ once: false, amount: 0.62 }}
                onViewportEnter={() => setActiveIndex(index)}
                className="group relative min-w-0 pl-9 md:pl-12"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-6 w-6 border border-atelier-ivory/14 bg-atelier-black md:h-7 md:w-7"
                  animate={
                    activeIndex === index
                      ? {
                          borderColor: "rgba(199, 169, 107, 0.62)",
                          backgroundColor: "rgba(199, 169, 107, 0.08)",
                        }
                      : {
                          borderColor: "rgba(244, 239, 231, 0.14)",
                          backgroundColor: "rgba(5, 5, 5, 1)",
                        }
                  }
                  transition={{ duration: 0.6, ease: revealTransition.ease }}
                />
                <div
                  className={`relative overflow-hidden border-l px-5 py-4 transition-colors duration-700 ease-atelier md:px-6 ${
                    activeIndex === index
                      ? "border-atelier-champagne/45"
                      : "border-atelier-ivory/10"
                  }`}
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-atelier-champagne/55 via-atelier-ivory/20 to-transparent"
                    initial={shouldReduceMotion ? false : { scaleX: 0 }}
                    whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 1.1, ease: revealTransition.ease }}
                    style={{ transformOrigin: "left" }}
                  />
                  <div className="mb-4 flex items-center gap-4 font-sans text-[0.62rem] uppercase tracking-editorial text-atelier-champagne">
                    <span>{item.number}</span>
                    <span className="h-px w-10 bg-atelier-champagne/45" />
                    <span
                      className={
                        activeIndex === index ? "text-atelier-ivory/80" : "text-atelier-stone"
                      }
                    >
                      Chapter
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[clamp(1.75rem,5vw,2.55rem)] font-normal leading-[1.06] text-atelier-ivory md:text-[clamp(2rem,2.8vw,2.55rem)]">
                      {item.label}
                    </h3>
                    <p
                      className={`mt-4 max-w-md text-sm leading-7 transition-colors duration-700 ease-atelier md:text-base md:leading-8 ${
                        activeIndex === index ? "text-atelier-ivory/90" : "text-atelier-ivory/60"
                      }`}
                    >
                      {item.line}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
            </div>
          </motion.div>

          <div
            aria-hidden="true"
            className="mt-12 h-px overflow-hidden bg-atelier-ivory/10"
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-atelier-champagne via-atelier-ivory/60 to-transparent"
              style={shouldReduceMotion ? undefined : { scaleX: progressScale }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
