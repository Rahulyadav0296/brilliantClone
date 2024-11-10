import Charts from "./Charts/Charts";
import ProgressBar from "./PrograssBar/ProgressBar";

function IpadVisual() {
  return (
    <div className="my-4 mx-2 px-2 pt-1 pb-4 border border-black border-b-8 border-r-8 rounded-xl w-full sm:w-[75%] md:w-[60%] lg:w-[50%] flex flex-col">
      {/* show progress bar details */}
      <ProgressBar />
      <hr />
      {/* charts of the calculus through image? */}
      <Charts />
    </div>
  );
}

export default IpadVisual;
