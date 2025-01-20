import { getPostCountByCategory, getPostsByCategory } from "@/actions/blog";
import { Suspense } from "react";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPostsByCategory("all", "none");
  const categoryCounts = await getPostCountByCategory();

  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100 font-mono">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Blog CLI</h2>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-900 dark:text-gray-100 font-bold"> {'>'} ls categories</p>
          <div className="ml-4 mt-2 space-y-1">
            {Object.entries(categoryCounts).map(([category, count], index, array) => (
              <p key={category}>
                <Link href={`/blog?category=${category}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="hover:scale-110 transition-transform">{category}</span> <span className="text-gray-500">({count})</span>
                  {index < array.length - 1 && ' ->'}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="text-gray-500">Loading posts...</div>}>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-900 dark:text-gray-100 font-bold"> {'>'} ls posts</p>
          <div className="ml-4 mt-2 space-y-4">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className={`mb-2 pb-2 ${index < posts.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
              >
                <Link href={`/blog/${post.slug}`} className="text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline">
                  <span className="text-lg font-semibold hover:scale-110 transition-transform">{post.frontmatter.title}</span>
                  {index < posts.length - 1 && ' ->'}
                </Link>
                <p className="text-gray-400 mt-1">{post.frontmatter.description}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {post.frontmatter.date} - <span className="italic">{post.frontmatter.category}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}