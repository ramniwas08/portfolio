"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Apps Delivered", value: "20+" },
  { label: "Certifications", value: "5" },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div
        className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p>
          I am a passionate{" "}
          <span className="text-foreground font-medium">Flutter Developer</span>{" "}
          currently working at{" "}
          <a
            href="#experience"
            className="font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            Axis Web Art Private Limited
          </a>
          , where I focus on building cross-platform mobile applications that
          deliver seamless user experiences. With over{" "}
          <span className="text-foreground font-medium">5 years of experience</span>{" "}
          in the industry, I have honed my skills in mobile development, web
          design, and clean coding practices.
        </p>
        <p>
          My journey started as a{" "}
          <span className="text-foreground font-medium">Web Designer</span>,
          which gave me a strong foundation in UI/UX principles. I then
          transitioned into{" "}
          <span className="text-foreground font-medium">Flutter development</span>,
          combining my design sensibilities with technical expertise to create
          beautiful, performant apps for both Android and iOS platforms.
        </p>
        <p>
          I hold a{" "}
          <span className="text-foreground font-medium">Bachelor of Arts</span>{" "}
          from Govt. Lohia College, and I continuously expand my knowledge
          through professional certifications in{" "}
          <span className="text-foreground font-medium">
            Kotlin, SwiftUI, Dart, and Flutter
          </span>
          . I believe in writing clean, maintainable code and collaborating
          effectively with teams to deliver high-quality solutions.
        </p>
      </div>

      <div
        className={`mt-8 grid grid-cols-3 gap-4 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-lg border border-border bg-card p-4 text-center transition-all hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
