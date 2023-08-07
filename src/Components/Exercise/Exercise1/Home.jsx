import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/about">About</Link>
        </li>
        <li>
          <Link to="/home/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
