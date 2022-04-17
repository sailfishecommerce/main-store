import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import Applayout from "@/layouts/Applayout";
import breadcrumb from "@/json/breadcrumb.json";

export default function Blog() {
  breadcrumb.blog[1] = { name: "", link: "" };
  return (
    <Applayout title="Blog page">
      <main className="mx-auto container">
        <Breadcrumb breadcrumbItems={breadcrumb.blog} />
        <h1 className="blog-title text-xl font-bold">
            
        </h1>
      </main>
    </Applayout>
  );
}
