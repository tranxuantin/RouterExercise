import { useParams } from "react-router-dom";

function Product() {
  let { categoryId, ID } = useParams();
  return (
    <div>
      <h3>
        Id selected: {categoryId}, ID:{ID}
      </h3>
    </div>
  );
}
export default Product;
