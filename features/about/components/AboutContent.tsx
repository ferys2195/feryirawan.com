import { useTranslations } from "next-intl";

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {t("career")}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {t("careerDesc")}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {t("skills")}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {t("skillsDesc")}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {t("experience")}
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-neutral-300 pl-6 dark:border-neutral-700">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {t("experienceTitle")}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t("experiencePeriod")}
                  </p>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    {t("experienceDesc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {t("methodology")}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {t("methodologyDesc")}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {t("hobbies")}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {t("hobbiesDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
