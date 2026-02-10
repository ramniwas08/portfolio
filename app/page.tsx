import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Spotlight } from "@/components/portfolio/spotlight"

export default function Home() {
  return (
    <div className="relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Certifications />
            <Contact />
            <footer className="pb-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Designed by{" "}
                <span className="font-medium text-foreground">Ramniwas Saharan</span>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
