"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Code2, Palette, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 90 },
      { name: "Android", level: 75 },
      { name: "iOS", level: 70 },
    ],
  },
  {
    title: "Programming & Tools",
    icon: Code2,
    skills: [
      { name: "Kotlin", level: 65 },
      { name: "SwiftUI", level: 60 },
      { name: "Firebase", level: 80 },
      { name: "Git", level: 85 },
    ],
  },
  {
    title: "Web & Design",
    icon: Palette,
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "UI/UX Design", level: 75 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Teamwork", level: 95 },
      { name: "Leadership", level: 85 },
      { name: "Clean Coding", level: 90 },
      { name: "Problem Solving", level: 85 },
    ],
  },
]

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary/80 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
        <div
          className="absolute inset-y-0 left-0 h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : "0%",
            opacity: 0.4,
            filter: "blur(4px)",
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <div
              key={category.title}
              className={`group rounded-lg border border-border bg-card p-5 transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(166_72%_52%/0.05)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={isVisible}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
