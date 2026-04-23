"use client"

import { useEffect, useRef, useState } from "react"
import {
  Target,
  Filter,
  Smartphone,
  Users,
  Briefcase,
  Building2,
  GraduationCap,
  Palette,
  AlertCircle,
  Lightbulb,
  Zap,
  BarChart3,
  User,
  Rocket,
  Instagram,
  MessageCircle,
  Mail,
  ChevronRight,
  Star,
  TrendingUp,
  Menu,
  X,
} from "lucide-react"

// Custom hook for scroll animations using IntersectionObserver
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "System", href: "#system" },
    { name: "Insights", href: "#insights" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-[#D4AF37]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 text-2xl font-bold">
            <span className="gold-gradient-text">A</span>
            <span className="text-foreground">dVanta</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border/50 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-[#D4AF37] transition-colors px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] font-semibold rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm tracking-widest mb-8">
            System. Strategy. Scale.
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Help Service Businesses Get{" "}
            <span className="gold-gradient-text">Consistent High-Quality Clients.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Through result-driven ads, smart funnels & high-converting lead systems.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] font-bold rounded-lg gold-glow hover:scale-105 transition-transform flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#system"
              className="px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </AnimatedSection>

        {/* Decorative line */}
        <AnimatedSection delay={500}>
          <div className="mt-20 flex items-center justify-center gap-4 text-muted-foreground text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span>Trusted by 50+ Service Businesses</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Target Audience Section
function TargetAudienceSection() {
  const audiences = [
    { icon: Users, title: "Coaches & Consultants" },
    { icon: Building2, title: "Clinics & Healthcare" },
    { icon: Briefcase, title: "Local Businesses" },
    { icon: GraduationCap, title: "Course Creators" },
    { icon: Palette, title: "Agencies & Freelancers" },
  ]

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Built for <span className="gold-gradient-text">Service-Based Businesses</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We specialize in helping service providers scale with predictable, high-quality lead generation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {audiences.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="group gold-border p-6 rounded-2xl hover:gold-glow transition-all duration-300 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="text-[#D4AF37]" size={28} />
                </div>
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// 3-Step System Section
function SystemSection() {
  const steps = [
    {
      step: "01",
      title: "Attract The Right People",
      description: "We run targeted ads that bring quality traffic—people who actually need your service.",
      features: ["Targeted ads", "Quality traffic", "Higher ROI"],
      icon: Target,
    },
    {
      step: "02",
      title: "Convert With A Smart Funnel",
      description: "Your leads go through an optimized funnel with automated follow-up that converts.",
      features: ["Higher conversions", "Automated follow-up", "More revenue"],
      icon: Filter,
    },
    {
      step: "03",
      title: "Close More Leads. More Clients.",
      description: "Instant follow-up systems qualify and nurture leads so you close more deals.",
      features: ["Instant follow-up", "Qualify & nurture", "Close more deals"],
      icon: Smartphone,
    },
  ]

  return (
    <section id="system" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="block text-[#D4AF37] text-sm tracking-widest text-center mb-4">THE ADVANTA SYSTEM</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Your <span className="gold-gradient-text">3-Step Growth System</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A proven framework that turns strangers into paying clients—on autopilot.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 150}>
              <div className="relative group">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent z-0" />
                )}

                <div className="relative gold-border rounded-2xl p-8 bg-[#0a0a0a] hover:gold-glow transition-all duration-300 h-full">
                  <span className="text-6xl font-bold text-[#D4AF37]/20 absolute top-4 right-6">{step.step}</span>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6">
                    <step.icon className="text-[#D4AF37]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#D4AF37]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Insights Section
function InsightsSection() {
  const insights = [
    {
      type: "Common Mistake",
      title: "Why most businesses fail to get leads",
      points: ["No funnel", "Wrong ads", "No follow-up"],
      icon: AlertCircle,
      highlight: false,
    },
    {
      type: "Quick Tip",
      title: "Want more leads? Fix this.",
      points: ["Offer clarity", "Landing page", "Speed of response"],
      icon: Lightbulb,
      highlight: false,
    },
    {
      type: "Myth Busting",
      title: "Ads don't fail. Your system does.",
      points: ["Ads ≠ magic", "System matters", "Strategy is key"],
      icon: Zap,
      highlight: false,
    },
    {
      type: "Case Study",
      title: "How we can generate 50+ leads/month",
      points: ["Proven strategy", "Optimized funnel", "Expected outcome"],
      icon: BarChart3,
      highlight: false,
    },
    {
      type: "Founder Intro",
      title: "Meet the mind behind AdVanta",
      points: ["Our story", "Why we started", "Our goal"],
      icon: User,
      highlight: false,
    },
    {
      type: "Special Offer",
      title: "Looking for 3 businesses to scale this month",
      points: ["What we offer", "What you get", "Limited spots"],
      icon: Rocket,
      highlight: true,
    },
  ]

  return (
    <section id="insights" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="block text-[#D4AF37] text-sm tracking-widest text-center mb-4">INSIGHTS & CONTENT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Learn From <span className="gold-gradient-text">Our Expertise</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Free insights to help you understand what it takes to scale your business.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <AnimatedSection key={insight.title} delay={index * 100}>
              <div
                className={`rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] ${
                  insight.highlight
                    ? "bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border-2 border-[#D4AF37] gold-glow"
                    : "gold-border bg-[#0a0a0a] hover:gold-glow"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      insight.highlight ? "bg-[#D4AF37] text-[#050505]" : "bg-[#D4AF37]/10 text-[#D4AF37]"
                    }`}
                  >
                    <insight.icon size={20} />
                  </div>
                  <span className={`text-xs font-semibold tracking-wider ${insight.highlight ? "text-[#D4AF37]" : "text-[#D4AF37]/70"}`}>
                    {insight.type.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-4 text-foreground">{insight.title}</h3>
                <ul className="space-y-2">
                  {insight.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="text-[#D4AF37]" size={14} />
                      {point}
                    </li>
                  ))}
                </ul>
                {insight.highlight && (
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Apply Now <ChevronRight size={18} />
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Portfolio Section
function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="block text-[#D4AF37] text-sm tracking-widest text-center mb-4">PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gold-gradient-text">Proven Results</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="gold-border rounded-3xl p-8 md:p-12 bg-[#0a0a0a] gold-glow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Stats side */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Star className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                  <span className="text-[#D4AF37] font-semibold">Featured Case Study</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Instagram Growth: <span className="gold-gradient-text">1K → 25K</span>
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We grew an Instagram page in the anime niche from 1,000 to 25,000 followers, 
                  leading to consistent sales and lucrative Instagram promotion opportunities.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="gold-border rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold gold-gradient-text">25K+</div>
                    <div className="text-sm text-muted-foreground">Followers Gained</div>
                  </div>
                  <div className="gold-border rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold gold-gradient-text">2400%</div>
                    <div className="text-sm text-muted-foreground">Growth Rate</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm">Anime Niche</span>
                  <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm">Instagram Growth</span>
                  <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm">Consistent Sales</span>
                </div>
              </div>

              {/* Visual side */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="text-[#D4AF37] mx-auto mb-4" size={64} />
                    <div className="text-5xl md:text-6xl font-bold gold-gradient-text mb-2">25x</div>
                    <div className="text-muted-foreground">Growth Achieved</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Instagram className="text-[#D4AF37]" size={32} />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  const tiers = [
    {
      name: "Basic",
      price: "₹3,999",
      period: "/month",
      features: ["Basic page restructuring", "2 stories per week", "1 reel per week", "Email support"],
      popular: false,
    },
    {
      name: "Growth",
      price: "₹5,999",
      period: "/month",
      features: [
        "Full page restructuring",
        "3 stories per week",
        "2 reels per week",
        "Client acquisition strategy",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Complete",
      price: "₹9,999",
      period: "/month",
      features: [
        "Complete page management",
        "2 stories & 2 reels every week",
        "Full client & customer handling",
        "Dedicated account manager",
        "24/7 support",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="block text-[#D4AF37] text-sm tracking-widest text-center mb-4">PRICING</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Simple, <span className="gold-gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Choose the plan that fits your business goals. All plans include our proven growth strategies.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <AnimatedSection key={tier.name} delay={index * 150}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  tier.popular
                    ? "bg-gradient-to-b from-[#D4AF37]/20 to-[#0a0a0a] border-2 border-[#D4AF37] gold-glow"
                    : "gold-border bg-[#0a0a0a]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold gold-gradient-text">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-[#D4AF37]" size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://instagram.com/advantaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] hover:opacity-90"
                      : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  }`}
                >
                  <Instagram size={18} />
                  Contact via Instagram
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer / Contact Section
function FooterSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Ready to <span className="gold-gradient-text">Scale?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {"Let's"} discuss how we can help you get consistent, high-quality clients for your service business.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://instagram.com/advantaco"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#050505] font-bold rounded-lg gold-glow hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <Instagram size={22} />
              DM us on Instagram
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 gold-border text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-3"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:contact@advanta.com"
              className="w-full sm:w-auto px-8 py-4 gold-border text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-3"
            >
              <Mail size={22} />
              Email Us
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <a href="#" className="flex items-center gap-1 text-xl font-bold">
                <span className="gold-gradient-text">A</span>
                <span className="text-foreground">dVanta</span>
              </a>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} AdVanta Growth Agency. All rights reserved.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function AdVantaLanding() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navigation />
      <HeroSection />
      <TargetAudienceSection />
      <SystemSection />
      <InsightsSection />
      <PortfolioSection />
      <PricingSection />
      <FooterSection />
    </main>
  )
}
