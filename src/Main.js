/** @jsx jsx */
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { jsx } from "theme-ui";
import { Suspense } from "react";

import routes from "./router";
import Footer from './components/Layout/Footer';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';

function AppComponent() {
    return (
    <Router>
        <Header/>
        <Layout>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Layout>
        <Footer
            sx={{
                width: '100%',
                variant: 'layout.footer',
            }}/>
    </Router>
  );
}

export default function Main() {
    return (
        <Suspense fallback="...">
            <AppComponent/>
        </Suspense>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} />
            )}
        />
    );
}