import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function Page() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the blogs.</h1>
      <p>My blog posts</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <link href={`/blogs/${post.slug}`}>{post.title}</link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
