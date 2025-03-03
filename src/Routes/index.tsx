import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutRoutes from './LayoutRoutes';
import MainAuth from '../app/Auth/Main';
import { Logins } from '../app/Auth/Login';
import ErrorAuth from '../app/Error/ErrorAuth';
import Register from '../app/Auth/Register';
import ResetPassword from '../app/Auth/ResetPassword';
import { ActionLogin } from '../app/Action/Index';
import Dasboard_v1 from '../app/Dasboard/Dasboard_v1';
import { LoaderAuth } from '../app/Loader/indexLoader';
import Profile from '../app/Component/Auth/Profile';
import { LayoutDasboard } from '../app/Dasboard/LayoutDasboard';

const Routerd  = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoutes/>,
        id: 'autho',
        loader: LoaderAuth,
        errorElement: <h1>Error Pages</h1>,
        children:[
            {
                path: 'auth',
                errorElement: <h1>Errors...</h1>,
                children: [
                    {
                        index: true,
                        element: <h1>Index Pages</h1>
                    },
                    {
                        path: 'login',
                        action: ActionLogin,
                        element: <Logins/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'register',
                        element: <Register/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'reset-password',
                        element: <ResetPassword/>,
                        errorElement: <ErrorAuth/>
                    }
                ]
            },
            {
                path: 'dasboard',
                element: <LayoutDasboard/>,
                errorElement: <ErrorAuth/>,
                children:[
                    {
                        index: true,
                        element: <Dasboard_v1/>
                    },
                    {
                        path: 'profile',
                        element: <Profile/>
                    }
                ]
            },
            {
                path: 'subscribtion',
                element: <h1>Payment</h1>
            }
        ]
    }
]);

export default function RoutesActivation(){
    return <RouterProvider router={Routerd}/>
}