interface Props {
  barWidth: number;
  count: number;
}
export default function ReviewBars({ barWidth, count }: Props) {
  return (
    <div className="review-bar flex items-center my-2">
      <h4 className="count mr-6">{count}</h4>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: `${barWidth}` }}
        />
        <p className="ml-6">{barWidth} %</p>
      </div>
    </div>
  );
}
