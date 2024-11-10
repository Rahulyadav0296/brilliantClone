import { Backdrop, Box, Modal } from "@mui/material";
import { FC } from "react";

interface SearchCourseProps {
  filteredList: any[];
  open: boolean;
  onClose?: () => void;
}

const SearchCourse: FC<SearchCourseProps> = ({
  filteredList,
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.0)",
          },
        },
      }}
    >
      <Box className="absolute top-[67%] md:top-[57%] mt-8 md:mt-4 flex flex-wrap justify-center md:justify-start left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[83%] bg-white opacity-100 h-[400px] overflow-y-auto rounded-2xl shadow-2xl">
        {filteredList.length > 0 ? (
          filteredList.map((course: any) => (
            <div
              key={course.id}
              className="mx-4 my-6 flex flex-col justify-center items-center text-center h-[280px] w-[200px] rounded-2xl p-4 shadow-md"
            >
              <div className="relative cursor-pointer rounded-2xl border border-b-4 border-gray-400 p-4 w-full h-[180px]">
                {course.category === "New Courses" && (
                  <p className="absolute top-[5px] right-[5px] bg-green-500 text-white text-sm px-2 py-1 rounded-md shadow-lg">
                    New
                  </p>
                )}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[100px] object-cover shadow-md"
                />
              </div>
              <h3 className="text-center w-full mt-4 text-md font-semibold">
                {course.title}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-center items-center justify-center font-custom font-bold mt-6">
            No Courses Available
          </p>
        )}
      </Box>
    </Modal>
  );
};

export default SearchCourse;
