import { Outlet } from "react-router-dom";
import MenuAssignment from "./MenuAssignment";

const LayoutAssignment = () => {
  return (
    <>
      <MenuAssignment />
      <Outlet />
    </>
  );
};

export default LayoutAssignment;
