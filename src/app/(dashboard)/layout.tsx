'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { MembershipView } from './membership/page';
import { CoursesView } from '@/components/dashboard/views/CoursesView';
import { LiveStreamsView } from '@/components/dashboard/views/LiveStreamsView';
import { EventsView } from '@/components/dashboard/views/EventsView';
import { ResourcesView } from '@/components/dashboard/views/ResourcesView';
import { ProfileView } from '@/components/dashboard/views/ProfileView';

function renderView(view: MembershipView) {
  switch (view) {
    case 'videos':
      return <CoursesView />;
    case 'live':
      return <LiveStreamsView />;
    case 'events':
      return <EventsView />;
    case 'resources':
      return <ResourcesView />;
    case 'profile':
      return <ProfileView />;
    default:
      return null;
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeView, setActiveView] = useState<MembershipView>('membership');
  const handleViewChange = (view: MembershipView) => {
    setActiveView(view);
  };

  const currentView = renderView(activeView);

  return (
    <div className="flex min-h-screen">
      <Sidebar activeView={activeView} onViewChange={handleViewChange} />
      <main className="flex-1 overflow-auto">
        {activeView === 'membership' || !currentView ? (
          children
        ) : (
          <div className="max-w-7xl mx-auto p-6">{currentView}</div>
        )}
      </main>
    </div>
  );
}
