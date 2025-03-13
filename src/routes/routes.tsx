import config from '../config';
import Home from '@pages/Home';


interface Route {
    path: string;
    component?: React.ComponentType<unknown> | null;
    layout?: React.ComponentType<unknown> | null;
    title: string;
}
const publicRoutes: Route[] = [
    { path: '/', component: Home, title: 'Home' },
    { path: config.routes.about, title: 'Tour' },
    // { path: config.news, title: 'News' },
    // { path: '*', component: NotFound, layout: DefaultLayout, title: 'Page not found' },
];
export { publicRoutes };
