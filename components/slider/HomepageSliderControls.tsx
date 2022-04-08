interface Props {
  content: {
    title: string;
    category: string;
  }[];
}
export default function HomepageSliderControls({ content }: Props) {
  return (
    <div className="rounded-3xl border border-gray-100 flex items-center bg-white w-11/12 p-8 flex justify-between mx-auto h-36 mb-4 -mt-24 relative">
      {content.map((item, index) => {
        const indexValue = Number(index) + 1;
        return (
          <div
            className="slider-item splide__pagination__page flex flex-col"
            key={item.title}
          >
            <h4 className="flex items-center">0 {indexValue}</h4>
            <h2 className="font-bold my-1">{item.title}</h2>
            <p>{item.category}</p>
          </div>
        );
      })}
      <style jsx>
        {`
          .slider-item {
            width: unset;
            background: unset;
            height: unset;
            display: unset;
            margin: 3px;
            opacity: unset;
            padding: unset;
            position: unset;
            transition: unset;
          }
        `}
      </style>
    </div>
  );
}
