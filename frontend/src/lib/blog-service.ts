import { prisma } from '@/db/prisma';

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const DEFAULT_BLOGS = [
  {
    slug: 'how-to-prevent-cavities',
    title: '5 Daily Habits to Prevent Cavities Forever',
    excerpt: 'Discover the simple daily routines that can protect your teeth from decay and save you trips to the dentist.',
    author: 'Dr. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    content: `Maintaining good oral hygiene is crucial for your overall health. Many people don't realize that standard brushing isn't enough to keep cavities at bay. In this article, we'll dive deep into the daily habits you need to adopt.

### 1. Flossing is Non-Negotiable
Your toothbrush can only reach 60% of your tooth surfaces. The remaining 40% between your teeth is a breeding ground for bacteria if left uncleaned. Flossing daily is the only way to remove plaque from these tight spaces.

### 2. Limit Sugary Snacks
Sugar fuels the bacteria in your mouth to produce acids that erode tooth enamel. Try to limit sugary snacks and always rinse your mouth with water after eating sweets.

> "Prevention is always better, and cheaper, than cure when it comes to dental health." - Dr. Ramesh Kumar

By following these simple steps and visiting Dental World for your bi-annual check-ups, you can ensure a lifetime of healthy smiles.`,
  },
  {
    slug: 'benefits-of-invisalign',
    title: 'Why Invisalign is Better Than Traditional Braces',
    excerpt: 'Thinking about straightening your teeth? Here is everything you need to know about clear aligners.',
    author: 'Dr. Sunitha Rao',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=800&q=80',
    content: `Clear aligners like Invisalign have revolutionized orthodontic treatment. Unlike traditional metal braces, clear aligners are virtually invisible, comfortable, and removable for eating and cleaning.

### Aesthetics and Confidence
With clear aligners, you can straighten your teeth without feeling self-conscious about wire brackets.

### Hygiene and Comfort
Since the aligners are removable, brushing and flossing are straightforward, maintaining superior gum health throughout treatment.

### Custom Digital Precision
Every set of aligners is custom-designed using high-precision 3D digital imaging to map your tooth movements step-by-step.`,
  },
  {
    slug: 'dental-implant-myths',
    title: 'Busting 3 Common Myths About Dental Implants',
    excerpt: 'Are dental implants really painful? Do they look fake? We debunk the biggest misconceptions.',
    author: 'Dr. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    content: `Dental implants are the gold standard for replacing missing teeth. However, several myths prevent people from seeking this life-changing procedure.

### Myth 1: Dental Implants are Painful
With modern local anesthesia and precision surgical tech, most patients report minimal discomfort post-procedure.

### Myth 2: They Look Artificial
Implants are custom-crafted to match your natural tooth color, size, and shape seamlessly.

### Myth 3: High Maintenance
Dental implants function just like natural teeth! Regular brushing, flossing, and dental checkups are all you need.`,
  },
];

/**
 * Ensures initial default blogs exist in DB if empty.
 */
export async function seedInitialBlogsIfEmpty() {
  try {
    const count = await prisma.blogPost.count();
    if (count === 0) {
      for (const blog of DEFAULT_BLOGS) {
        await prisma.blogPost.create({
          data: blog,
        });
      }
    }
  } catch (error) {
    console.error('Error seeding initial blogs:', error);
  }
}

/**
 * Get all blog posts ordered by creation date descending.
 */
export async function getAllBlogPosts(): Promise<BlogPostItem[]> {
  try {
    await seedInitialBlogsIfEmpty();
    return await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
  try {
    await seedInitialBlogsIfEmpty();
    return await prisma.blogPost.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get a single blog post by ID.
 */
export async function getBlogPostById(id: string): Promise<BlogPostItem | null> {
  try {
    return await prisma.blogPost.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Error fetching blog post with ID "${id}":`, error);
    return null;
  }
}
