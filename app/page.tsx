import Header from '@/components/header'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
