/** @jsx jsx */
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, jsx } from "theme-ui";
import {useTranslation} from "react-i18next";
import { Suspense } from "react";

import routes from "./router";
import Layout from './components/Layout';


function AppComponent() {
    const { t } = useTranslation();
    let d = new Date().getHours();
    let night = d > 18 || d < 7;

    return (
    <Router>
        <div sx={{
            bg: 'muted',
        }}>
            <Container sx={{
                maxWidth: 960
            }}>
                <header
                  sx={{
                      display: 'grid',
                      gridGap: 2,
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      px: 3,
                      py: 4,
                      alignItems: 'center',
                      variant: 'styles.header',
                }}>
                    <div sx={{
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'flex-start',
                    }}>
                        <Link to="/"
                              css={{
                                  background: night ? 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(233,233,233,1) 35%, rgba(210,210,210,1) 100%)' : 'linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                                  '-webkit-background-clip': 'text',
                                  color: 'transparent'
                              }} sx={{
                            variant: 'styles.navlink',
                            px: 3,
                            py: 1,
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            letterSpacing: '0.1em',
                            border: '4px solid transparent',
                            borderImage: (d > 18 || d < 7) ? 'linear-gradient(45deg, rgba(180,180,180,1) 0%, rgba(233,233,233,1) 35%, rgba(255,255,255,1) 100%) 1 round' : 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%) 1 round',
                            color: 'primary'
                        }}>Suzamax</Link>
                    </div>
                    <div sx={{
                        display: 'flex',
                        ml: 'auto',
                        alignItems: 'right',
                        justifyContent: 'flex-end',
                    }}>
                        <Link to="/skills" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: night ? 'white' : 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>{t('skills.title')}</Link>
                        <Link to="/blog" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: night ? 'white' : 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>Blog</Link>
                        <Link to="/about" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: night ? 'white' : 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>{t('about.title')}</Link>
                    </div>
                </header>
            </Container>
        </div>

        <Layout>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Layout>
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