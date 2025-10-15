"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users, Star, CheckCircle, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Header } from "@/app/(marketing)/components/Header"
import { Footer } from "@/app/(marketing)/components/Footer"
import landingContent from "@/content/landing.json"

// Course data (same as courses page)
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
    instructor: "Zlatko Mateski",
    href: "#",
    longDescription: "This comprehensive course takes you from Google Ads beginner to pro level. You'll learn everything from setting up your first campaign to advanced optimization techniques that drive real results for your business or clients.",
    whatYouWillLearn: [
      "Set up and configure Google Ads accounts properly",
      "Master keyword research and selection strategies",
      "Create compelling ad copy that converts",
      "Understand bidding strategies and budget optimization",
      "Track and analyze campaign performance",
      "Implement advanced targeting options",
      "Optimize for mobile and desktop experiences",
      "Scale successful campaigns effectively"
    ],
    curriculum: [
      {
        week: 1,
        title: "Google Ads Account Setup & Fundamentals",
        lessons: [
          "Creating your first Google Ads account",
          "Understanding the Google Ads interface",
          "Account structure best practices",
          "Linking Google Analytics and other tools"
        ]
      },
      {
        week: 2,
        title: "Keyword Research & Strategy",
        lessons: [
          "Using Google Keyword Planner effectively",
          "Long-tail vs short-tail keywords",
          "Negative keyword strategies",
          "Competitor keyword analysis"
        ]
      },
      {
        week: 3,
        title: "Campaign Creation & Setup",
        lessons: [
          "Campaign types and when to use them",
          "Ad group organization",
          "Setting up conversion tracking",
          "Budget allocation strategies"
        ]
      },
      {
        week: 4,
        title: "Ad Copy Creation & Testing",
        lessons: [
          "Writing compelling headlines",
          "Creating effective descriptions",
          "A/B testing methodologies",
          "Ad extensions optimization"
        ]
      },
      {
        week: 5,
        title: "Bidding Strategies & Optimization",
        lessons: [
          "Understanding different bid strategies",
          "Manual vs automated bidding",
          "Quality Score optimization",
          "Bid adjustments and modifiers"
        ]
      },
      {
        week: 6,
        title: "Advanced Targeting & Audiences",
        lessons: [
          "Demographic and geographic targeting",
          "Custom audiences and remarketing",
          "Similar audiences and lookalikes",
          "Device and time-based targeting"
        ]
      },
      {
        week: 7,
        title: "Performance Analysis & Reporting",
        lessons: [
          "Key metrics to track",
          "Creating custom reports",
          "Attribution modeling",
          "ROI and ROAS calculations"
        ]
      },
      {
        week: 8,
        title: "Scaling & Advanced Optimization",
        lessons: [
          "Scaling successful campaigns",
          "Budget management strategies",
          "Advanced optimization techniques",
          "Troubleshooting common issues"
        ]
      }
    ],
    requirements: [
      "Basic computer skills and internet access",
      "A Google account (free)",
      "Access to a business or client account for practice",
      "Willingness to learn and apply new concepts"
    ],
    includes: [
      "8 weeks of structured content",
      "24 video lessons (3+ hours total)",
      "Downloadable templates and checklists",
      "Live Q&A sessions with instructor",
      "Private community access",
      "Certificate of completion",
      "30-day money-back guarantee"
    ]
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
    instructor: "Zlatko Mateski",
    href: "#",
    longDescription: "This advanced course is designed for marketers who already have basic Google Ads knowledge and want to master optimization and scaling techniques. You'll learn sophisticated strategies used by top-performing agencies and in-house teams.",
    whatYouWillLearn: [
      "Advanced A/B testing methodologies",
      "Sophisticated bidding strategies",
      "Conversion rate optimization techniques",
      "Budget scaling without losing efficiency",
      "Advanced audience targeting and segmentation",
      "Cross-platform campaign coordination",
      "Advanced reporting and attribution",
      "Scaling strategies for different business models"
    ],
    curriculum: [
      {
        week: 1,
        title: "Advanced Campaign Architecture",
        lessons: [
          "Multi-account management strategies",
          "Campaign hierarchy optimization",
          "Advanced account structure",
          "Cross-campaign coordination"
        ]
      },
      {
        week: 2,
        title: "Sophisticated A/B Testing",
        lessons: [
          "Statistical significance in testing",
          "Multivariate testing strategies",
          "Testing frameworks and methodologies",
          "Advanced testing tools and platforms"
        ]
      }
    ],
    requirements: [
      "Completion of Google Ads Fundamentals course or equivalent experience",
      "Active Google Ads account with running campaigns",
      "Basic understanding of analytics and reporting",
      "Access to Google Ads Editor"
    ],
    includes: [
      "12 weeks of advanced content",
      "36 video lessons (5+ hours total)",
      "Advanced templates and frameworks",
      "Weekly live optimization sessions",
      "Private mastermind group access",
      "Advanced certification",
      "60-day money-back guarantee"
    ]
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
    instructor: "Zlatko Mateski",
    href: "#",
    longDescription: "This course is specifically designed for in-house marketing teams and business owners who want to take control of their Google Ads campaigns. Learn practical strategies that work for real businesses with real budgets and constraints.",
    whatYouWillLearn: [
      "Setting up campaigns for your specific business",
      "Budget allocation and management",
      "Lead generation and conversion optimization",
      "Reporting to stakeholders and management",
      "Team collaboration and workflow management",
      "Integrating with other marketing channels",
      "Scaling within business constraints",
      "ROI measurement and optimization"
    ],
    curriculum: [
      {
        week: 1,
        title: "Business-Focused Campaign Setup",
        lessons: [
          "Aligning campaigns with business goals",
          "Budget planning and allocation",
          "Setting up proper tracking",
          "Stakeholder communication strategies"
        ]
      }
    ],
    requirements: [
      "Basic marketing knowledge",
      "Access to business Google Ads account",
      "Understanding of business goals and KPIs",
      "Team collaboration tools access"
    ],
    includes: [
      "6 weeks of business-focused content",
      "18 video lessons (3+ hours total)",
      "Business templates and frameworks",
      "Team collaboration tools",
      "Management reporting templates",
      "Business certification",
      "30-day money-back guarantee"
    ]
  }
]

