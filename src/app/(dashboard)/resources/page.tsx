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
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  Plus,
  BookOpen,
  Video,
  FileSpreadsheet,
} from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: 'Business Plan Template 2024',
      description:
        'Comprehensive business plan template with financial projections',
      type: 'Template',
      format: 'PDF',
      downloads: 847,
      category: 'Planning',
      size: '2.4 MB',
      icon: FileText,
    },
    {
      id: 2,
      title: 'Sales Funnel Masterclass',
      description: 'Complete guide to building high-converting sales funnels',
      type: 'Course',
      format: 'Video',
      downloads: 623,
      category: 'Marketing',
      size: '1.2 GB',
      icon: Video,
    },
    {
      id: 3,
      title: 'Financial Dashboard Spreadsheet',
      description:
        'Track your business metrics with this comprehensive dashboard',
      type: 'Tool',
      format: 'Excel',
      downloads: 1203,
      category: 'Finance',
      size: '847 KB',
      icon: FileSpreadsheet,
    },
    {
      id: 4,
      title: 'Leadership Principles Handbook',
      description: 'Essential principles for effective business leadership',
      type: 'Guide',
      format: 'PDF',
      downloads: 456,
      category: 'Leadership',
      size: '3.1 MB',
      icon: BookOpen,
    },
  ];

  const categories = [
    { name: 'All Resources', count: 127, active: true },
    { name: 'Templates', count: 34 },
    { name: 'Courses', count: 18 },
    { name: 'Tools', count: 29 },
    { name: 'Guides', count: 46 },
  ];

  const resourceTypes = ['PDF', 'Video', 'Excel', 'PowerPoint', 'Audio'];

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
        <span className="text-foreground">Resources</span>
      </nav>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground">
            Access templates, guides, and tools to grow your business
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload Resource
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search resources..."
            className="w-full pl-9 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map(category => (
                <div
                  key={category.name}
                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-muted ${
                    category.active ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <Badge variant={category.active ? 'secondary' : 'outline'}>
                    {category.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">File Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {resourceTypes.map(type => (
                <div key={type} className="flex items-center space-x-2">
                  <input type="checkbox" id={type} className="rounded" />
                  <label htmlFor={type} className="text-sm cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <div className="grid gap-4">
            {resources.map(resource => (
              <Card
                key={resource.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {resource.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {resource.description}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{resource.category}</Badge>
                          <Badge variant="secondary">{resource.format}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {resource.downloads} downloads
                          </span>
                          <span>{resource.size}</span>
                          <span>{resource.type}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            Preview
                          </Button>
                          <Button size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">Load More Resources</Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resource Statistics</CardTitle>
          <CardDescription>
            Overview of your resource library performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">127</div>
              <div className="text-sm text-muted-foreground">
                Total Resources
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15,847</div>
              <div className="text-sm text-muted-foreground">
                Total Downloads
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-sm text-muted-foreground">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
