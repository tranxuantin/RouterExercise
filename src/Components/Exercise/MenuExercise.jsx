import { Link } from "react-router-dom";

const MenuExercise = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/Exercise/home">Home</Link>
          </li>
          <li>
            <Link to="/Exercise/category">Category</Link>
          </li>
          <li>
            <Link to="/Exercise/category2">Category2</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuExercise;
