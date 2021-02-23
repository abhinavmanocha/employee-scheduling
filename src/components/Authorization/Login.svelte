<script>
    import { navigate } from "svelte-routing";
    import LoginForm from "./LoginForm.svelte";
    import SignupForm from "./SignupForm.svelte";

    let currentView = LoginForm;

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

<main class="container">
    <div class="container__logo">
        <img src="" alt="Employee Scheduling app logo" />
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
        display: inline-flex;
        position: relative;
        overflow: hidden;
        max-width: 100%;
    }

    .container__nav--bttn {
        background: none;
        border: none;
        cursor: pointer;
        color: black;
        text-transform: uppercase;
        font-weight: 600;
        margin: 1.5rem;
    }

    .container__nav--bttn:hover {
    }
</style>
