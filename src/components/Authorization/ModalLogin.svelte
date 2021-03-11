<script>
    import { Link } from "svelte-routing";
    import { fade, fly } from "svelte/transition";

    import SignupForm from "./SignupForm.svelte";
    import LoginForm from "./LoginForm.svelte";

    export let type;

    let currentView = type;

    const signIn = () => {
        currentView = LoginForm;
    };

    const signUp = () => {
        currentView = SignupForm;
    };
</script>

<svelte:head>
    <title>Join Us! | Employee Scheduling</title>
</svelte:head>

<main class="container" in:fly={{ x: -500, duration: 1000 }} out:fade>
    <div class="container__logo">
        <Link to="/">
            <i class="far fa-calendar-alt" />
        </Link>
    </div>
    <nav class="container__nav">
        <span class="container__nav--bttn" on:click={signIn}>Sign in</span>
        <span class="container__nav--bttn" on:click={signUp}>Sign up</span>
    </nav>

    <svelte:component this={currentView} />
</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
    }

    .container__nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        overflow: hidden;
        max-width: 100%;
    }

    .container__nav--bttn {
        position: relative;
        background: none;
        border: none;
        cursor: pointer;
        color: black;
        text-transform: uppercase;
        font-weight: 600;
        margin: 1.25rem 1.75rem;
    }

    .container__nav--bttn::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0px;
        bottom: -4px;
        background-color: #2196f3;
        width: 0%;
        height: 4px;
        transition: all 500ms;
    }

    .container__nav--bttn:hover::after {
        width: 100%;
    }

    .container__logo {
        font-size: 5rem;
        filter: brightness(135%);
    }
</style>
