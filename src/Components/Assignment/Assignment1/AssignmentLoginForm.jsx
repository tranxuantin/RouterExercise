import { useNavigate } from "react-router-dom";
import routes from "../Router/routes";

const AssignmentLoginForm = () => {
  const navigate = useNavigate();

  const handleClickAssignmentLoginForm = (event) => {
    const EmailLoginForm = document.getElementById(
      "AssignmentLoginFormEmail"
    ).value;
    const PasswordLoginForm = document.getElementById(
      "AssignmentLoginFormPassword"
    ).value;

    if (
      EmailLoginForm === "admin@gmail.com" &&
      PasswordLoginForm === "letmein"
    ) {
      navigate(routes.web.Assginment1.homeLogin.index, { replace: true });
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
        <input id="AssignmentLoginFormEmail" type="text" />

        <label htmlFor="">Password</label>
        <input id="AssignmentLoginFormPassword" type="password" />
      </div>

      <button type="submit" onClick={handleClickAssignmentLoginForm}>
        Submit
      </button>
    </>
  );
};

export default AssignmentLoginForm;
