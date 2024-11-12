import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from "./ListItem/ListItem";

function LeftNavItem() {
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );

  return (
    <ul className="flex flex-col sm:flex-row justify-between items-center sm:ml-8 text-[20px] mt-4 w-full sm:w-[450px] px-1">
      <li className="text-[28px] sm:text-[35px] mb-2 sm:mb-0">
        <Link
          to="/"
          className="flex items-center text-[40px] text-gray-800 font-bold no-underline"
        >
          Brilliant
        </Link>
      </li>
      {token.length > 0 && (
        <>
          {/* for reducing the code line define the component ListItem which show the information of the list  */}
          <ListItem url="/home">
            <HomeIcon className="mr-2" />
            <span>Home</span>
          </ListItem>
          <ListItem url="/courses">
            <LibraryBooksIcon className="mr-2" />
            <span>Courses</span>
          </ListItem>
        </>
      )}
    </ul>
  );
}

export default LeftNavItem;
