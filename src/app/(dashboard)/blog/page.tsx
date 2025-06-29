'use client';

import { PageHeader } from '@/components/dashboard/PageHeader';
import { FilterBar } from '@/components/dashboard/FilterBar';
import { ContentCard } from '@/components/dashboard/ContentCard';
import { useState } from 'react';

const blogCategories = [
  { value: '', label: 'All' },
  { value: 'tips', label: 'Business Tips' },
  { value: 'success', label: 'Success Stories' },
  { value: 'news', label: 'Industry News' },
];

const mockPosts = [
  {
    title: 'How to Build a Million-Dollar Business',
    description:
      'Actionable steps and mindset shifts for scaling your business to 7 figures.',
    author: 'David Chen',
    authorAvatar: '/avatars/david.jpg',
    date: '2024-06-01',
    category: 'tips',
    featured: true,
  },
  {
    title: "Sarah's E-commerce Success Story",
    description:
      'From $5K to $2M: How Sarah scaled her online store with our coaching.',
    author: 'Sarah Chen',
    authorAvatar: '/avatars/sarah.jpg',
    date: '2024-05-20',
    category: 'success',
  },
  {
    title: '2024 Business Trends: What to Watch',
    description:
      'Stay ahead of the curve with these key industry trends for entrepreneurs.',
    author: 'Michael Rodriguez',
    authorAvatar: '/avatars/michael.jpg',
    date: '2024-05-10',
    category: 'news',
  },
  {
    title: 'Mastering Sales Calls',
    description:
      'Techniques for closing more deals and building lasting client relationships.',
    author: 'Lisa Thompson',
    authorAvatar: '/avatars/lisa.jpg',
    date: '2024-04-28',
    category: 'tips',
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filteredPosts = mockPosts.filter(
    p =>
      (category === '' || p.category === category) &&
      (search === '' || p.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Blog"
        description="Read the latest business tips, member success stories, and industry news from our coaching community."
        badge="Insights"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/membership' },
          { label: 'Blog' },
        ]}
      />
      <FilterBar
        searchPlaceholder="Search blog posts..."
        categoryOptions={blogCategories.slice(1)}
        onSearch={setSearch}
        onCategoryChange={setCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground py-12">
            No blog posts found.
          </div>
        ) : (
          filteredPosts.map((post, i) => (
            <ContentCard
              key={i}
              type="blog"
              title={post.title}
              description={post.description}
              author={post.author}
              authorAvatar={post.authorAvatar}
              date={post.date}
              category={post.category}
              featured={post.featured}
              href="#"
            />
          ))
        )}
      </div>
      {/* Pagination (mock) */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-primary/10">
          Previous
        </button>
        <button className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-primary/10 ml-2">
          Next
        </button>
      </div>
    </div>
  );
}
