'use client';

import { BookOpen, Calendar, Award, Clock, TrendingUp, MessageCircle, Star, CheckCircle, ArrowRight } from "lucide-react"
import { EventCard } from "@/components/dashboard/event-card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { VideoCard } from "@/components/dashboard/video-card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Mock member data
const memberStats = [
  {
    title: "Courses Completed",
    value: "3 of 12",
    description: "25% of curriculum",
    trend: { value: 25, isPositive: true },
    icon: CheckCircle
  },
  {
    title: "Learning Streak",
    value: "7 days",
    description: "Keep it up!",
    trend: { value: 7, isPositive: true },
    icon: TrendingUp
  },
  {
    title: "Time This Month",
    value: "24h",
    description: "4.8h per week",
    trend: { value: 12, isPositive: true },
    icon: Clock
  },
  {
    title: "Achievement Badges",
    value: "8",
    description: "3 new this month",
    trend: { value: 60, isPositive: true },
    icon: Award
  }
]

const currentCourse = {
  title: "Advanced Sales Funnel Optimization",
  description: "Learn to optimize your sales funnels for maximum conversion rates and revenue growth.",
  progress: 65,
  nextLesson: "Lesson 4: A/B Testing Your Funnels",
  estimatedTime: "15 min",
  category: "Marketing"
}

const upcomingSessions = [
  {
    title: "1-on-1 Coaching Session",
    description: "Personal strategy session with your business coach",
    date: "Feb 20, 2025",
    time: "2:00 PM EST",
    duration: "45 min",
    type: "coaching" as const,
    coach: "Sarah Mitchell",
    status: "confirmed"
  },
  {
    title: "Group Mastermind Call",
    description: "Peer learning session with other Growth tier members",
    date: "Feb 22, 2025",
    time: "1:00 PM EST",
    duration: "90 min",
    type: "mastermind" as const,
    attendees: 12,
    maxAttendees: 15,
    status: "registered"
  }
]

const communityActivity = [
  {
    user: "Alex Rodriguez",
    action: "replied to your question",
    target: "Marketing Strategies Forum",
    time: "2 hours ago",
    isDirect: true
  },
  {
    user: "Coach Sarah",
    action: "sent you a message",
    target: "Direct Message",
    time: "4 hours ago",
    isDirect: true
  },
  {
    user: "Jennifer Kim",
    action: "connected with you",
    target: "Networking",
    time: "1 day ago",
    isDirect: false
  },
  {
    user: "David Thompson",
    action: "liked your post",
    target: "Business Scaling Tips",
    time: "2 days ago",
    isDirect: false
  }
]

const recentAchievements = [
  {
    title: "First Course Complete",
    description: "Completed your first course module",
    icon: "🎯",
    earned: "2 days ago"
  },
  {
    title: "7-Day Streak",
    description: "Consistent learning for 7 days",
    icon: "🔥",
    earned: "1 week ago"
  },
  {
    title: "Community Helper",
    description: "Helped 5 other members",
    icon: "🤝",
    earned: "2 weeks ago"
  }
]

const membershipInfo = {
  tier: "Growth Member",
  since: "Jan 2024",
  nextTier: "Elite Member",
  progressToNext: 65,
  benefits: ["1-on-1 coaching", "Group masterminds", "Premium content", "Priority support"]
}

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Ready to accelerate your business growth? Here&apos;s your personalized learning journey.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary" className="text-sm">
            {membershipInfo.tier} since {membershipInfo.since}
          </Badge>
          <span className="text-sm text-muted-foreground">
            • {membershipInfo.progressToNext}% to {membershipInfo.nextTier}
          </span>
        </div>
      </div>

      {/* Personal Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {memberStats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Current Learning Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                My Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{currentCourse.title}</h3>
                  <p className="text-sm text-muted-foreground">{currentCourse.description}</p>
                </div>
                <Badge variant="outline">{currentCourse.category}</Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{currentCourse.progress}%</span>
                </div>
                <Progress value={currentCourse.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Next: {currentCourse.nextLesson}</p>
                  <p className="text-xs text-muted-foreground">~{currentCourse.estimatedTime}</p>
                </div>
                <Button size="sm">
                  Continue
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Sessions */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Upcoming for Me</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingSessions.map((session, index) => (
                <EventCard key={index} {...session} />
              ))}
            </div>
          </section>

          {/* Latest Insights */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Recommended for You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VideoCard 
                title="Leadership Mindset Mastery"
                description="Develop the mindset and skills needed to lead high-performing teams effectively."
                duration="32 min"
                thumbnail=""
                status="new"
                category="Leadership"
              />
              <VideoCard 
                title="Financial Planning for Entrepreneurs"
                description="Essential financial strategies every business owner needs to know for long-term success."
                duration="28 min"
                thumbnail=""
                status="recommended"
                category="Finance"
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* My Community Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                My Community Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {communityActivity.map((activity, index) => (
                <div key={index}>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                        {activity.isDirect && <Star className="h-3 w-3 inline ml-1 text-yellow-500" />}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  {index < communityActivity.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.earned}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Membership Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5" />
                Your Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {membershipInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  View All Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}