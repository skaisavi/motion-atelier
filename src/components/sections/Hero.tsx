import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { revealTransition } from "@/lib/motionPresets";

const words = ["Motion", "Atelier"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.18,
    },
  },
};

const revealItem = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: revealTransition,
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.4 });
  const rotateX = useTransform(smoothY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);
  const floatingRotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const floatingRotateY = useTransform(smoothX, [0, 1], [-8, 8]);
  const cardGlowX = useTransform(smoothX, [0, 1], ["18%", "82%"]);
  const cardGlowY = useTransform(smoothY, [0, 1], ["16%", "78%"]);
  const cardGlow = useMotionTemplate`radial-gradient(circle at ${cardGlowX} ${cardGlowY}, rgba(199, 169, 107, 0.18), transparent 48%)`;

  const motionProps = shouldReduceMotion
    ? {
        initial: false,
        animate: "visible",
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-screen overflow-hidden bg-atelier-black px-5 pb-[clamp(2rem,3.5vw,3rem)] pt-[clamp(5rem,6vw,5.75rem)] text-atelier-ivory md:px-8"
    >
      <div aria-hidden="true" className="hero-atmosphere" />
      <div aria-hidden="true" className="hero-grain" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5.75rem)] w-full max-w-[1060px] grid-cols-1 content-between gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,16rem)] lg:gap-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="flex max-w-6xl flex-col justify-center">
          <motion.div
            {...motionProps}
            variants={container}
            className="mb-6 flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-3 font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-champagne md:mb-8"
          >
            <motion.span variants={revealItem} className="overflow-hidden">
              Cinematic interface atelier
            </motion.span>
            <span className="h-px w-12 bg-atelier-champagne/50" />
            <motion.span variants={revealItem} className="overflow-hidden text-atelier-stone">
              Mask / cadence / atmosphere
            </motion.span>
          </motion.div>

          <motion.h1
            id="hero-title"
            {...motionProps}
            variants={container}
            className="max-w-[10ch] font-display text-[clamp(3.25rem,12vw,4.9rem)] font-normal leading-[0.88] text-atelier-ivory md:text-[clamp(4.6rem,7.2vw,6.6rem)] md:leading-[0.84]"
          >
            {words.map((word, index) => (
              <span
                key={word}
                className="block overflow-hidden pb-3 md:pb-5"
              >
                <motion.span className="block" variants={revealItem}>
                  <span className={index === 1 ? "pl-[0.38em] italic" : ""}>
                    {word}
                  </span>
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            {...motionProps}
            variants={container}
            className="mt-4 grid max-w-4xl gap-6 md:mt-6 md:grid-cols-[minmax(17rem,31rem)_auto] md:items-end"
          >
            <motion.p
              variants={revealItem}
              className="max-w-lg text-base leading-8 text-atelier-stone md:text-[1.05rem] md:leading-8"
            >
              A dark editorial stage for kinetic typography, tactile reveals,
              and motion systems that feel composed rather than performed.
            </motion.p>

            <motion.div variants={revealItem} className="flex flex-col gap-3 sm:flex-row">
              <motion.a
                className="group relative inline-flex h-12 min-w-40 items-center justify-center overflow-hidden border border-atelier-champagne/70 px-5 font-sans text-[0.68rem] uppercase tracking-editorial text-atelier-ivory transition duration-500 ease-atelier hover:border-atelier-ivory hover:text-atelier-black focus:outline-none focus-visible:ring-2 focus-visible:ring-atelier-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-atelier-black"
                href="#motion-studies"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { y: 0 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full bg-atelier-ivory transition-transform duration-500 ease-atelier group-hover:translate-y-0"
                />
                <span className="relative">Enter Study</span>
              </motion.a>
              <motion.a
                className="group relative inline-flex h-12 min-w-40 items-center justify-center overflow-hidden border border-atelier-ivory/15 px-5 font-sans text-[0.68rem] uppercase tracking-editorial text-atelier-stone transition duration-500 ease-atelier hover:border-atelier-ivory/50 hover:text-atelier-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-atelier-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-atelier-black"
                href="mailto:hello@motionatelier.dev"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { y: 0 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-atelier-ivory/70 transition-transform duration-500 ease-atelier group-hover:scale-x-100"
                />
                <span className="relative">Commission Work</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.aside
          {...motionProps}
          variants={container}
          aria-label="Editorial motion notes"
          className="relative hidden min-h-[22rem] lg:block"
          onPointerMove={(event) => {
            if (shouldReduceMotion) {
              return;
            }

            const bounds = event.currentTarget.getBoundingClientRect();
            pointerX.set((event.clientX - bounds.left) / bounds.width);
            pointerY.set((event.clientY - bounds.top) / bounds.height);
          }}
          onPointerLeave={() => {
            pointerX.set(0.5);
            pointerY.set(0.5);
          }}
        >
          <motion.div
            variants={fadeIn}
            className="absolute right-0 top-4 w-56 border-l border-atelier-ivory/15 pl-5 xl:w-60"
            style={
              shouldReduceMotion
                ? undefined
                : {
                    rotateX,
                    rotateY,
                    transformPerspective: 900,
                  }
            }
          >
            <div className="mb-12 flex items-center justify-between font-sans text-[0.64rem] uppercase tracking-editorial text-atelier-stone">
              <span>Study no.</span>
              <span>MA-001</span>
            </div>
            <p className="font-display text-[clamp(1.35rem,1.8vw,1.65rem)] leading-tight text-atelier-ivory/90">
              Reveals should feel like a camera finding the frame.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2" aria-hidden="true">
              <motion.span
                className="h-16 border border-atelier-ivory/10 bg-atelier-ivory/[0.03]"
                animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="mt-5 h-16 border border-atelier-champagne/25 bg-atelier-champagne/[0.08]"
                animate={shouldReduceMotion ? undefined : { y: [0, 9, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="h-16 border border-atelier-ivory/10 bg-atelier-ivory/[0.03]"
                animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute bottom-14 right-14 h-[7.5rem] w-24 overflow-hidden border border-atelier-champagne/25 bg-atelier-ivory/[0.025] shadow-soft-edge xl:right-20 xl:h-36 xl:w-28"
            style={
              shouldReduceMotion
                ? undefined
                : {
                    backgroundImage: cardGlow,
                    rotateX: floatingRotateX,
                    rotateY: floatingRotateY,
                    transformPerspective: 800,
                  }
            }
            initial={shouldReduceMotion ? false : { opacity: 0, y: 34, rotate: -2 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: [0, -8, 0], rotate: -7 }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.035,
                    borderColor: "rgba(244, 239, 231, 0.32)",
                  }
            }
            transition={{ ...revealTransition, delay: 0.58 }}
          />

          <motion.div
            variants={fadeIn}
            className="absolute bottom-6 right-0 w-72 border-t border-atelier-ivory/20 pt-5 font-sans text-[0.66rem] uppercase tracking-editorial text-atelier-stone"
          >
            <p>Tempo: slow / precise / tactile</p>
          </motion.div>
        </motion.aside>

        <motion.div
          {...motionProps}
          variants={container}
          className="grid gap-5 border-t border-atelier-ivory/10 pt-5 font-sans text-[0.66rem] uppercase tracking-editorial text-atelier-stone sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:col-span-2"
        >
          <motion.div variants={revealItem} className="max-w-md">
            <span>Scroll to compose the first study</span>
            <div
              className="mt-4 h-px w-full overflow-hidden bg-atelier-ivory/10"
              aria-hidden="true"
            >
              <motion.div
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-atelier-champagne to-transparent"
                animate={shouldReduceMotion ? undefined : { x: ["-100%", "320%"] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          <motion.span variants={revealItem}>London / digital atelier / 2026</motion.span>
        </motion.div>
      </div>
    </section>
  );
}
