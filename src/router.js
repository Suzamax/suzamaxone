import Skills from "./components/Skills";
import About from "./components/About";
import MainPage from "./components/MainPage";
import CV from "./components/CV";

const routes = [
    {
        path: "/skills",
        component: Skills,
    },
    {
        path: "/cv",
        component: CV,
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
