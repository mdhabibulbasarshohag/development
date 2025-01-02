import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Users from '../pages/Users/Users';
import Countries from '../pages/Countries/Countries';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/countries',
                element: <Countries />
            }
        ]
    }
]) 
