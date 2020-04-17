/** @jsx jsx */
import { jsx } from "theme-ui";
import { Suspense } from "react";

import Skills from "./components/Skills";
import About from "./components/About";
import MainPage from "./components/MainPage";
import CV from "./components/CV";

import Footer from './components/Layout/Footer';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';

function AppComponent() {
    return (
    <div>
        <Header/>
        <Layout>
            <MainPage />
            <About />
            <Skills />
            <CV />
        </Layout>
        <Footer sx={{
            width: '100%',
            variant: 'layout.footer',
        }}/>
    </div>
  );
}

export default function Main() {
    return (
        <Suspense fallback="...">
            <AppComponent/>
        </Suspense>
    );
}
