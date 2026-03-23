import { useState } from "react";
import { navItems } from "../data/portfolioData";
import { MoonIcon, SunIcon } from "./icons";

export default function Header({ activeSection, onNavigate, theme, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.setTimeout(() => {
      onNavigate(sectionId);
    }, 0);
  };

  return (
    <header
      id="site-header"
      className="theme-header sticky top-0 z-50 border-b backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="font-mono text-xl font-bold text-mint md:text-2xl"
        >
          {"Sudarshan."}
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(event) => handleNavClick(event, item.toLowerCase())}
              className={`theme-nav-link text-lg font-medium transition xl:text-xl ${
                activeSection === item.toLowerCase()
                  ? "theme-nav-link-active"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Theme toggle"
            onClick={onThemeToggle}
            className="theme-toggle rounded-full border p-2 transition"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="theme-menu-button rounded-full border p-2 transition md:hidden"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`theme-mobile-menu overflow-hidden border-t transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1920px] flex-col px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(event) => handleNavClick(event, item.toLowerCase())}
              className={`theme-mobile-link border-b py-4 text-base font-medium transition last:border-b-0 ${
                activeSection === item.toLowerCase()
                  ? "theme-mobile-link-active"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
