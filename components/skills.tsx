export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Inertia.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Laravel', 'REST API Development'],
    },
    {
      title: 'Database',
      skills: ['MySQL', 'Relational Database Design'],
    },
    {
      title: 'Tools & Environment',
      skills: ['Git', 'Linux Server', 'Nginx'],
    },
  ]

  return (
    <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Tech Stack</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Teknologi yang saya gunakan sehari-hari.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <h3 className="mb-4 font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
