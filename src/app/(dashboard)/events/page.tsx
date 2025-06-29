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
import { Calendar, MapPin, Users, Clock, Plus } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Elite Business Bootcamp 2024',
      date: '2024-02-15',
      time: '9:00 AM - 5:00 PM',
      location: 'New York Conference Center',
      type: 'In-Person',
      attendees: 89,
      maxAttendees: 100,
      price: '$297',
    },
    {
      id: 2,
      title: 'Virtual Networking Mixer',
      date: '2024-01-25',
      time: '6:00 PM - 8:00 PM',
      location: 'Online (Zoom)',
      type: 'Virtual',
      attendees: 134,
      maxAttendees: 200,
      price: 'Free',
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'Leadership Workshop',
      date: '2024-01-05',
      attendees: 67,
      feedback: 4.8,
      type: 'Workshop',
    },
    {
      id: 4,
      title: 'Monthly Mastermind',
      date: '2024-01-01',
      attendees: 45,
      feedback: 4.9,
      type: 'Mastermind',
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
        <span className="text-foreground">Events</span>
      </nav>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">
            Manage your workshops, masterminds, and networking events
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
            <CardDescription>
              Events scheduled for the coming weeks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="p-6 border rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        event.type === 'Virtual' ? 'secondary' : 'default'
                      }
                    >
                      {event.type}
                    </Badge>
                    <Badge variant="outline">{event.price}</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.attendees}/{event.maxAttendees} attendees
                    </span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(event.attendees / event.maxAttendees) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm">Manage</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Past Events</CardTitle>
              <CardDescription>
                Your completed events and their performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pastEvents.map(event => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{event.date}</span>
                      <span>{event.attendees} attendees</span>
                      <span>⭐ {event.feedback}/5.0</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Button size="sm" variant="outline">
                      View Report
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Analytics</CardTitle>
              <CardDescription>
                Performance metrics for your events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total Events
                  </span>
                  <span className="font-bold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total Attendees
                  </span>
                  <span className="font-bold">1,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Average Rating
                  </span>
                  <span className="font-bold">4.8/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Revenue Generated
                  </span>
                  <span className="font-bold">$47,890</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
