import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Our Team | Freelance Tax Calculator Suite",
  description:
    "Reach out with questions about our tax calculation models, feedback on the calculator interface, or suggestions for new niche tools. We respond within 24–48 hours.",
  alternates: {
    canonical: "https://www.freelancecalcsuite.online/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
