<script>
    import { Router, Route } from "svelte-routing";
    import Modal from "./components/Modal/Modal.svelte";

    import ProtectedRoute from "./components/ProtectedRoute.svelte";
    import Dashboard from "./components/Routes/Dashboard.svelte";
    import Home from "./components/Routes/Home.svelte";
    import PageNotFound from "./components/Views/PageNotFound.svelte";
    import Login from "./components/Authorization/ModalLogin.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route path="/">
        <Modal>
            <Home title="Home | Employee Scheduling" />
        </Modal>
    </Route>

    <ProtectedRoute path="/dashboard" component={Dashboard} />

    <Route path="login">
        <Login />
    </Route>

    <Route path="*">
        <PageNotFound title="404 Page not Found | Employee Scheduling" />
    </Route>
</Router>
