import { routes, idIncrement } from "./others/store";

import Home from "./components/Home.svelte";
import LoginForm from "./components/Authorization/Views/LoginForm.svelte";
import SignupForm from "./components/Authorization/Views/SignupForm.svelte";
import PageNotFound from "./components/Views/PageNotFound.svelte";

const routes = [
    {
        path: '/',
        component: Home,
        title: 'Home | Employee Scheduling'
    },
    {
        path: 'sign-up',
        component: LoginForm,
        title: 'Sign up | Employee Scheduling'
    },
    {
        path: 'sign-in',
        component: SignupForm,
        title: 'Sign In | Employee Scheduling'
    },
    {
        path: '*',
        component: PageNotFound,
        title: '404 | Employee Scheduling'
    },
];

export default routes;