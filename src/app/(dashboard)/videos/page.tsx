'use client';

import { PageHeader } from '@/components/dashboard/PageHeader';
import { FilterBar } from '@/components/dashboard/FilterBar';
import { ContentCard } from '@/components/dashboard/ContentCard';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

const videoCategories = [
  { value: '', label: 'All' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'finance', label: 'Finance' },
];

const mockVideos = [
  {
    title: 'Scaling Your Business: Proven Strategies',
    description: 'Learn how to scale your business with actionable frameworks and real-world examples.',
    category: 'strategy',
    duration: '42:15',
    thumbnail: '/videos/strategy1.jpg',
    status: 'completed',
    progress: 100,
  },
  {
    title: 'Mastering Digital Marketing in 2024',
    description: 'A step-by-step guide to building a high-converting marketing funnel.',
    category: 'marketing',
    duration: '36:20',
    thumbnail: '/videos/marketing1.jpg',
    status: 'in-progress',
    progress: 60,
  },
  {
    title: 'Leadership Mindset for Entrepreneurs',
    description: 'Develop the mindset and habits of high-performing business leaders.',
    category: 'leadership',
    duration: '28:10',
    thumbnail: '/videos/leadership1.jpg',
    status: 'not-started',
    progress: 0,
  },
  {
    title: 'Financial Mastery: Cash Flow & Profit',
    description: 'Understand your numbers and make smarter business decisions.',
    category: 'finance',
    duration: '31:45',
    thumbnail: '/videos/finance1.jpg',
    status: 'completed',
    progress: 100,
  },
];

export default function VideosPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filteredVideos = mockVideos.filter(
    (v) =>
      (category === '' || v.category === category) &&
      (search === '' || v.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Video Library"
        description="Explore our curated library of business coaching videos and courses. Track your progress and follow learning paths to accelerate your growth."
        badge="Courses"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Videos' }
        ]}
      />
      <FilterBar
        searchPlaceholder="Search videos..."
        categoryOptions={videoCategories.slice(1)}
        onSearch={setSearch}
        onCategoryChange={setCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground py-12">
            No videos found.
          </div>
        ) : (
          filteredVideos.map((video, i) => (
            <ContentCard
              key={i}
              type="video"
              title={video.title}
              description={video.description}
              category={video.category}
              duration={video.duration}
              thumbnail={video.thumbnail}
              status={video.status}
              progress={video.progress}
              href="#"
            />
          ))
        )}
      </div>
      {/* Playlists/Learning Paths */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">Course Playlists & Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Entrepreneur Growth Path</h3>
            <p className="text-sm text-muted-foreground mb-2">A step-by-step video series to help you scale from startup to 7-figures.</p>
            <Progress value={70} className="h-2 mb-2" />
            <span className="text-xs text-muted-foreground">70% complete</span>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Leadership Mastery Series</h3>
            <p className="text-sm text-muted-foreground mb-2">Develop advanced leadership skills with our expert-led video courses.</p>
            <Progress value={40} className="h-2 mb-2" />
            <span className="text-xs text-muted-foreground">40% complete</span>
          </div>
        </div>
      </section>
    </div>
  );
} 