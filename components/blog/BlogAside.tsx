import TableofContent from "@/components/blog/TableofContent";
import PopularArticles from "@/components/blog/PopularArticles";

export default function BlogAside() {
  return (
    <aside className="w-1/4 mt-52 sticky top-24 z-30 right-24">
      <TableofContent />
      <div className="mb-14" />
      <PopularArticles />
    </aside>
  );
}
