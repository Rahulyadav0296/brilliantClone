import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function ProgressBar() {
  return (
    <>
      <div className="flex flex-col items-center p-3 sm:flex-row sm:ml-10 justify-between">
        <div className="w-full max-w-xs sm:max-w-md h-3 bg-gray-300 rounded-full overflow-hidden mt-2 sm:mt-0">
          <div
            className="bg-gradient-to-r from-sky-500 to-green-500 h-full rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>
        <div className="text-center sm:text-right font-bold text-green-700 flex items-center mt-2 sm:mt-0">
          85
          <AutoAwesomeIcon />
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
