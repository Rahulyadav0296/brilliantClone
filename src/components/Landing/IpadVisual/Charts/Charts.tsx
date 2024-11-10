import FunctionsIcon from "@mui/icons-material/Functions";
function Charts() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-0">
      <img
        src="https://www.researchgate.net/profile/Wen-Ran-Zhang/publication/368570834/figure/fig1/AS:11431281126471178@1678730016679/a-Cartesian-coordinate-b-Imaginary-and-complex-numbers.png"
        alt="calculus graph"
        className="my-4 w-full max-w-xs sm:max-w-md" // Adjusts width on mobile
      />
      {/* calculus div block for show purpose  */}
      <div className="flex items-center justify-center space-x-2 bg-gray-300 p-2 rounded-3xl text-gray-800 text-sm sm:text-base mt-4">
        <FunctionsIcon />
        <span>Calculus</span>
      </div>
    </div>
  );
}

export default Charts;
