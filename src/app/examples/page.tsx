import { constructPageMetadata } from '@/lib/metadata';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = constructPageMetadata({
  title: 'Component Examples',
  description: 'Examples of all available UI components in the starter kit',
});

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Component Examples</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all available UI components and features in this starter kit
            template.
          </p>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Different button variants and sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>
              Input fields, labels, and form controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="space-y-2">
              <Label>Select Option</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Progress and Status */}
        <Card>
          <CardHeader>
            <CardTitle>Progress & Status</CardTitle>
            <CardDescription>
              Progress bars and status indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Progress Bar</Label>
              <Progress value={65} className="w-full" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Cards and Layout */}
        <Card>
          <CardHeader>
            <CardTitle>Cards & Layout</CardTitle>
            <CardDescription>
              Card components and layout examples
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card 1</CardTitle>
                  <CardDescription>This is a nested card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content goes here</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card 2</CardTitle>
                  <CardDescription>Another nested card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>More card content</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card 3</CardTitle>
                  <CardDescription>Yet another card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Even more content</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Elements</CardTitle>
            <CardDescription>
              Dialogs, accordions, and interactive components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Example Dialog</DialogTitle>
                    <DialogDescription>
                      This is an example dialog that can be used for
                      confirmations, forms, or other content.
                    </DialogDescription>
                  </DialogHeader>
                  <p>Dialog content goes here...</p>
                </DialogContent>
              </Dialog>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                <AccordionContent>
                  This is the content for accordion item 1. It can contain any
                  content including text, images, or other components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                <AccordionContent>
                  This is the content for accordion item 2. You can have
                  multiple accordion items.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Avatars and User Elements */}
        <Card>
          <CardHeader>
            <CardTitle>User Elements</CardTitle>
            <CardDescription>
              Avatars and user-related components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-sm text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Feature Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Template Features</CardTitle>
            <CardDescription>
              Key features included in this starter kit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">🔐 Authentication</h4>
                <p className="text-sm text-muted-foreground">
                  Complete auth system with NextAuth.js
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📊 Dashboard</h4>
                <p className="text-sm text-muted-foreground">
                  Modular dashboard architecture
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🎨 UI Components</h4>
                <p className="text-sm text-muted-foreground">
                  Shadcn/UI component library
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🔍 SEO Optimized</h4>
                <p className="text-sm text-muted-foreground">
                  Dynamic metadata and Open Graph
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📝 Forms</h4>
                <p className="text-sm text-muted-foreground">
                  React Hook Form with validation
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">⚡ TypeScript</h4>
                <p className="text-sm text-muted-foreground">
                  Full type safety throughout
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
