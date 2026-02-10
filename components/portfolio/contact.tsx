"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    value: "ramniwassharan902@gmail.com",
    href: "mailto:ramniwassharan902@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 7424891134",
    href: "tel:+917424891134",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "ramniwas-saharan",
    href: "https://www.linkedin.com/in/ramniwas-saharan",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Location",
    value: "Churu, Rajasthan, India",
    href: null,
    icon: MapPin,
  },
]

export function Contact() {
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
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>

      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {"Let's Connect"}
              </h3>
              <p className="text-xs text-muted-foreground">Open to new opportunities</p>
            </div>
          </div>
          <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below."}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = link.icon
              const Wrapper = link.href ? "a" : "div"
              const wrapperProps = link.href
                ? {
                    href: link.href,
                    ...(link.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {}),
                  }
                : {}

              return (
                <Wrapper
                  key={link.label}
                  {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                  className="group flex items-center gap-3 overflow-hidden rounded-lg border border-border p-3.5 transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="truncate text-sm text-foreground group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
