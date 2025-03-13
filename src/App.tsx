import { ReactNode, useLayoutEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router';
import { PublicRoutes } from './routes';
import { DefaultLayout } from './layout';

const Wrapper = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};
function App() {
    return (
        <Router>
            <Wrapper>
                <div className="App">
                    <Routes>
                        {PublicRoutes.map((route, index) => {
                            const Page = route.component;
                            const Layout = DefaultLayout; //
                            // if (route.layout) {
                            //     Layout = route.layout;
                            //     console.log("aaaaa");
                                
                            // } else if (route.layout === null) {
                            //     console.log("bbbbbb");
                                
                            //     Layout = <></>;
                            // }
                            // console.log("Layout",Layout);
                            
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={Layout && <Layout>{Page && <Page />}</Layout>}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Wrapper>
        </Router>
    );
}

export default App;
