<script>
    import { Router, Route } from "svelte-routing";

    import Home from "./components/Routes/Home.svelte";
    import ProtectedRoute from "./components/ProtectedRoute.svelte";
    import Dashboard from "./components/Routes/Dashboard.svelte";
    import PageNotFound from "./components/Routes/PageNotFound.svelte";
    import RestorePassword from "./components/Routes/RestorePassword.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route path="/">
        <Home title="Home | Employee Scheduling" />
    </Route>

    <Route path="restore-password">
        <RestorePassword title="Restore Password | Employee Scheduling" />
    </Route>

    <ProtectedRoute path="/dashboard" component={Dashboard} />

    <Route path="*">
        <PageNotFound title="Page not Found | Employee Scheduling" />
    </Route>
</Router>
