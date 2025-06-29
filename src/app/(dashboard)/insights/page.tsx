import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Target, 
  BarChart3,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Share2
} from 'lucide-react';

export default function InsightsPage() {
  const kpiMetrics = [
    {
      title: 'Monthly Revenue',
      value: '$47,890',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      description: 'vs last month',
    },
    {
      title: 'Active Members',
      value: '1,247',
      change: '+8.3%',
      trend: 'up',
      icon: Users,
      description: 'vs last month',
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.8%',
      trend: 'down',
      icon: Target,
      description: 'vs last month',
    },
    {
      title: 'Engagement Score',
      value: '87%',
      change: '+5.1%',
      trend: 'up',
      icon: BarChart3,
      description: 'vs last month',
    },
  ];

  const monthlyGoals = [
    {
      title: 'Revenue Target',
      current: 47890,
      target: 60000,
      unit: '$',
      percentage: 79.8,
    },
    {
      title: 'New Members',
      current: 89,
      target: 120,
      unit: '',
      percentage: 74.2,
    },
    {
      title: 'Content Published',
      current: 28,
      target: 35,
      unit: '',
      percentage: 80.0,
    },
    {
      title: 'Event Attendance',
      current: 234,
      target: 300,
      unit: '',
      percentage: 78.0,
    },
  ];

  const topPerformingContent = [
    {
      title: 'Building Your First Million Dollar Business',
      type: 'Video Course',
      views: 1847,
      engagement: 94,
      revenue: 12450,
    },
    {
      title: 'Leadership Masterclass Series',
      type: 'Live Stream',
      views: 1234,
      engagement: 89,
      revenue: 8930,
    },
    {
      title: 'Financial Freedom Blueprint',
      type: 'Blog Series',
      views: 2156,
      engagement: 76,
      revenue: 6780,
    },
    {
      title: 'Scaling Your Team Workshop',
      type: 'Event',
      views: 567,
      engagement: 92,
      revenue: 15670,
    },
  ];

  const membershipTiers = [
    { name: 'Basic', members: 456, revenue: 9120, growth: '+5.2%' },
    { name: 'Premium', members: 327, revenue: 19620, growth: '+8.1%' },
    { name: 'Elite', members: 89, revenue: 17800, growth: '+15.3%' },
    { name: 'VIP', members: 23, revenue: 11500, growth: '+22.1%' },
  ];

  const industryBenchmarks = [
    { metric: 'Churn Rate', yourValue: '2.1%', industry: '5.3%', status: 'excellent' },
    { metric: 'Monthly Growth', yourValue: '12.5%', industry: '8.2%', status: 'excellent' },
    { metric: 'Customer LTV', yourValue: '$2,340', industry: '$1,890', status: 'good' },
    { metric: 'Engagement Rate', yourValue: '87%', industry: '72%', status: 'excellent' },
  ];

  return (
    <div className="space-y-6">
      <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
        <span className="mx-1">/</span>
        <span className="text-foreground">Business Insights</span>
      </nav>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Business Insights</h1>
          <p className="text-muted-foreground">
            Analytics and performance metrics for your membership platform
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <metric.icon className="h-8 w-8 text-muted-foreground" />
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Monthly Goals Progress
            </CardTitle>
            <CardDescription>
              Track your progress toward this month&apos;s targets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {monthlyGoals.map((goal) => (
              <div key={goal.title} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{goal.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {goal.unit}{goal.current.toLocaleString()} / {goal.unit}{goal.target.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${goal.percentage}%` }}
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  {goal.percentage.toFixed(1)}% complete
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Membership Tiers Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Membership Tier Performance
            </CardTitle>
            <CardDescription>
              Revenue and growth by membership level
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {membershipTiers.map((tier) => (
              <div key={tier.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{tier.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {tier.members} members
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">${tier.revenue.toLocaleString()}</div>
                  <div className={`text-sm flex items-center gap-1 ${
                    tier.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {tier.growth.startsWith('+') ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {tier.growth}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Top Performing Content
          </CardTitle>
          <CardDescription>
            Your best content based on engagement and revenue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformingContent.map((content, index) => (
              <div key={content.title} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{content.title}</h3>
                  <Badge variant="outline" className="mt-1">{content.type}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold">{content.views.toLocaleString()}</div>
                    <div className="text-muted-foreground">Views</div>
                  </div>
                  <div>
                    <div className="font-bold">{content.engagement}%</div>
                    <div className="text-muted-foreground">Engagement</div>
                  </div>
                  <div>
                    <div className="font-bold">${content.revenue.toLocaleString()}</div>
                    <div className="text-muted-foreground">Revenue</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industry Benchmarks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Industry Benchmarks
          </CardTitle>
          <CardDescription>
            See how you stack up against industry standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {industryBenchmarks.map((benchmark) => (
              <div key={benchmark.metric} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">{benchmark.metric}</div>
                  <div className="text-sm text-muted-foreground">Industry avg: {benchmark.industry}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{benchmark.yourValue}</div>
                  <Badge 
                    variant={benchmark.status === 'excellent' ? 'default' : 'secondary'}
                    className={benchmark.status === 'excellent' ? 'bg-green-500' : ''}
                  >
                    {benchmark.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actionable Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Actionable Insights & Recommendations
          </CardTitle>
          <CardDescription>
            AI-powered recommendations to grow your business
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Revenue Opportunity</h3>
            <p className="text-green-700 text-sm">
              Your VIP tier is showing 22.1% growth. Consider creating more premium content to capitalize on this trend.
              Potential additional revenue: $8,000/month.
            </p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Engagement Boost</h3>
            <p className="text-blue-700 text-sm">
              Your live streams have 94% engagement. Schedule 2 more live streams per month to increase member retention by an estimated 15%.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">Conversion Improvement</h3>
            <p className="text-yellow-700 text-sm">
              Your conversion rate dropped 0.8%. Review your onboarding process and consider A/B testing different welcome sequences.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}