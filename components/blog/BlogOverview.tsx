import BlogArticle from "@/components/blog/BlogArticle";
import BlogAside from "@/components/blog/BlogAside";

export default function BlogOverview() {
  return (
    <main className="mx-auto container flex relative items-start justify-between">
      <BlogArticle />
      <BlogAside />
    </main>
  );
}
