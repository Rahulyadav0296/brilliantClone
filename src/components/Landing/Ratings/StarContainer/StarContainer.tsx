import StarRatings from "../StarRatings/StarRatings";

function StarContainer() {
  return (
    <div className="flex flex-row md:flex-col my-4">
      <div className="text-yellow-500">
        <StarRatings />
      </div>
      <p className="text-[20px]">over 50,000 5-star reviews on</p>
    </div>
  );
}

export default StarContainer;
