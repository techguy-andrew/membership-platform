'use client';

import { DashboardOverview } from "@/components/dashboard/views/DashboardOverview";

export type DashboardView = 'dashboard' | 'videos' | 'live' | 'events' | 'community' | 'resources' | 'insights' | 'profile';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <DashboardOverview />
      </div>
    </div>
  );
}
