import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Calendar, Users, Clock, Radio } from 'lucide-react';

export default function LiveStreamsPage() {
  const upcomingStreams = [
    {
      id: 1,
      title: 'Building Your Million Dollar Business',
      date: '2024-01-15',
      time: '2:00 PM EST',
      attendees: 147,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Q&A: Scaling Your Team',
      date: '2024-01-18',
      time: '7:00 PM EST',
      attendees: 89,
      status: 'upcoming',
    },
  ];

  const pastStreams = [
    {
      id: 3,
      title: 'Leadership Masterclass',
      date: '2024-01-10',
      views: 234,
      duration: '1h 45m',
    },
    {
      id: 4,
      title: 'Financial Planning Fundamentals',
      date: '2024-01-08',
      views: 189,
      duration: '2h 15m',
    },
  ];

  return (
    <div className="space-y-6">
      <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link
          href="/membership"
          className="hover:text-foreground transition-colors"
        >
          Dashboard
        </Link>
        <span className="mx-1">/</span>
        <span className="text-foreground">Live Streams</span>
      </nav>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live Streams</h1>
          <p className="text-muted-foreground">
            Host live sessions and connect with your community in real-time
          </p>
        </div>
        <Button>
          <Radio className="mr-2 h-4 w-4" />
          Go Live
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Streams
            </CardTitle>
            <CardDescription>
              Your scheduled live streaming sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingStreams.map(stream => (
              <div
                key={stream.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <h3 className="font-medium">{stream.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {stream.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {stream.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {stream.attendees} registered
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Upcoming</Badge>
                  <Button size="sm">Edit</Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Schedule New Stream
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5" />
              Past Streams
            </CardTitle>
            <CardDescription>
              Your completed live streaming sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pastStreams.map(stream => (
              <div
                key={stream.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <h3 className="font-medium">{stream.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{stream.date}</span>
                    <span>{stream.views} views</span>
                    <span>{stream.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Completed</Badge>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Live Stream Analytics</CardTitle>
          <CardDescription>
            Performance metrics for your live streaming sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Total Streams</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1,847</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24h 30m</div>
              <div className="text-sm text-muted-foreground">
                Total Duration
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">154</div>
              <div className="text-sm text-muted-foreground">Avg Viewers</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
