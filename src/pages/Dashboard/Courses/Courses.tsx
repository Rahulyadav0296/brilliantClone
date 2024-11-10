import { useEffect, useState } from "react";
import { courseDetails } from "../../../utils/CourseDetails";
import CourseCategory from "./Course/CourseCategory/CourseCategory";
import CourseForm from "./CourseForm/CourseForm";
import CourseList from "./CourseList/CourseList";
import SearchCourse from "./SearchCourse/SearchCourse";

function Courses() {
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [debounceSearch, setDebounceSearch] = useState<string>("");

  const [filteredList, setFilteredList] = useState<any[]>([]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debounceSearch) {
      const filteredData = courseDetails.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(debounceSearch.toLowerCase())
      );
      console.log(filteredData);
      setOpen(true);
      setFilteredList(filteredData);
    } else {
      setFilteredList(filteredList);
    }
  }, [debounceSearch]);

  return (
    <div className="mx-auto px-2 pt-[140px] md:pt-[10px] md:px-0 flex flex-col mt-28 max-w-[calc(100%-20px)] md:max-w-[calc(100%-260px)]">
      <CourseForm
        search={search}
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <SearchCourse
        filteredList={filteredList}
        open={open}
        onClose={handleClose}
      />
      <CourseCategory />
      <CourseList />
    </div>
  );
}

export default Courses;
