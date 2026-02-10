"use client"

import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink, BadgeCheck } from "lucide-react"

const certifications = [
  {
    title: "Advanced Kotlin Database Development",
    issuer: "LinkedIn Learning",
    description:
      "In-depth knowledge of Kotlin for database operations and advanced data management patterns.",
    url: "https://www.linkedin.com/learning/certificates/fc1ad9cfbaead335398f48f47c877848ad7efde7bfef231d5e0b0850dddbf020",
  },
  {
    title: "Complete Guide to SwiftUI",
    issuer: "LinkedIn Learning",
    description:
      "Comprehensive understanding of SwiftUI framework for building native iOS applications with modern declarative syntax.",
    url: "https://www.linkedin.com/learning/certificates/3c87f38104bf3d02bf16b389253b4ea0b8db644270e38a668977e26145163d80",
  },
  {
    title: "Flutter Essential Training: Build for Multiple Platforms",
    issuer: "LinkedIn Learning",
    description:
      "Expert-level Flutter skills for creating production-ready applications across Android, iOS, web, and desktop.",
    url: "https://www.linkedin.com/learning/certificates/2bf6188a1d88215ce7312154e115f70e3226d9fc74e0133f2e34063c459e169c",
  },
  {
    title: "Dart Clean Code: Writing High-Efficiency, Maintainable Dart Programs",
    issuer: "LinkedIn Learning",
    description:
      "Best practices for writing clean, efficient, and maintainable Dart code following industry standards.",
    url: "https://www.linkedin.com/learning/certificates/8cebcd74b14486fac50864fdbb3f68a2ebda99b6349f7c3a8456b47b53527436",
  },
  {
    title: "Google Play Academy - Store Listing Certificate",
    issuer: "Google",
    description:
      "Certified in creating optimized Google Play Store listings for maximum visibility and conversion.",
    url: "https://www.credential.net/02b360ea-8a33-4388-a1c4-a47e1dc60d05",
  },
]

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Certifications
        </h2>
      </div>
      <div>
        <ol className="group/list space-y-4">
          {certifications.map((cert, index) => (
            <li
              key={cert.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(166_72%_52%/0.05)]"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {cert.issuer === "Google" ? (
                      <BadgeCheck className="h-5 w-5" />
                    ) : (
                      <Award className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors text-balance">
                      {cert.title}
                    </h3>
                    <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-primary/70">{cert.issuer}</p>
                  <p className="mt-1 text-sm leading-normal text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
