import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const HEADER_OFFSET = 110;
const THEME_STORAGE_KEY = "portfolio-theme";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem(THEME_STORAGE_KEY) ?? "dark";
  });

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-22% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll("[data-scroll-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            window.setTimeout(() => {
              entry.target.classList.add("reveal-complete");
            }, 820);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handleSectionNavigation = (eventOrSectionId, maybeSectionId) => {
    const sectionId =
      typeof eventOrSectionId === "string" ? eventOrSectionId : maybeSectionId;

    if (typeof eventOrSectionId !== "string") {
      eventOrSectionId.preventDefault();
    }

    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const headerOffset =
      document.getElementById("site-header")?.offsetHeight ?? HEADER_OFFSET;
    const content = section.querySelector("[data-section-content]") ?? section;
    const contentRect = content.getBoundingClientRect();
    const absoluteContentTop = window.scrollY + contentRect.top;
    const availableHeight = window.innerHeight - headerOffset;
    const isMobile = window.innerWidth < 768;

    let targetTop = absoluteContentTop - headerOffset;

    if (!isMobile && contentRect.height < availableHeight) {
      const extraSpace = availableHeight - contentRect.height;
      targetTop = absoluteContentTop - headerOffset - extraSpace / 2;
    }

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="site-shell min-h-screen">
      <div className="site-backdrop fixed inset-0 -z-10" />
      <div className="site-backdrop-glow fixed inset-y-0 left-1/2 -z-10 hidden w-[38rem] -translate-x-1/2 blur-3xl md:block" />
      <Header
        activeSection={activeSection}
        onNavigate={handleSectionNavigation}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <main>
        <HeroSection onNavigate={handleSectionNavigation} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
