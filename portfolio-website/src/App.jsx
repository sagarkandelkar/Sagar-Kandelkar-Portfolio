import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Projects from './components/Projects'
import Deliverables from './components/Deliverables'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Capabilities />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedCaseStudy />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <CaseStudies />
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Deliverables />
      </ScrollReveal>
      <ScrollReveal>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
