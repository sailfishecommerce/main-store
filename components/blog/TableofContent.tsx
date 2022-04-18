import blogContent from "@/json/blog.json";

export default function TableofContent() {
  const content = blogContent[0].tableOfContent;
  return (
    <div className="border rounded-lg p-4 flex">
      <h3 className="font-bold">Table Of Content</h3>
      <hr />
      <div className="content">
        <h5>{content.title}</h5>
        <ul>
          {content.subtitle.map((item, index) => {
            return typeof item === "string" ? (
              <li key={index}>{item}</li>
            ) : (
              item.map((v, i) => (
                <li key={index}>
                  <h6>{v.title}</h6>
                  {v.subtitle.map((s, sIndex) => (
                    <li key={sIndex}>{s}</li>
                  ))}
                </li>
              ))
            );
          })}
        </ul>
      </div>
    </div>
  );
}
