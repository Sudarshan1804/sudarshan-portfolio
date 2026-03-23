import { useState } from "react";
import SectionShell from "./SectionShell";
import { contactItems } from "../data/portfolioData";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PaperPlaneIcon,
  PhoneIcon,
} from "./icons";
import { Input, SocialIcon } from "./ui";

const iconMap = {
  mail: <MailIcon />,
  phone: <PhoneIcon />,
  mapPin: <MapPinIcon />,
};

export default function ContactSection() {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailAddress = contactItems.find((item) => item.icon === "mail")?.label;
  const emailComposeLink = emailAddress
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
    : null;
  const emailIndex = contactItems.findIndex((item) => item.icon === "mail");
  const itemsBeforeLinks =
    emailIndex >= 0 ? contactItems.slice(0, emailIndex + 1) : contactItems;
  const itemsAfterLinks =
    emailIndex >= 0 ? contactItems.slice(emailIndex + 1) : [];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formEndpoint) {
      setStatus({
        type: "error",
        message:
          "Formspree is not configured yet. Add VITE_FORMSPREE_ENDPOINT to your .env file.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again in a bit.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell id="contact"  title="Get In" accent="Touch">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
        <div
          data-scroll-reveal
          data-reveal="left"
          className="scroll-reveal space-y-6"
          style={{ "--reveal-delay": "80ms" }}
        >
          <p className="theme-text-secondary max-w-4xl text-[clamp(1.1rem,1.35vw,1.45rem)] leading-[1.6]">
            Have a project in mind, an internship opportunity, or a collaboration
            idea? Feel free to reach out. I&apos;m always open to discussing new
            ideas, building meaningful products, and connecting with people who care
            about great work.
          </p>
          <div className="space-y-4 pt-1">
            {itemsBeforeLinks.map((item) => (
              <div key={item.label} className="theme-text-secondary flex items-center gap-4">
                <span className="text-mint">{iconMap[item.icon]}</span>
                {item.icon === "mail" && emailComposeLink ? (
                  <SocialIcon href={emailComposeLink} label="Email">
                    <span className="text-lg md:text-[1.35rem]">{item.label}</span>
                  </SocialIcon>
                ) : (
                  <span className="whitespace-pre-line text-lg md:text-[1.35rem]">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
            <div className="theme-text-secondary flex items-center gap-4">
              <span className="text-mint">
                <GitHubIcon />
              </span>
              <SocialIcon href="https://github.com/Sudarshan1804" label="GitHub">
                <span className="text-lg md:text-[1.35rem]">GitHub</span>
              </SocialIcon>
            </div>
            <div className="theme-text-secondary flex items-center gap-4">
              <span className="text-mint">
                <LinkedInIcon />
              </span>
              <SocialIcon
                href="https://www.linkedin.com/in/sudarshanreddy18/"
                label="LinkedIn"
              >
                <span className="text-lg md:text-[1.35rem]">LinkedIn</span>
              </SocialIcon>
            </div>
            {itemsAfterLinks.map((item) => (
              <div key={item.label} className="theme-text-secondary flex items-center gap-4">
                <span className="text-mint">{iconMap[item.icon]}</span>
                <span className="whitespace-pre-line text-lg md:text-[1.35rem]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form
          data-scroll-reveal
          data-reveal="right"
          className="scroll-reveal space-y-4"
          style={{ "--reveal-delay": "180ms" }}
          onSubmit={handleSubmit}
        >
          <Input name="name" placeholder="Your Name" required />
          <Input name="email" placeholder="Your Email" type="email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="theme-input min-h-44 w-full rounded-[1.5rem] border px-5 py-4 text-xl outline-none transition md:text-2xl"
          />
          {status.message ? (
            <p
              className={`text-sm md:text-base ${
                status.type === "success" ? "text-mint" : "text-rose-400"
              }`}
            >
              {status.message}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="theme-button-primary inline-flex items-center gap-3 rounded-[1.3rem] px-7 py-4 text-lg font-semibold transition hover:translate-y-[-2px] disabled:cursor-not-allowed disabled:opacity-70 md:text-xl"
          >
            <PaperPlaneIcon />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
