<script>
    import { Route } from "svelte-routing";
    import { logged, token } from "../stores";

    import PageNotFound from "./Views/PageNotFound.svelte";

    export let path;
    export let component;

    $: isAuth = $token;
    $: isLogged = $logged;
</script>

{#if isAuth}
    <Route {path} {component} />
{:else}
    <Route {path} component={PageNotFound} />
{/if}
