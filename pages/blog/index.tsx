
import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import Applayout from "@/layouts/Applayout";
import breadcrumb from "@/json/breadcrumb.json";
import BlogAuthor from "@/components/blog/BlogAuthor";
import TableofContent from "@/components/blog/TableofContent";
import PopularArticles from "@/components/blog/PopularArticles";
import ShareBlogLink from "@/components/blog/ShareBlogLink";
import BlogContent from "@/components/blog/BlogContent";

export default function Blog() {
  breadcrumb.blog[1] = { name: "", link: "" };
  return (
    <Applayout title="Blog page">
      <main className="mx-auto container">
        <Breadcrumb breadcrumbItems={breadcrumb.blog} />
        <h1 className="blog-title text-xl font-bold">
          The best e-commerce platform in 2022
        </h1>
        <div className="row-1 flex items-center">
          <ShareBlogLink />
          <div className="blog-content">
            <article className="w-3/4">
              <BlogContent />
              <BlogAuthor />
            </article>
            <aside className="w-1/4">
              <TableofContent />
              <div className="mb-14" />
              <PopularArticles />
            </aside>
          </div>
        </div>
      </main>
    </Applayout>
  );
}
