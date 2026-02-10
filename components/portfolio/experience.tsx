"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2021 - PRESENT",
    title: "Flutter Developer",
    company: "Axis Web Art Private Limited",
    location: "Jaipur, Rajasthan, India",
    description:
      "Building cross-platform mobile applications using Flutter and Dart. Leading development efforts with a focus on clean architecture, performance optimization, and seamless user experiences across Android and iOS platforms.",
    skills: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "Firebase", "Git"],
    current: true,
  },
  {
    period: "JAN 2021 - SEP 2021",
    title: "Flutter Developer",
    company: "Vast Web India Pvt. Ltd.",
    location: "Sikar, Rajasthan, India",
    description:
      "Developed and maintained multiple Flutter applications, collaborating with cross-functional teams to deliver high-quality mobile solutions. Implemented state management patterns and integrated third-party services.",
    skills: ["Flutter", "Dart", "State Management", "API Integration", "Mobile UI"],
    current: false,
  },
  {
    period: "NOV 2019 - JAN 2021",
    title: "Web Designer",
    company: "Axis Web Art Private Limited",
    location: "Jaipur, Rajasthan, India",
    description:
      "Designed and developed responsive websites with a focus on user experience and visual aesthetics. Created wireframes, prototypes, and final designs, building a strong foundation in UI/UX principles.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Responsive Design"],
    current: false,
  },
]

export function Experience() {
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
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-border lg:block" />

        <ol className="group/list space-y-10">
          {experiences.map((exp, index) => (
            <li
              key={exp.period}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  <div className="flex items-center gap-3">
                    {/* Timeline dot */}
                    <div className="relative hidden lg:block">
                      <div
                        className={`h-[10px] w-[10px] rounded-full border-2 ${
                          exp.current
                            ? "border-primary bg-primary shadow-[0_0_8px_hsl(166_72%_52%/0.5)]"
                            : "border-muted-foreground/40 bg-background"
                        }`}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="flex h-4 items-center rounded bg-primary/10 px-1.5 text-[10px] font-bold text-primary">
                          NOW
                        </span>
                      )}
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title}{" "}
                          <span className="text-muted-foreground font-normal">at</span>{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                      <Briefcase className="h-3 w-3" />
                      {exp.location}
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul
                    className="mt-3 flex flex-wrap gap-1.5"
                    aria-label="Technologies used"
                  >
                    {exp.skills.map((skill) => (
                      <li key={skill}>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
