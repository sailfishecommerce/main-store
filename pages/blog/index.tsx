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
      <main className="mx-auto container flex relative items-start justify-between">
        <article className="w-3/4 pr-8">
          <Breadcrumb breadcrumbItems={breadcrumb.blog} />
          <h1 className="blog-title text-3xl mb-8 font-bold">
            The best e-commerce platform in 2022
          </h1>
          <div className="row-1 items-center flex flex-col">
            <ShareBlogLink />
            <div className="blog-content">
              <BlogContent />
              <BlogAuthor />
            </div>
          </div>
        </article>
        <aside className="w-1/4 mt-52 sticky top-24 z-30 right-24">
          <TableofContent />
          <div className="mb-14" />
          <PopularArticles />
        </aside>
      </main>
    </Applayout>
  );
}
