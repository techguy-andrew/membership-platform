import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, MessageSquare, Heart, Share2, Plus, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
  const recentPosts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'SJ',
      title: 'How I scaled my business to 7 figures',
      excerpt: 'Sharing my journey and the key strategies that helped me break through...',
      likes: 24,
      comments: 8,
      time: '2 hours ago',
      category: 'Success Story',
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'MC',
      title: 'Question about hiring first employees',
      excerpt: 'Looking for advice on when and how to make my first hires...',
      likes: 12,
      comments: 15,
      time: '4 hours ago',
      category: 'Question',
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'ER',
      title: 'Monthly revenue report template',
      excerpt: 'Created a template that helped me track my business metrics...',
      likes: 31,
      comments: 6,
      time: '1 day ago',
      category: 'Resource',
    },
  ];

  const communityStats = [
    { label: 'Total Members', value: '1,247', icon: Users },
    { label: 'Active Today', value: '89', icon: TrendingUp },
    { label: 'Total Posts', value: '2,156', icon: MessageSquare },
    { label: 'Total Engagements', value: '12,847', icon: Heart },
  ];

  const categories = [
    { name: 'General Discussion', posts: 342, color: 'bg-blue-500' },
    { name: 'Success Stories', posts: 156, color: 'bg-green-500' },
    { name: 'Questions & Help', posts: 289, color: 'bg-yellow-500' },
    { name: 'Resources', posts: 98, color: 'bg-purple-500' },
    { name: 'Networking', posts: 124, color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-6">
      <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
        <span className="mx-1">/</span>
        <span className="text-foreground">Community</span>
      </nav>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">
            Connect, share, and learn with fellow business leaders
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {communityStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center p-6">
              <stat.icon className="h-8 w-8 text-muted-foreground" />
              <div className="ml-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Recent Posts
              </CardTitle>
              <CardDescription>
                Latest discussions from your community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{post.author}</span>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.time}</span>
                      </div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-1 hover:text-foreground">
                          <Share2 className="h-4 w-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Load More Posts
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Categories</CardTitle>
              <CardDescription>
                Browse discussions by topic
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant="secondary">{category.posts}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
              <CardDescription>
                Most active community members this month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {['Alex Thompson', 'Maria Garcia', 'David Kim', 'Lisa Wang'].map((name, index) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 50) + 10} posts</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}