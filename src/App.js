/** @jsx jsx */
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainPage from "./components/MainPage";
import Layout from './components/Layout';
import Skills from "./components/Skills";
import { Container, jsx } from "theme-ui";
import {useTranslation} from "react-i18next";
import {Suspense} from "react";

function AppComponent() {
    const { t } = useTranslation();

    return (
    <Router>
        <div sx={{
            bg: 'gray',
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
                                  background: 'linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
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
                            borderImage: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%) 1 round',
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
                            color: 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>{t('skills.title')}</Link>
                        <Link to="/blog" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>Blog</Link>
                        <Link to="/about" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: 'primary',
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
                <Route path="/skills">
                  <Skills/>
                </Route>
                <Route path="/blog">
                  <div>blog</div>
                </Route>
                <Route path="/">
                  <MainPage/>
                </Route>
            </Switch>
        </Layout>
    </Router>
  );
}

export default function App() {
    return (
        <Suspense fallback="...">
            <AppComponent/>
        </Suspense>
    );
}