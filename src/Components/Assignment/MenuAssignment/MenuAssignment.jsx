import { Link } from "react-router-dom";
import routes from "../Router/routes";

const MenuAssignment = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.web.Assginment1.index}>Assignment 1</Link>
        </li>
        <li>
          <Link to={routes.web.Assginment2.index}>Assignment 2</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuAssignment;
