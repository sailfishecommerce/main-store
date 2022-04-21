import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import breadcrumb from "@/json/breadcrumb.json";
import BlogAuthor from "@/components/blog/BlogAuthor";
import ShareBlogLink from "@/components/blog/ShareBlogLink";
import BlogContent from "@/components/blog/BlogContent";

export default function BlogArticle() {
  return (
    <article className="w-3/4 pr-12">
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
  );
}
