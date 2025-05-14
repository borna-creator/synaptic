import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SynapticFlow",
  description: "Get in touch with SynapticFlow or schedule a meeting to learn more about our AI voice agents.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 