import { RouteObject } from 'react-router-dom';
import HomePage from './components/pages/index';
import NotFoundPage from './components/pages/_404';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

// Types for type-safe navigation
export type Path = '/';

export type Params = Record<string, string | undefined>;
