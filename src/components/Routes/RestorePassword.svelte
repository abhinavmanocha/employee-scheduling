<script>
    import { Link } from "svelte-routing";

    import Input from "../Input.svelte";
    import Button from "../Authorization/Button.svelte";

    export let title;

    let email = "";

    const requestReset = () => {};
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="restore">
    <header class="restore__header">
        <i class="restore__header--logo far fa-calendar-alt" />
        <h4>Schede</h4>
    </header>

    <section>
        <h2>Forgot your password?</h2>
        <p>
            Enter your email address and we will send you instructions to reset
            your email
        </p>
    </section>

    <form action="POST" class="restore__form">
        <Input
            label="Email Address"
            placeholder="Email Address"
            bind:value={email}
            type="text"
            autocomplete="on"
            required
        />

        <Button on:click={requestReset}>Request reset link</Button>
    </form>

    <Link to="/">Back To Login</Link>
</main>

<style>
    .restore {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        text-align: center;
    }

    .restore__header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        transition: all 333ms ease-in;
        color: #2196f3;
        font-size: larger;
    }

    .restore__header--logo {
        margin: 0 1.5rem;
    }
</style>
