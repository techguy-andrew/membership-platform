'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  PlayCircle,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Settings,
  Folder,
  LayoutDashboard,
} from 'lucide-react';
import { DashboardView } from '@/app/(dashboard)/dashboard/page';

const navLinks = [
  { label: 'Dashboard', view: 'dashboard' as DashboardView, icon: LayoutDashboard },
  { label: 'Courses', view: 'videos' as DashboardView, icon: BookOpen },
  { label: 'Community', view: 'community' as DashboardView, icon: Users },
  { label: 'My Sessions', view: 'live' as DashboardView, icon: PlayCircle },
  { label: 'Events', view: 'events' as DashboardView, icon: Calendar },
  { label: 'Resources', view: 'resources' as DashboardView, icon: Folder },
  { label: 'Insights', view: 'insights' as DashboardView, icon: FileText },
  { label: 'Profile', view: 'profile' as DashboardView, icon: Settings },
];

interface SidebarProps {
  activeView: DashboardView;
  onViewChange: (view: DashboardView) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-background border-r min-h-screen flex flex-col">
      <div className="flex items-center gap-3 p-6 border-b">
        <Avatar className="h-10 w-10">
          <AvatarFallback>EB</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-lg">Elite Business Coaching</div>
          <div className="text-xs text-muted-foreground">Member Portal</div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map(({ label, view, icon: Icon }) => {
          const isActive = activeView === view;
          
          return (
            <Button
              key={view}
              variant={isActive ? 'secondary' : 'ghost'}
              className="w-full justify-start flex items-center gap-3"
              onClick={() => onViewChange(view)}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
} 