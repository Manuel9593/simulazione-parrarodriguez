import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Error from "../pages/error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    }
])

export default router