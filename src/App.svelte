<script>
    import { Router, Route } from "svelte-routing";
    import { token } from "./stores";

    import ProtectedRoute from "./components/ProtectedRoute.svelte";
    import Modal from "./components/Modal/Modal.svelte";

    import Home from "./components/Routes/Home.svelte";
    import RestorePassword from "./components/Routes/RestorePassword.svelte";
    import PageNotFound from "./components/Routes/PageNotFound.svelte";

    import NavbarLogged from "./components/Views/NavbarLogged.svelte";
    import Schedules from "./components/Routes/private/Schedules.svelte";
    import Squads from "./components/Routes/private/Squads.svelte";
    import Employees from "./components/Routes/private/Employees.svelte";
    import User from "./components/Routes/private/User.svelte";
    import Help from "./components/Routes/private/Help.svelte";

    export let url = "";
    let path = window.location.pathname.split("/");
    let routes = ["schedules", "squads", "employees", "user", "help"];

    $: isAuth = $token;
</script>

<Router {url}>
    {#if isAuth && path[1] == "app" && routes.includes(path[2])}
        <Modal>
            <NavbarLogged />

            <ProtectedRoute path="/app/schedules" component={Schedules} />
            <ProtectedRoute path="/app/squads" component={Squads} />
            <ProtectedRoute path="/app/employees" component={Employees} />
            <ProtectedRoute path="/app/user" component={User} />
            <ProtectedRoute path="/app/help" component={Help} />
        </Modal>
    {:else}
        <Route path="/">
            <Home title="Home | Employee Scheduling" />
        </Route>

        <Route path="restore-password">
            <RestorePassword title="Restore Password | Employee Scheduling" />
        </Route>

        <Route path="*">
            <PageNotFound title="Page not Found | Employee Scheduling" />
        </Route>
    {/if}
</Router>
