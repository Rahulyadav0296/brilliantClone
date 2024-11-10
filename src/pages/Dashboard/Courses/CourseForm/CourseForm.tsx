import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";

interface CourseFormProps {
  search: string;
  onChange: () => void;
}

const CourseForm: FC<CourseFormProps> = ({ search, onChange }) => {
  return (
    <>
      <h1 className="text-[20px] font-bold font-custom">
        Browser all 70+ courses
      </h1>
      <form className="relative mt-4">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="search"
          className="p-2 pl-10 text-black rounded-xl w-full border border-gray-400 focus:ring-2 focus:outline-none focus:ring-black"
          placeholder="Search"
          value={search}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default CourseForm;
