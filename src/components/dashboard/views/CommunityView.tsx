'use client';

import { Users, MessageSquare, Heart, TrendingUp, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const communityStats = [
  { label: "Total Members", value: "1,247", change: "+89 this month", icon: Users },
  { label: "Active Today", value: "89", change: "24 new posts", icon: MessageSquare },
  { label: "Total Posts", value: "2,841", change: "+156 this week", icon: TrendingUp },
  { label: "Engagement Rate", value: "87%", change: "Above average", icon: Heart }
];

const forumCategories = [
  { name: "General Discussion", posts: 567, members: 1024, description: "Open discussions about business and entrepreneurship" },
  { name: "Marketing Strategies", posts: 234, members: 789, description: "Share and discuss marketing tactics that work" },
  { name: "Leadership & Management", posts: 189, members: 643, description: "Leadership insights and team management" },
  { name: "Financial Planning", posts: 156, members: 523, description: "Financial strategies and investment discussions" },
  { name: "Success Stories", posts: 98, members: 892, description: "Share your wins and celebrate achievements" },
  { name: "Q&A with Coaches", posts: 145, members: 1156, description: "Get answers from our expert coaches" }
];

const recentActivity = [
  {
    user: "Sarah Johnson",
    action: "posted in",
    target: "Marketing Strategies",
    title: "How I increased my conversion rate by 340%",
    time: "2 hours ago",
    likes: 23,
    replies: 8
  },
  {
    user: "Mike Chen",
    action: "replied to",
    target: "Leadership & Management",
    title: "Building remote teams that actually work",
    time: "4 hours ago",
    likes: 15,
    replies: 3
  },
  {
    user: "Jennifer Rodriguez",
    action: "started discussion",
    target: "Financial Planning",
    title: "Best practices for scaling business finances",
    time: "6 hours ago",
    likes: 31,
    replies: 12
  },
  {
    user: "David Kim",
    action: "shared success in",
    target: "Success Stories",
    title: "From $50K to $500K revenue in 18 months",
    time: "1 day ago",
    likes: 87,
    replies: 24
  }
];

const topContributors = [
  { name: "Alex Thompson", posts: 156, reputation: 2840, badge: "Elite Contributor" },
  { name: "Maria Garcia", posts: 134, reputation: 2567, badge: "Community Leader" },
  { name: "Robert Smith", posts: 98, reputation: 1876, badge: "Mentor" },
  { name: "Lisa Chen", posts: 87, reputation: 1654, badge: "Rising Star" }
];

export function CommunityView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8" />
            Elite Business Community
          </h1>
          <p className="text-muted-foreground mt-1">
            Connect, learn, and grow with like-minded business leaders and entrepreneurs
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {communityStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Forum Categories */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Forum Categories</h2>
            <Badge variant="outline">6 categories</Badge>
          </div>
          
          <div className="space-y-4">
            {forumCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{category.posts} posts</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{category.members} members</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Forum
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
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
                        <span className="font-medium text-primary">{activity.target}</span>
                      </p>
                      <p className="text-sm font-medium mt-1 hover:text-primary cursor-pointer">
                        {activity.title}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span>{activity.time}</span>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{activity.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{activity.replies}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < recentActivity.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-sm font-bold text-muted-foreground w-6">#{index + 1}</div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{contributor.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {contributor.posts} posts • {contributor.reputation} reputation
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {contributor.badge}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}