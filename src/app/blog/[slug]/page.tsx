import React from "react";
import Post from "./Post";
import { getPost } from "@/actions/blog";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { mdxSource } = await getPost(slug);
  return (
    <Post mdxSource={mdxSource} />
  );
}