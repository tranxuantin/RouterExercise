import { useNavigate } from "react-router-dom";
import routes from "../Router/routes";

const AssignmentFormEmploy = () => {
  const navigate = useNavigate();

  const handleClickAssignmentLoginForm = (event) => {
    const EmailFormEmploy = document.getElementById(
      "AssignmentFormEmployEmail"
    ).value;
    const PasswordFormEmploy = document.getElementById(
      "AssignmentFormEmployPassword"
    ).value;

    if (
      EmailFormEmploy === "admin@gmail.com" &&
      PasswordFormEmploy === "letmein"
    ) {
      navigate(routes.web.Assginment2.employLogin.index, { replace: true });
    }
  };

  return (
    <>
      <div>
        <p>Email: admin@gmail.com</p>
        <p>Password: letmein</p>
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input id="AssignmentFormEmployEmail" type="text" />

        <label htmlFor="">Password</label>
        <input id="AssignmentFormEmployPassword" type="password" />
      </div>

      <button type="submit" onClick={handleClickAssignmentLoginForm}>
        Submit
      </button>
    </>
  );
};

export default AssignmentFormEmploy;
