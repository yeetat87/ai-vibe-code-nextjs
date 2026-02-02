'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoBar from '@/components/LogoBar'
import SectionIntro from '@/components/SectionIntro'
import FeatureTools from '@/components/FeatureTools'
import FeaturePrompts from '@/components/FeaturePrompts'
import FeatureIntel from '@/components/FeatureIntel'
import FeatureWorkflows from '@/components/FeatureWorkflows'
import FeatureBreakdowns from '@/components/FeatureBreakdowns'
import Testimonial from '@/components/Testimonial'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow-bg glow-1"></div>
        <div className="glow-bg glow-2"></div>
        <div className="glow-bg glow-3"></div>
        <div className="absolute inset-0 grid-bg"></div>
      </div>

      <ScrollToTop />

      {/* Main Content */}
      <main className="relative z-10">
        <Navbar />
        <LogoBar />
        <Hero />
        <SectionIntro />
        <FeatureTools />
        <div className="section-divider max-w-4xl mx-auto"></div>
        <FeaturePrompts />
        <div className="section-divider max-w-4xl mx-auto"></div>
        <FeatureIntel />
        <div className="section-divider max-w-4xl mx-auto"></div>
        <FeatureWorkflows />
        <div className="section-divider max-w-4xl mx-auto"></div>
        <FeatureBreakdowns />
        <Testimonial />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
