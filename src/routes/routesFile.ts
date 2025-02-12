import { LazyPage1, LazyPage2, LazyPage3 } from "../01lazeload/pages";

interface Route {
    to: string;
    path: string;
    name: string;
    Component: () => JSX.Element;
}

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: "/lazy1",
        Component: LazyPage1,
        name: "lazy-1",
    },
    {
        to: "/lazy2",
        path: "/lazy2",
        Component: LazyPage2,
        name: "lazy-2",
    },
    {
        to: "/lazy3",
        path: "/lazy3",
        Component: LazyPage3,
        name: "lazy-3",
    },
];
