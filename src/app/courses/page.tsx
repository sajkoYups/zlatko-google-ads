"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "../(marketing)/components/Header"
import { Footer } from "../(marketing)/components/Footer"
import landingContent from "../../content/landing.json"

// Extended course data for the courses page
const coursesData = [
  {
    id: 1,
    title: "Google Ads Fundamentals: From Beginner to Pro",
    description: "Learn the essentials of Google Ads — campaign setup, keyword strategy, bidding, and ad creation. Perfect for anyone starting out or refreshing their skills.",
    image: "/images/course-1.jpg",
    category: "Google Ads",
    level: "Beginner",
    duration: "8 weeks",
    students: 1250,
    rating: 4.9,
    price: 299,
    originalPrice: 399,
    instructor: "Andrew Nelson",
    href: "#"
  },
  {
    id: 2,
    title: "Mastering Google Ads Optimization & Scaling",
    description: "Take your campaigns to the next level. Discover advanced techniques for A/B testing, performance tracking, conversion rate optimization, and budget scaling.",
    image: "/images/course-2.jpg",
    category: "Google Ads",
    level: "Advanced",
    duration: "12 weeks",
    students: 890,
    rating: 4.8,
    price: 499,
    originalPrice: 599,
    instructor: "Andrew Nelson",
    href: "#"
  },
  {
    id: 3,
    title: "Google Ads for Businesses: In-House Marketing Training",
    description: "Designed for teams who want to manage their own ads effectively. Learn how to run data-driven campaigns that generate leads and sales for your company.",
    image: "/images/course-3.jpg",
    category: "Google Ads",
    level: "Intermediate",
    duration: "6 weeks",
    students: 650,
    rating: 4.7,
    price: 399,
    originalPrice: 499,
    instructor: "Andrew Nelson",
    href: "#"
  },
  {
    id: 4,
    title: "Facebook Ads Mastery: Complete Campaign Management",
    description: "Master Facebook and Instagram advertising from setup to optimization. Learn audience targeting, creative strategies, and conversion tracking.",
    image: "/images/course-1.jpg",
    category: "Facebook Ads",
    level: "Beginner",
    duration: "10 weeks",
    students: 980,
    rating: 4.8,
    price: 349,
    originalPrice: 449,
    instructor: "Andrew Nelson",
    href: "#"
  },
  {
    id: 5,
    title: "LinkedIn Ads for B2B Marketing",
    description: "Unlock the power of LinkedIn advertising for B2B lead generation. Learn targeting, ad formats, and conversion optimization strategies.",
    image: "/images/course-2.jpg",
    category: "LinkedIn Ads",
    level: "Intermediate",
    duration: "6 weeks",
    students: 420,
    rating: 4.6,
    price: 279,
    originalPrice: 349,
    instructor: "Andrew Nelson",
    href: "#"
  },
  {
    id: 6,
    title: "Digital Marketing Analytics & Reporting",
    description: "Master Google Analytics, Facebook Insights, and other tools to track, measure, and optimize your digital marketing campaigns effectively.",
    image: "/images/course-3.jpg",
    category: "Analytics",
    level: "Intermediate",
    duration: "8 weeks",
    students: 750,
    rating: 4.9,
    price: 329,
    originalPrice: 429,
    instructor: "Andrew Nelson",
    href: "#"
  }
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const categories = ["All", "Google Ads", "Facebook Ads", "LinkedIn Ads", "Analytics"]
  const levels = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-white">
      <Header 
        logo={landingContent.site.logo}
        nav={landingContent.nav}
        primaryCta={landingContent.site.primaryCta}
      />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                All Courses
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Master digital marketing with our comprehensive course library
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-600">Filter by:</span>
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Level Filter */}
              <div className="flex gap-2">
                {levels.map(level => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-900">
                        {course.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-slate-900">
                          ${course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-lg text-slate-500 line-through">
                            ${course.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link href={`/courses/${course.id}`}>
                        View course
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-slate-600">No courses found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedLevel("All")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
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
