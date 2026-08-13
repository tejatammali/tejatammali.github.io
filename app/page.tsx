import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StackStrip from "@/components/StackStrip";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FlowRail from "@/components/FlowRail";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <FlowRail
          label="init"
          className="text-heading bg-gradient-to-b from-white to-[#2a2d34] dark:from-[#0f1117] dark:to-[#0d1117]"
        />
        <StackStrip />
        <FlowRail
          label="discover"
          className="text-white bg-gradient-to-b from-[#2a2d34] to-[#F0F0F0] dark:from-[#0d1117] dark:to-[#111827]"
        />
        <AboutSection />
        <FlowRail
          label="build"
          className="text-heading bg-gradient-to-b from-[#F0F0F0] to-white dark:from-[#111827] dark:to-[#0f1117]"
        />
        <ExperienceSection />
        <FlowRail
          label="deploy"
          className="text-heading bg-gradient-to-b from-white to-[#F0F0F0] dark:from-[#0f1117] dark:to-[#111827]"
        />
        <ProjectsSection />
        <FlowRail
          label="scale"
          className="text-heading bg-gradient-to-b from-[#F0F0F0] to-white dark:from-[#111827] dark:to-[#0f1117]"
        />
        <SkillsSection />
        <FlowRail
          label="verify"
          className="text-heading bg-gradient-to-b from-white to-[#474d5a] dark:from-[#0f1117] dark:to-[#0d1117]"
        />
        <EducationSection />
        <FlowRail
          label="notify"
          className="text-white bg-gradient-to-b from-[#474d5a] to-[#2a2d34] dark:from-[#0d1117] dark:to-[#0d1117]"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
