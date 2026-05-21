import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/lib/motionPresets";
import { cn } from "@/lib/cn";

const studies = [
  {
    number: "01",
    title: "Luxury Landing Page",
    copy: "A first-screen composition built around cinematic scale, restrained product cues, and slow entrance choreography.",
    tags: ["Hero", "Mask", "Editorial"],
    className: "md:col-span-2 xl:col-span-7",
    visual: "landing",
  },
  {
    number: "02",
    title: "Editorial Scroll Scene",
    copy: "Layered text and imagery move at different tempos, creating the feeling of a film still unfolding on scroll.",
    tags: ["Scroll", "Parallax"],
    className: "xl:col-span-5",
    visual: "scroll",
  },
  {
    number: "03",
    title: "Portfolio Transition",
    copy: "A quiet page-change study using directional masks, black frames, and typography that holds the cut together.",
    tags: ["Transition", "Route"],
    className: "xl:col-span-4",
    visual: "transition",
  },
  {
    number: "04",
    title: "Animated Product Story",
    copy: "A product narrative paced through detail reveals, soft zooms, and tactile hover states.",
    tags: ["Product", "Reveal"],
    className: "md:col-span-2 xl:col-span-8",
    visual: "product",
  },
  {
    number: "05",
    title: "Cinematic Navigation",
    copy: "Navigation treated as an editorial overlay: sparse, precise, and responsive to intent.",
    tags: ["Menu", "Hover"],
    className: "xl:col-span-5",
    visual: "navigation",
  },
  {
    number: "06",
    title: "Motion Campaign Page",
    copy: "A campaign page with atmospheric rhythm, framed media, and restrained interactive accents.",
    tags: ["Campaign", "Motion"],
    className: "xl:col-span-7",
    visual: "campaign",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

type VisualProps = {
  type: string;
  shouldReduceMotion: boolean;
};

function StudyVisual({ type, shouldReduceMotion }: VisualProps) {
  const slowDrift = shouldReduceMotion
    ? undefined
    : {
        y: [0, -8, 0],
      };

  return (
    <div className="relative aspect-[1.85] overflow-hidden border border-atelier-ivory/10 bg-atelier-black">
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 opacity-80 transition duration-700 ease-atelier group-hover:scale-[1.025]",
          type === "landing" &&
            "bg-[radial-gradient(circle_at_24%_24%,rgba(199,169,107,0.18),transparent_28%),linear-gradient(135deg,rgba(244,239,231,0.12),transparent_38%),#080808]",
          type === "scroll" &&
            "bg-[radial-gradient(circle_at_76%_22%,rgba(66,26,26,0.38),transparent_34%),linear-gradient(160deg,rgba(244,239,231,0.08),transparent_42%),#070707]",
          type === "transition" &&
            "bg-[linear-gradient(110deg,rgba(244,239,231,0.12)_0_1px,transparent_1px_42%),radial-gradient(circle_at_18%_78%,rgba(199,169,107,0.14),transparent_26%),#060606]",
          type === "product" &&
            "bg-[radial-gradient(circle_at_48%_38%,rgba(244,239,231,0.14),transparent_24%),radial-gradient(circle_at_82%_68%,rgba(199,169,107,0.16),transparent_30%),#080808]",
          type === "navigation" &&
            "bg-[linear-gradient(90deg,rgba(244,239,231,0.1),transparent_32%),radial-gradient(circle_at_72%_28%,rgba(199,169,107,0.12),transparent_24%),#070707]",
          type === "campaign" &&
            "bg-[radial-gradient(circle_at_28%_28%,rgba(199,169,107,0.16),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(66,26,26,0.34),transparent_34%),#070707]",
        )}
      />
      <div aria-hidden="true" className="absolute inset-5 border border-atelier-ivory/10 md:inset-6" />

      {type === "landing" && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute left-[12%] top-[18%] h-[56%] w-[46%] border border-atelier-ivory/15 bg-atelier-ivory/[0.025]"
            animate={slowDrift}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-[14%] top-[22%] h-[48%] w-[18%] border border-atelier-champagne/20"
            animate={shouldReduceMotion ? undefined : { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)", "inset(0 0 100% 0)"] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden="true"
            className="absolute left-[18%] top-[35%] h-px w-[34%] bg-atelier-ivory/45 transition-all duration-700 ease-atelier group-hover:w-[48%]"
          />
          <div aria-hidden="true" className="absolute left-[18%] top-[44%] h-px w-[20%] bg-atelier-champagne/55" />
        </>
      )}

      {type === "scroll" && (
        <>
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              aria-hidden="true"
              className="absolute h-[54%] w-[20%] border border-atelier-ivory/10 bg-atelier-ivory/[0.025]"
              style={{
                left: `${18 + item * 20}%`,
                top: `${18 + item * 8}%`,
              }}
              animate={shouldReduceMotion ? undefined : { y: [0, item % 2 ? 10 : -10, 0] }}
              transition={{
                duration: 7 + item,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <div aria-hidden="true" className="absolute bottom-[18%] left-[16%] h-px w-[64%] overflow-hidden bg-atelier-ivory/12">
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-atelier-champagne/70 to-transparent"
              animate={shouldReduceMotion ? undefined : { x: ["-100%", "300%"] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </>
      )}

      {type === "transition" && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute left-[18%] top-[18%] h-[52%] w-[34%] bg-atelier-ivory/[0.055]"
            animate={shouldReduceMotion ? undefined : { x: [0, 18, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-[18%] top-[28%] h-[44%] w-[30%] border border-atelier-champagne/25"
            animate={shouldReduceMotion ? undefined : { x: [0, -14, 0] }}
            transition={{ duration: 8.25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-[20%] left-1/2 w-px bg-atelier-ivory/20"
            animate={shouldReduceMotion ? undefined : { scaleY: [0.25, 1, 0.25] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          <div aria-hidden="true" className="absolute left-[18%] top-[78%] h-px w-[58%] bg-atelier-champagne/45" />
        </>
      )}

      {type === "product" && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[56%] w-[24%] -translate-x-1/2 -translate-y-1/2 border border-atelier-ivory/15 bg-atelier-ivory/[0.035] shadow-soft-edge"
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.035, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[34%] top-[24%] h-[52%] w-px bg-gradient-to-b from-transparent via-atelier-champagne/45 to-transparent"
            animate={shouldReduceMotion ? undefined : { opacity: [0.25, 0.85, 0.25] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div aria-hidden="true" className="absolute left-[18%] top-[28%] h-px w-[22%] bg-atelier-champagne/45" />
          <div aria-hidden="true" className="absolute right-[18%] bottom-[28%] h-px w-[26%] bg-atelier-ivory/25" />
        </>
      )}

      {type === "navigation" && (
        <>
          <div aria-hidden="true" className="absolute left-[16%] top-[25%] h-px w-[68%] bg-atelier-ivory/12" />
          <motion.div
            aria-hidden="true"
            className="absolute left-[16%] top-[25%] h-px w-[20%] bg-gradient-to-r from-transparent via-atelier-champagne/70 to-transparent"
            animate={shouldReduceMotion ? undefined : { x: ["0%", "240%", "0%"] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
          {[0, 1, 2, 3].map((item) => (
            <motion.span
              key={item}
              aria-hidden="true"
              className="absolute top-[25%] h-2 w-2 -translate-y-1/2 border border-atelier-champagne/50 bg-atelier-black"
              style={{ left: `${18 + item * 18}%` }}
              animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.95, 0.35] }}
              transition={{
                duration: 4.5,
                delay: item * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <div aria-hidden="true" className="absolute bottom-[24%] left-[20%] space-y-3">
            <div className="h-px w-28 bg-atelier-ivory/35" />
            <div className="h-px w-20 bg-atelier-ivory/20" />
            <div className="h-px w-32 bg-atelier-champagne/35" />
          </div>
        </>
      )}

      {type === "campaign" && (
        <>
          <div aria-hidden="true" className="absolute left-[14%] top-1/2 h-px w-[72%] bg-atelier-ivory/12" />
          {[0, 1, 2, 3].map((item) => (
            <motion.div
              key={item}
              aria-hidden="true"
              className="absolute top-1/2 h-12 w-9 -translate-y-1/2 border border-atelier-ivory/10 bg-atelier-ivory/[0.025]"
              style={{ left: `${18 + item * 16}%` }}
              animate={shouldReduceMotion ? undefined : { y: [0, item % 2 ? -8 : 8, 0] }}
              transition={{
                duration: 6.8 + item * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <div aria-hidden="true" className="absolute bottom-[20%] left-[16%] h-px w-[34%] overflow-hidden bg-atelier-ivory/12 transition-all duration-700 ease-atelier group-hover:w-[54%]">
            <motion.div
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-atelier-champagne/70 to-transparent"
              animate={shouldReduceMotion ? undefined : { x: ["-120%", "250%"] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export function InteractiveGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="interactive-gallery-title"
      className="relative isolate overflow-hidden bg-atelier-black px-5 py-[clamp(4rem,6vw,5.75rem)] text-atelier-ivory md:px-8"
    >
      <div aria-hidden="true" className="gallery-atmosphere" />
      <div aria-hidden="true" className="hero-grain opacity-[0.1]" />

      <div className="relative z-10 mx-auto w-full max-w-[1060px]">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mb-9 grid gap-7 border-t border-atelier-ivory/10 pt-7 lg:mb-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(16rem,0.42fr)] lg:items-end"
        >
          <div>
            <motion.div
              variants={reveal}
              className="mb-7 flex items-center gap-4 font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-champagne"
            >
              <span>Archive</span>
              <span className="h-px w-12 bg-atelier-champagne/50" />
              <span className="text-atelier-stone">Interface studies</span>
            </motion.div>
            <motion.h2
              id="interactive-gallery-title"
              variants={reveal}
              className="max-w-[9ch] font-display text-[clamp(2.9rem,10vw,4.35rem)] font-normal leading-[0.94] text-atelier-ivory md:text-[clamp(3.9rem,5.2vw,4.9rem)]"
            >
              Interactive Gallery
            </motion.h2>
          </div>

          <motion.p
            variants={reveal}
            className="max-w-sm text-[0.95rem] leading-7 text-atelier-stone md:text-base md:leading-8"
          >
            A curated archive of motion-led interface experiments, each composed
            as a small editorial artifact rather than a project thumbnail.
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={container}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12"
        >
          {studies.map((study) => (
            <motion.article
              key={study.title}
              variants={reveal}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      borderColor: "rgba(199, 169, 107, 0.45)",
                    }
              }
              transition={revealTransition}
              className={cn(
                "group min-w-0 overflow-hidden border border-atelier-ivory/10 bg-atelier-ivory/[0.026] p-3 [container-type:inline-size] transition-colors duration-500 ease-atelier",
                study.className,
              )}
            >
              <StudyVisual type={study.visual} shouldReduceMotion={Boolean(shouldReduceMotion)} />

              <div className="grid gap-5 px-1 pb-2 pt-5 md:grid-cols-[minmax(0,1fr)_auto]">
                <div className="min-w-0">
                  <div className="mb-4 flex items-center gap-4 font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-stone">
                    <span>{study.number}</span>
                    <span className="h-px w-8 bg-atelier-ivory/15" />
                    <span>Study</span>
                  </div>
                  <h3 className="max-w-full font-display text-[clamp(1.7rem,5cqw,2.45rem)] font-normal leading-[1.08] text-atelier-ivory">
                    {study.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-atelier-ivory/70 transition-colors duration-500 ease-atelier group-hover:text-atelier-ivory/90 md:text-[0.95rem] md:leading-7">
                    {study.copy}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-2 md:max-w-40 md:justify-end">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-atelier-ivory/10 px-3 py-2 font-sans text-[0.62rem] uppercase tracking-editorial text-atelier-stone"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
