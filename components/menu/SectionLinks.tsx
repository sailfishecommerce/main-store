import allCategoryContent from "@/json/allcategories-dropdown.json";

export default function SectionLinks() {
  return (
    <ul>
      {allCategoryContent.sidebar[1].map((item, index) => (
        <div key={index} className="section">
          {!item.link && (
            <h1 key={item.title} className="text-xl font-bold my-1">
              {item.title}
            </h1>
          )}
        </div>
      ))}
    </ul>
  );
} 
