import { RouteObject } from 'react-router-dom';
import HomePage from './components/pages/index';
import GoatsPage from './components/pages/goats';
import NotFoundPage from './components/pages/_404';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/goats',
        element: <GoatsPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

// Types for type-safe navigation
export type Path = '/' | '/goats';

export type Params = Record<string, string | undefined>;
