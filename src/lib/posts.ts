const CATEGORIES = [
  { name: "Books", catslug: "books" },
  { name: "Health and Wellness", catslug: "health-and-wellness" },
  { name: "Liverpool", catslug: "liverpool" },
];

const POSTS = [
  {
    title: "Sailing Through History: The Maritime Marvels of Liverpool",
    slug: "sailing-through-history",
    content:
      "Liverpool &apos;t s maritime history is a treasure trove waiting to be explored. Take a journey along the Albert Dock, visit the Merseyside Maritime Museum, and discover the historic docks that played a crucial role in the city &apos;t s development. This post will be a guide to maritime enthusiasts and history buffs looking to uncover the hidden gems along the waterfront.",
    category: "liverpool",
  },
  {
    title: "A Culinary Odyssey: Liverpool's Best-Kept Food Secrets",
    slug: "culinary-odyssey",
    content:
      "Step off the beaten path and savor the lesser-known culinary delights Liverpool has to offer. From hidden cafes tucked away in Georgian Quarter to family-run restaurants serving local delicacies, this post will be a gastronomic adventure through the city &apos;t s hidden gems. Explore the diverse food scene beyond the popular spots and experience Liverpool &apos;t s culinary richness.",
    category: "liverpool",
  },
  {
    title: "Yoga with a View: Rooftop Classes in Liverpoo",
    slug: "yoga-with-a-view",
    content:
      "Experience the serenity of yoga against the backdrop of Liverpool &apos;t s stunning skyline. Elevate your well-being with rooftop yoga classes that offer a unique fusion of physical activity, mindfulness, and panoramic views. Discover the harmonious connection between your yoga practice and the dynamic energy of the city below.",
    category: "health-and-wellness",
  },
  {
    title: "Mindful Strolls: Wellness Walks in Liverpool",
    slug: "mindful-strolls",
    content:
      "Begin your wellness journey at Sefton Park, a sprawling green oasis that provides a refreshing retreat. Explore tree-lined paths, serene lakes, and the iconic Palm House. This mindful stroll is not just a walk but a sensory experience, allowing you to connect with nature right in the heart of Liverpool.",
    category: "health-and-wellness",
  },
  {
    title: "The Power of Now - by Eckhart Tolle",
    slug: "power-of-now",
    content:
      "Explore Tolle &apos;t s timeless classic that emphasizes the importance of living in the present moment and transcending the burden of past and future thoughts. This book serves as a practical guide for cultivating mindfulness in daily life.",
    category: "books",
  },
  {
    title: "The Art of Happiness - by the Dalai Lama and Howard Cutler",
    slug: "art-of-happiness",
    content:
      "Explore the intersection of mindfulness and happiness in this collaboration between the Dalai Lama and psychiatrist Howard Cutler. The book offers practical advice on finding joy and contentment in everyday life.",
    category: "books",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategory() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
