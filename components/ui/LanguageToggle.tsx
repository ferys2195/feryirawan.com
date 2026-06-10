"use client";

import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [locale, setLocale] = useState("id");

  useEffect(() => {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];
    setLocale(value || "id");
  }, []);

  const toggle = () => {
    const next = locale === "id" ? "en" : "id";
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    window.location.reload();
  };

  return (
    <button
      onClick={toggle}
      className="rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
      aria-label="Toggle language"
    >
      {locale === "id" ? "EN" : "ID"}
    </button>
  );
}
