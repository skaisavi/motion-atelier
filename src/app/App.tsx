import { Layout } from "@/components/layout/Layout";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Hero } from "@/components/sections/Hero";
import { InteractiveGallery } from "@/components/sections/InteractiveGallery";
import { MotionPrinciples } from "@/components/sections/MotionPrinciples";
import { ScrollStorytelling } from "@/components/sections/ScrollStorytelling";

export function App() {
  return (
    <Layout>
      <Hero />
      <MotionPrinciples />
      <InteractiveGallery />
      <ScrollStorytelling />
      <ClosingCta />
    </Layout>
  );
}
