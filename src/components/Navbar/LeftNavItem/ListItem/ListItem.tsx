import { FC } from "react";
import { NavLink } from "react-router-dom";

interface ListItemProps {
  children: any;
  url: string;
}

const ListItem: FC<ListItemProps> = ({ children, url }) => {
  return (
    // Navlink here used to show the active page and children contain the detail of the tag element
    <li className="w-full sm:w-auto md:hidden">
      <NavLink
        to={url}
        className={({ isActive }) =>
          `inline-flex items-center justify-center sm:justify-start mx-2 sm:mx-4 py-2 mt-1 border-b-2 ${
            isActive
              ? "border-black font-semibold"
              : "text-gray-800 border-transparent"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default ListItem;
