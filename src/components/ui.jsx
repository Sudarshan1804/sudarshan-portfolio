export function SocialIcon({ href, label, children }) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      aria-label={label}
      className="theme-social-link transition hover:text-mint"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
    >
      {children}
    </a>
  );
}

export function Input({ placeholder, type = "text", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="theme-input h-16 w-full rounded-[1.3rem] border px-5 text-lg outline-none transition md:h-18 md:text-xl"
      {...props}
    />
  );
}
