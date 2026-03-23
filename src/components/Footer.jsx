import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { contactItems } from "../data/portfolioData";
import { SocialIcon } from "./ui";

export default function Footer() {
  const emailAddress = contactItems.find((item) => item.icon === "mail")?.label;
  const emailComposeLink = emailAddress
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
    : null;

  return (
    <footer className="theme-footer border-t">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-8 px-6 py-10 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        <p className="theme-text-secondary text-lg font-medium tracking-[0.02em] md:text-xl">
          <span className=" mr-1.5 text-xl font-semibold md:text-2xl">@</span>
          2026 Sudarshan. All rights reserved.
        </p>
        <div className="theme-icon-row flex items-center gap-8">
          <SocialIcon
            href="https://github.com/Sudarshan1804" 
            label="GitHub footer link"
          >
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/sudarshanreddy18/"
            label="LinkedIn footer link"
          >
            <LinkedInIcon />
          </SocialIcon>
          {emailComposeLink ? (
            <SocialIcon href={emailComposeLink} label="Email footer link">
              <MailIcon />
            </SocialIcon>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
