import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Proyek - Fery Irawan Portfolio',
  description: 'Koleksi proyek dan pengalaman kerja Fery Irawan sebagai Frontend Developer',
}

const allProjects = [
  {
    id: 1,
    name: 'Web Ruang PPID',
    category: 'Government',
    organization: 'Disdukcapil Provinsi Kalimantan Tengah',
    period: 'Sep 2025 – Nov 2025',
    description: 'Platform layanan informasi publik untuk mendukung transparansi pemerintahan.',
    highlights: [
      'Membangun platform layanan informasi publik menggunakan teknologi modern',
      'Mengimplementasikan fitur backend untuk manajemen konten dan informasi publik',
    ],
    tech: ['Laravel', 'MySQL', 'Inertia.js', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'School Management System',
    category: 'Education',
    organization: 'SDIT Imam Syafii Sampit',
    period: 'Mar 2025 – Jul 2025',
    description: 'Sistem manajemen sekolah untuk penempatan siswa dan administrasi akademik.',
    highlights: [
      'Mengembangkan sistem manajemen sekolah untuk penempatan siswa dan administrasi akademik',
      'Merancang struktur relational database untuk pengelolaan data akademik',
    ],
    tech: ['Laravel', 'MySQL', 'Inertia.js', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 3,
    name: 'REST API & Government Web System',
    category: 'Government',
    organization: 'Disdukcapil Provinsi Kalimantan Tengah',
    period: 'Apr 2023 – Jun 2023',
    description: 'Layanan REST API untuk mendukung aplikasi administratif pemerintahan.',
    highlights: [
      'Membangun layanan REST API untuk mendukung aplikasi administratif pemerintahan',
      'Mengembangkan backend services untuk pertukaran data antar sistem pemerintahan',
    ],
    tech: ['Laravel', 'REST API', 'MySQL'],
  },
  {
    id: 4,
    name: 'Queue Management REST API',
    category: 'Government',
    organization: 'DPMPTSP Kabupaten Kotawaringin Timur',
    period: 'Sep 2022 – Dec 2022',
    description: 'Layanan REST API untuk sistem manajemen antrian pelayanan publik.',
    highlights: [
      'Membangun layanan REST API untuk sistem manajemen antrian pengunjung',
      'Mengembangkan backend services untuk menangani antrian permintaan layanan publik',
    ],
    tech: ['Laravel', 'REST API', 'MySQL'],
  },
  {
    id: 5,
    name: 'Public Information Web Portals (Rebuild)',
    category: 'Government',
    organization: 'DPMPTSP Kabupaten Kotawaringin Timur',
    period: 'Jan 2022 – May 2022',
    description: 'Membangun ulang website layanan pemerintahan menggunakan framework Laravel.',
    highlights: [
      'Membangun ulang website layanan pemerintahan menggunakan framework Laravel',
      'Mengimplementasikan modul administrasi untuk perizinan dan manajemen layanan',
    ],
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    id: 6,
    name: 'Public Information Web Portals',
    category: 'Government',
    organization: 'DPMPTSP Kabupaten Kotawaringin Timur',
    period: 'Sep 2019 – Dec 2019',
    description: 'Web portal layanan publik dengan framework Codeigniter.',
    highlights: [
      'Membangun web portal layanan publik menggunakan framework Codeigniter',
      'Mengimplementasikan fitur portal yang memudahkan akses informasi publik',
    ],
    tech: ['Codeigniter 3', 'MySQL', 'Bootstrap'],
  },
  {
    id: 7,
    name: 'Customs Administration System',
    category: 'Internal System',
    organization: 'KPPBC TMP C Sampit',
    period: 'Mar 2018 – May 2018',
    description: 'Sistem administrasi internal untuk operasi bea cukai.',
    highlights: [
      'Mengembangkan sistem administrasi internal untuk kantor bea cukai',
      'Membangun fitur-fitur untuk pengelolaan dokumen dan administrasi',
    ],
    tech: ['PHP Native', 'MySQL', 'CSS'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Proyek</h1>
              <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
                Kumpulan proyek yang saya kerjakan, mulai dari sistem layanan pemerintahan, manajemen sekolah, hingga REST API untuk aplikasi internal.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
                >
                  <div className="mb-4 space-y-2">
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{project.name}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.organization}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">{project.period}</p>
                  </div>

                  <p className="mb-4 flex-grow text-sm text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>

                  <ul className="mb-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-neutral-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
