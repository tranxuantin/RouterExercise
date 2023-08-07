import { useNavigate, useLocation } from "react-router-dom";
function Product2() {
  const { state } = useLocation();
  let navigate = useNavigate();

  return (
    <div>
      <h3>Id selected {state.categoryId} </h3>

      <h2>Select a Category:</h2>
      <select
        defaultValue="default"
        onChange={(event) =>
          navigate("/category2/product2", {
            state: { categoryId: event.target.value },
          })
        }
      >
        <option value="default" disabled hidden>
          Choose your car
        </option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </div>
  );
}

export default Product2;
