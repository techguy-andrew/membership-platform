'use client';

import { DashboardOverview } from '@/components/dashboard/views/DashboardOverview';

export type MembershipView =
  | 'membership'
  | 'videos'
  | 'live'
  | 'events'
  | 'resources'
  | 'profile';

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <DashboardOverview />
      </div>
    </div>
  );
}
