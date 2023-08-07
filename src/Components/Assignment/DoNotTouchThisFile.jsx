import { Link } from "react-router-dom";
import routes from "./Router/routes";

const Test123 = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.web.Type.Assginment.index}>Assignment</Link>
        </li>
      </ul>
    </>
  );
};

export default Test123;
