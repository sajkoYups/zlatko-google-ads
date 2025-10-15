"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Users, BookOpen, Heart, Star, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Header } from "../(marketing)/components/Header"
import { Footer } from "../(marketing)/components/Footer"
import landingContent from "../../content/landing.json"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        logo={landingContent.site.logo}
        nav={landingContent.nav}
        primaryCta={landingContent.site.primaryCta}
      />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">About Zlatko Mateski</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6">
                Your Personal Google Ads Instructor
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                With over 8 years of experience teaching digital marketing at Brainster and specialized training for seniors, 
                I bring a unique approach to Google Ads education that combines technical expertise with patient, 
                personalized instruction.
              </p>
            </div>
          </div>
        </section>

        {/* About Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                    From Brainster to Personal Training
                  </h2>
                  <div className="space-y-6 text-slate-600">
                    <p>
                      My journey in digital marketing education began at Brainster, where I spent 6 years developing 
                      and teaching comprehensive digital marketing programs. During this time, I discovered my passion 
                      for working with learners of all ages, particularly seniors who were eager to embrace digital 
                      marketing but needed extra support and patience.
                    </p>
                    <p>
                      At Brainster, I taught over 500 students across various age groups, but it was my work with 
                      senior learners that truly shaped my teaching philosophy. I learned that effective digital 
                      marketing education isn&apos;t just about technical skills—it&apos;s about building confidence, 
                      providing clear explanations, and creating a supportive learning environment.
                    </p>
                    <p>
                      This experience led me to specialize in Google Ads training, where I could combine my technical 
                      expertise with my passion for helping learners succeed, regardless of their starting point.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about-hero.jpg"
                      alt="Zlatko Mateski teaching at Brainster"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Stats */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
                Teaching Experience & Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-sky-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">500+</h3>
                    <p className="text-slate-600">Students Taught at Brainster</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">6</h3>
                    <p className="text-slate-600">Years at Brainster</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">150+</h3>
                    <p className="text-slate-600">Senior Learners Helped</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Approach */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about-seniors.jpg"
                      alt="Zlatko teaching seniors digital marketing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                    Specialized Training for Seniors
                  </h2>
                  <div className="space-y-6 text-slate-600">
                    <p>
                      One of my greatest achievements at Brainster was developing specialized programs for senior 
                      learners. I recognized that traditional digital marketing education often moves too quickly 
                      for learners who are new to technology, so I created a patient, step-by-step approach.
                    </p>
                    <p>
                      My senior-focused training emphasizes:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Clear, jargon-free explanations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Patient, one-on-one support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Practical, real-world applications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Building confidence through small wins</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8">
                My Teaching Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 text-center">Learn by Doing</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Every lesson includes hands-on practice with real Google Ads accounts. 
                      You&apos;ll learn by managing actual campaigns, not just theory.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 text-center">Personal Support</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      One-on-one guidance ensures you never feel lost. I adapt my teaching 
                      style to your learning pace and preferences.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 text-center">Real Results</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Focus on practical skills that generate real business results. 
                      Every technique I teach has been proven in real campaigns.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
                What My Students Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-slate-600 mb-4">
                      &ldquo;Zlatko&apos;s patience and clear explanations made Google Ads finally click for me. 
                      At 65, I never thought I&apos;d be running my own campaigns, but here I am!&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Margaret Thompson</p>
                        <p className="text-sm text-slate-600">Small Business Owner</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-slate-600 mb-4">
                      &ldquo;The best instructor I&apos;ve had at Brainster. Zlatko&apos;s approach to teaching 
                      complex concepts in simple terms is unmatched.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-slate-900">David Chen</p>
                        <p className="text-sm text-slate-600">Marketing Professional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sky-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Ready to Start Your Google Ads Journey?
              </h2>
              <p className="text-xl text-sky-100 mb-8">
                Whether you&apos;re a complete beginner or looking to advance your skills, 
                I&apos;m here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/courses">
                    View All Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-sky-600" asChild>
                  <Link href="#contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer
        columns={landingContent.footer.columns}
        copyright={landingContent.footer.copyright}
      />
    </div>
  )
}
