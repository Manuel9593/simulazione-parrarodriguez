import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/error/Error";
import Movies, { loader as moviesLoader} from "../pages/Movies"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '/movies',
        element: <Movies />,
        loader: moviesLoader
    }
])

export default router