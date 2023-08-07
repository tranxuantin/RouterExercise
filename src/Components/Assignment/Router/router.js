import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import LayoutAssignment from "../MenuAssignment/LayoutAssignment";
import AssignmentLoginForm from "../Assignment1/AssignmentLoginForm";
import AssignmentHomeLogin from "../Assignment1/AssignmentHomeLogin";
import AssignmentFormEmploy from "../Assignment2/AssignmentEmployForm";
import AssignmentEmploy from "../Assignment2/AssignmentEmploy";
import Test123 from "../DoNotTouchThisFile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Test123 />
    },
    {
        path: "/Assignment",
        element: <LayoutAssignment />,
        children: [
            {
                path: routes.web.Assginment1.index,
                element: <AssignmentLoginForm />
            },
            {
                path: routes.web.Assginment1.homeLogin.index,
                element: <AssignmentHomeLogin />
            },
            {
                path: routes.web.Assginment2.index,
                element: <AssignmentFormEmploy />
            },
            {
                path: routes.web.Assginment2.employLogin.index,
                element: <AssignmentEmploy />
            },
        ],
    },
])

export default router