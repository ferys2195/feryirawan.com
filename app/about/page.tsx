import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Tentang - Fery Irawan Portfolio',
  description: 'Pelajari lebih lanjut tentang Fery Irawan, Frontend Developer dengan pengalaman 4+ tahun',
}

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Tentang Saya</h1>
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-950">
          <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Perjalanan Karir</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Saya adalah seorang Frontend Developer dengan pengalaman lebih dari 4 tahun di industri teknologi. Perjalanan saya dimulai sebagai full-stack developer dengan fokus pada backend menggunakan Laravel, namun saat ini saya telah mengkhususkan diri dalam pengembangan frontend menggunakan React.js dan Next.js.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Keahlian</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Saya memiliki keahlian mendalam dalam membangun antarmuka web yang responsif dan modern. Dengan latar belakang backend yang kuat, saya memahami arsitektur API dan dapat berkolaborasi dengan baik dengan backend developers. Saya terbiasa bekerja dengan teknologi terkini seperti React.js, Next.js, TypeScript, dan Tailwind CSS.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Pengalaman Profesional</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-neutral-300 pl-6 dark:border-neutral-700">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Full-Stack Developer</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">2018 - Sekarang</p>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                      Mengembangkan berbagai aplikasi web untuk klien pemerintahan dan pendidikan. Menangani proyek dari pembuatan sistem manajemen sekolah, platform informasi publik, hingga REST API untuk aplikasi administratif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Metodologi Kerja</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Saya percaya pada pentingnya komunikasi yang jelas dengan klien dan tim. Saya bekerja dengan metodologi agile, memberikan update secara berkala dan selalu terbuka untuk feedback. Saya juga percaya pada clean code dan dokumentasi yang baik untuk memudahkan maintenance di masa depan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Hobi & Minat</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Di luar pekerjaan, saya senang belajar tentang teknologi baru dan tren terbaru dalam web development. Saya aktif mengikuti komunitas developer dan tidak jarang berbagi pengetahuan dengan rekan-rekan sesama developer. Saya juga gemar mengikuti tutorial dan membaca dokumentasi untuk terus meningkatkan skill.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
