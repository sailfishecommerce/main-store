interface Props {
  barWidth: number;
  count: number;
}
export default function ReviewBars({ barWidth, count }: Props) {
  return (
    <div className="review-bar flex items-center my-2">
      <h4 className="count mr-6">{count}</h4>
      <div className="w-full bg-gray-200  rounded-full h-2.5">
        <div className="bar bg-mountain-green h-2.5 rounded-full" />
      </div>
      <p className="ml-6 w-12">{barWidth} %</p>
      <style jsx>
        {`
          .bar {
            width: ${barWidth}%;
          }
        `}
      </style>
    </div>
  );
}
