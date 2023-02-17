import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Home/Login/Login";
import Media from "../../pages/Media/Media";
import PostDetails from "../../pages/PostDetails/PostDetails";
import SignUp from "../../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/media',
                element: <Media />,
                loader: () => {
                    return fetch('http://localhost:5000/posts');
                }
            },
            {
                path: '/posts/:id',
                element: <PostDetails />,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/posts/${params.id}`);
                }
            }
        ]
    }
]);

export default router;