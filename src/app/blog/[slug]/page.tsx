import React from "react";
import Post from "./Post";
import { getPost, getPosts } from "@/actions/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts() 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetail(props: Props) {
  const { slug } = await props.params;
  const { mdxSource } = await getPost(slug);
  return (
    <Post mdxSource={mdxSource} />
  );
}
