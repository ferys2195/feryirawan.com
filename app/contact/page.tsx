import { ContactInfo } from "@/features/contact";
import { fetcher } from "@/lib/fetcher";
import type { ContactInfo as ContactInfoType } from "@/types";

export const metadata = {
  title: "Kontak - Fery Irawan Portfolio",
  description:
    "Hubungi Fery Irawan untuk diskusi proyek atau peluang kolaborasi",
};

export default async function ContactPage() {
  const { contactInfo } = await fetcher<{ contactInfo: ContactInfoType }>(
    "/contact.json",
  );

  return <ContactInfo contactInfo={contactInfo} />;
}
