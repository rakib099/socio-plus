import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Media from "../../pages/Media/Media";
import Messages from "../../pages/Messages/Messages";
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
                    return fetch('https://socio-plus-server.vercel.app/posts');
                }
            },
            {
                path: '/posts/:id',
                element: <PostDetails />,
                loader: ({params}) => {
                    return fetch(`https://socio-plus-server.vercel.app/posts/${params.id}`);
                }
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/messages',
                element: <Messages />
            }
        ]
    }
]);

export default router;