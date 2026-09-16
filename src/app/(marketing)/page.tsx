import AboutSection from "./_components/about-section"
import Projects from "./_components/projects-section"
import HeroSection from "./_components/hero-section"
import SVGSection from "./_components/svg-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SVGSection />
      <Projects />
    </>
  )
}
