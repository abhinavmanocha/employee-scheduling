<script>
    import { Route } from "svelte-routing";
    import { token } from "../stores";

    import PageNotFound from "./Views/PageNotFound.svelte";

    export let path;
    export let component;

    $: isAuth = $token;
</script>

{#if isAuth}
    <Route {path} {component} />
{:else}
    <Route {path} component={PageNotFound} />
{/if}
