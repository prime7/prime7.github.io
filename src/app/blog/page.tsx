import { getPostCountByCategory, getPostsByCategory } from "@/actions/blog";
import { Suspense } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Blog() {
  const posts = await getPostsByCategory("all", "none");
  const categoryCounts = await getPostCountByCategory();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <Link
              key={category}
              href={`/blog?category=${category}`}
              className="no-underline"
            >
              <Badge variant="outline" className="px-3 py-1 text-sm">
                {category} ({count})
              </Badge>
            </Link>
          ))}
        </div>
      </div>
      <Suspense
        fallback={<div className="text-muted-foreground">Loading...</div>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="no-underline"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{post.frontmatter.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {post.frontmatter.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {post.frontmatter.date}
                  </span>
                  <Badge>{post.frontmatter.category}</Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
}