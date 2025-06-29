'use client';

import { BarChart3, TrendingUp, Target, Filter, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insightCategories = [
  { name: "All", count: 18 },
  { name: "Performance", count: 6 },
  { name: "Growth", count: 5 },
  { name: "Market Trends", count: 4 },
  { name: "Strategy", count: 3 }
];

const businessInsights = [
  {
    title: "Q4 Revenue Performance Analysis",
    excerpt: "Deep dive into your business performance metrics, identifying key growth drivers and areas for optimization in the upcoming quarter.",
    type: "Performance Analysis",
    date: "Dec 20, 2024",
    readTime: "12 min read",
    category: "Performance",
    isNew: true,
    metrics: {
      revenue: "+23%",
      growth: "+15%",
      efficiency: "94%"
    }
  },
  {
    title: "Market Expansion Opportunities",
    excerpt: "Strategic analysis of untapped market segments and expansion opportunities based on current industry trends and competitive landscape.",
    type: "Strategic Report",
    date: "Dec 18, 2024",
    readTime: "8 min read",
    category: "Growth",
    metrics: {
      opportunities: "5",
      potential: "$2.4M",
      timeline: "6 months"
    }
  },
  {
    title: "Customer Acquisition Cost Optimization",
    excerpt: "Comprehensive breakdown of your CAC across different channels and strategies to improve ROI on marketing spend.",
    type: "Financial Analysis",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    category: "Performance",
    metrics: {
      currentCAC: "$45",
      targetCAC: "$32",
      improvement: "28%"
    }
  },
  {
    title: "Competitive Intelligence Report",
    excerpt: "Latest insights on competitor strategies, market positioning, and opportunities to differentiate your business.",
    type: "Market Research",
    date: "Dec 12, 2024",
    readTime: "15 min read",
    category: "Market Trends",
    metrics: {
      competitors: "12",
      threats: "3",
      opportunities: "7"
    }
  },
  {
    title: "Team Productivity Benchmarking",
    excerpt: "Analysis of team performance metrics compared to industry standards and recommendations for productivity improvements.",
    type: "Performance Analysis",
    date: "Dec 10, 2024",
    readTime: "9 min read",
    category: "Performance",
    metrics: {
      productivity: "87%",
      target: "92%",
      gap: "5%"
    }
  },
  {
    title: "Digital Transformation Roadmap",
    excerpt: "Strategic framework for implementing technology solutions that will drive efficiency and competitive advantage.",
    type: "Strategic Plan",
    date: "Dec 8, 2024",
    readTime: "14 min read",
    category: "Strategy",
    metrics: {
      phases: "4",
      timeline: "18 months",
      investment: "$150K"
    }
  }
];

export function InsightsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-8 w-8" />
            Business Insights
          </h1>
          <p className="text-muted-foreground mt-1">
            Data-driven insights and analytics to accelerate your business growth
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter Insights
        </Button>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold">+23%</div>
                <div className="text-sm text-muted-foreground">Revenue Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">87%</div>
                <div className="text-sm text-muted-foreground">Goal Achievement</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-muted-foreground">Active Customers</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-600" />
              <div>
                <div className="text-2xl font-bold">$45</div>
                <div className="text-sm text-muted-foreground">Avg. CAC</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {insightCategories.map((category, index) => (
          <Badge 
            key={index} 
            variant={index === 0 ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/10"
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {businessInsights.map((insight, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold leading-tight line-clamp-2">{insight.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {insight.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {insight.category}
                    </Badge>
                    {insight.isNew && (
                      <Badge variant="destructive" className="text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {insight.excerpt}
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                {Object.entries(insight.metrics).map(([key, value], idx) => (
                  <div key={idx} className="text-center p-2 bg-muted/50 rounded">
                    <div className="font-semibold text-primary">{value}</div>
                    <div className="text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>
                <Button size="sm">
                  View Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}