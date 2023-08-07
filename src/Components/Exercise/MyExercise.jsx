import { Routes, Route } from "react-router-dom";
import Home from "./Exercise1/Home";
import About from "./Exercise1/About";
import Contact from "./Exercise1/Contact";
import Category from "./Exercise2/Category";
import Product from "./Exercise2/Products";
import Category2 from "./Exercise3/Category2";
import Product2 from "./Exercise3/Product2";
import MenuExercise from "./MenuExercise";

const MyExercise = () => {
  return (
    <>
        <Routes>
          <Route path="/Exercise" element={<MenuExercise />} />

          <Route path="/Exercise/home" element={<Home />} />
          <Route path="/Exercise/home/about" element={<About />} />
          <Route path="/Exercise/home/contact" element={<Contact />} />

          <Route path="/Exercise/category" element={<Category />} />
          <Route
            path="/Exercise/category/product/:categoryId/test/:ID"
            element={<Product />}
          />

          <Route path="/Exercise/catory2" element={<Category2 />} />
          <Route path="/Exercise/categegory2/product2" element={<Product2 />} />
        </Routes>
    </>
  );
};

export default MyExercise;
