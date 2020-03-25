import Skills from "./components/Skills";
import Blog from "./components/Blog";
import About from "./components/About";
import MainPage from "./components/MainPage";

const routes = [
    {
        path: "/skills",
        component: Skills,
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/",
        component: MainPage,
    }
];

export default routes;