import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";

const categories = [
  { id: 1, course: "New Courses" },
  { id: 2, course: "Math" },
  { id: 3, course: "Data" },
  { id: 4, course: "Computer Science" },
  { id: 5, course: "Science" },
];

const CourseCategory: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const category = useSelector(
    (state: { course: { category: string } }) => state.course.category
  );
  const isOpen = useSelector(
    (state: { auth: { isOpen: false } }) => state.auth.isOpen
  );
  const [activeSection, setActiveSection] = useState<string | null>(category);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (category: any) => {
    setActiveSection(category);
  };

  return (
    <>
      {!isOpen && (
        <div
          className={`${
            isScrolled
              ? "fixed top-[88px] md:top-[80px]"
              : "fixed top-[250px] md:top-[250px]"
          } transition-all duration-75 w-full z-10 flex flex-wrap justify-left gap-4 p-2 cursor-pointer bg-white `}
        >
          {categories.map((category) => (
            <ScrollLink
              key={category.id}
              to={category.course.replace(" ", "").toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => {
                handleCategoryClick(category.course);
              }}
              className={` mr-0 md:mr-3 mt-4 border border-gray-400 p-2 rounded-3xl ${
                activeSection === category.course
                  ? "border-2 border-black font-bold"
                  : "hover:border-black hover:font-bold"
              } `}
            >
              {category.course}
            </ScrollLink>
          ))}
        </div>
      )}
    </>
  );
};

export default CourseCategory;
