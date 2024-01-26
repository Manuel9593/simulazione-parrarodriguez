import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/error/Error";
import Movies, { loader as moviesLoader} from "../pages/Movies"
import MovieDetails, { loader as detailLoader} from "../pages/MovieDetails";

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
    },
    {
        path: '/movies/:movieId',
        element: <MovieDetails />,
        loader: detailLoader
    }
])

export default router