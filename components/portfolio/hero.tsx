"use client"

import { useState, useEffect, useRef } from "react"
import { Linkedin, Mail, Phone, MapPin, Download, ChevronRight } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
]

const roles = [
  "Flutter Developer",
  "Mobile App Architect",
  "Cross-Platform Expert",
  "Clean Code Advocate",
]

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting && text === currentWord) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          )
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export function Hero() {
  const [activeSection, setActiveSection] = useState("about")
  const typedText = useTypingEffect(roles)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px" }
    )

    for (const item of navItems) {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium text-primary">Available for work</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <a href="/" className="hover:text-primary transition-colors">Ramniwas Saharan</a>
        </h1>

        <h2 className="mt-3 flex items-center gap-1 text-lg font-medium tracking-tight text-primary sm:text-xl">
          <ChevronRight className="h-5 w-5" />
          <span>{typedText}</span>
          <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary" />
        </h2>

        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build seamless, user-centric cross-platform mobile applications with clean code and pixel-perfect attention to detail.
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Sardarshahar, Rajasthan, India</span>
        </div>

        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground font-mono">
          <span className="rounded border border-border bg-secondary/50 px-2 py-1">5+ yrs exp</span>
          <span className="rounded border border-border bg-secondary/50 px-2 py-1">Flutter</span>
          <span className="rounded border border-border bg-secondary/50 px-2 py-1">Dart</span>
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "")
              const isActive = activeSection === sectionId
              return (
                <li key={item.href}>
                  <a
                    className="group flex items-center py-3"
                    href={item.href}
                  >
                    <span
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary ${
                        isActive
                          ? "w-16 bg-primary"
                          : "w-8 bg-muted-foreground/50"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-primary group-focus-visible:text-primary ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-4" aria-label="Social media">
        <li>
          <a
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
            href="https://www.linkedin.com/in/ramniwas-saharan"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
            href="mailto:ramniwassharan902@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
            href="tel:+917424891134"
            aria-label="Phone"
          >
            <Phone className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            href="#contact"
            aria-label="Download Resume"
          >
            <Download className="h-4 w-4" />
          </a>
        </li>
      </ul>
    </header>
  )
}
