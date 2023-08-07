import { RouterProvider } from "react-router-dom";
import router from "./Router/router";


const Assignment = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Assignment;