export default function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const course = coursesData.find(c => c.id === parseInt(resolvedParams.id))
  
  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          logo={landingContent.site.logo}
          nav={landingContent.nav}
          primaryCta={landingContent.site.primaryCta}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <p className="text-xl text-slate-600 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
        <Footer
          columns={landingContent.footer.columns}
          copyright={landingContent.footer.copyright}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        logo={landingContent.site.logo}
        nav={landingContent.nav}
        primaryCta={landingContent.site.primaryCta}
      />
      
      <main>
        {/* Course Hero */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6">
                <Link href="/courses" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Courses
                </Link>
              </Button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="secondary" className="mb-4">{course.category}</Badge>
                  <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                    {course.title}
                  </h1>
                  <p className="text-xl text-slate-600 mb-8">
                    {course.longDescription}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-5 h-5" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-5 h-5" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-slate-900">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-xl text-slate-500 line-through">${course.originalPrice}</span>
                      )}
                    </div>
                    {course.originalPrice && (
                      <Badge variant="destructive" className="text-sm">
                        Save ${course.originalPrice - course.price}
                      </Badge>
                    )}
                  </div>
                  
                  <Button size="lg" className="w-full md:w-auto">
                    Enroll Now - ${course.price}
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* What You'll Learn */}
                  <Card className="mb-8">
                    <CardHeader>
                      <h2 className="text-2xl font-semibold text-slate-900 mb-4">What you&apos;ll learn</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {course.whatYouWillLearn.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Curriculum */}
                  <Card className="mb-8">
                    <CardHeader>
                      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course curriculum</h2>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {course.curriculum.map((week, index) => (
                          <div key={index} className="border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold text-sky-600">{week.week}</span>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900">{week.title}</h3>
                            </div>
                            <ul className="space-y-2 ml-11">
                              {week.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="flex items-center gap-3 text-slate-600">
                                  <Play className="w-4 h-4 text-slate-400" />
                                  {lesson}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Course Info */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-slate-900">Course details</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Level</span>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Duration</span>
                        <span className="text-slate-900">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Students</span>
                        <span className="text-slate-900">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-slate-900">{course.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Instructor</span>
                        <span className="text-slate-900">{course.instructor}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Requirements */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-slate-900">Requirements</h3>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="text-slate-600 text-sm">• {req}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* What's Included */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-slate-900">What&apos;s included</h3>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
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
