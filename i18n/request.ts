import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !["en", "id"].includes(locale)) {
    const cookieStore = await cookies();
    locale = cookieStore.get("NEXT_LOCALE")?.value || "id";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
