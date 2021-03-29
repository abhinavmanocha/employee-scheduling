<script>
    import { Router, Route } from "svelte-routing";
    import { token } from "../stores";

    import ProtectedRoute from "./components/ProtectedRoute.svelte";
    import Modal from "./components/Modal/Modal.svelte";

    import Home from "./components/Routes/Home.svelte";
    import RestorePassword from "./components/Routes/RestorePassword.svelte";
    import PageNotFound from "./components/Routes/PageNotFound.svelte";

    import Help from "./components/Routes/private/Help.svelte";
    import Schedules from "./components/Routes/private/Schedules.svelte";
    import Squads from "./components/Routes/private/Squads.svelte";
    import NavbarLogged from "./components/Views/NavbarLogged.svelte";
    import Footer from "./components/Views/Footer.svelte";

    export let url = "";

    $: isAuth = $token;
</script>

<Router {url}>
    <Route path="/">
        <Home title="Home | Employee Scheduling" />
    </Route>

    <Route path="restore-password">
        <RestorePassword title="Restore Password | Employee Scheduling" />
    </Route>

    <Route path="*">
        <PageNotFound title="Page not Found | Employee Scheduling" />
    </Route>

    {#if isAuth}
        <Modal>
            <NavbarLogged />
        </Modal>

        <ProtectedRoute path="schede/schedules" component={Schedules} />
        <ProtectedRoute path="schede/squads" component={Squads} />
        <ProtectedRoute path="schede/lorem" component={Squads} />
        <ProtectedRoute path="schede/user" component={Squads} />
        <ProtectedRoute path="schede/help" component={Help} />

        <Footer />
    {/if}
</Router>
