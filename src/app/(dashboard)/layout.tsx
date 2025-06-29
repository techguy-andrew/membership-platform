'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { DashboardView } from './dashboard/page';
import { CoursesView } from '@/components/dashboard/views/CoursesView';
import { InsightsView } from '@/components/dashboard/views/InsightsView';
import { LiveStreamsView } from '@/components/dashboard/views/LiveStreamsView';
import { EventsView } from '@/components/dashboard/views/EventsView';
import { CommunityView } from '@/components/dashboard/views/CommunityView';
import { ResourcesView } from '@/components/dashboard/views/ResourcesView';
import { ProfileView } from '@/components/dashboard/views/ProfileView';

function renderView(view: DashboardView) {
  switch (view) {
    case 'videos':
      return <CoursesView />;
    case 'live':
      return <LiveStreamsView />;
    case 'events':
      return <EventsView />;
    case 'community':
      return <CommunityView />;
    case 'resources':
      return <ResourcesView />;
    case 'insights':
      return <InsightsView />;
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
  const [activeView, setActiveView] = useState<DashboardView>('dashboard');
  const handleViewChange = (view: DashboardView) => {
    setActiveView(view);
  };

  const currentView = renderView(activeView);

  return (
    <div className="flex min-h-screen">
      <Sidebar activeView={activeView} onViewChange={handleViewChange} />
      <main className="flex-1 overflow-auto">
        {activeView === 'dashboard' || !currentView ? children : (
          <div className="max-w-7xl mx-auto p-6">
            {currentView}
          </div>
        )}
      </main>
    </div>
  );
}