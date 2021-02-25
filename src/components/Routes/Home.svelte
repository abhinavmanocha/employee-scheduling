<script>
    import { getContext, onMount } from "svelte";
    import { Link, navigate } from "svelte-routing";
    import { token } from "../../stores";

    import ModalLogin from "../Authorization/ModalLogin.svelte";
    import SignupForm from "../Authorization/SignupForm.svelte";
    import LoginForm from "../Authorization/LoginForm.svelte";

    export let title;

    const { open } = getContext("simple-modal");

    const showLoginScreen = () => {
        open(ModalLogin, { type: LoginForm });
    };

    const showSignUpScreen = () => {
        open(ModalLogin, { type: SignupForm });
    };

    const login = () => {
        localStorage.setItem("token", "1");
        token.set(localStorage.getItem("token"));

        navigate("/dashboard", { replace: true });
    };

    onMount(() => {});
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<nav class="nav">
    <header class="nav__header">
        <i class="nav__logo far fa-calendar-alt" />
        <h4>Schede</h4>
    </header>

    <div class="nav__container">
        <button on:click={showLoginScreen} class="nav__bttn nav__bttn--signin"
            >Sign In</button
        >
        <button on:click={showSignUpScreen} class="nav__bttn nav__bttn--signup"
            >Sign Up</button
        >
    </div>

    <div class="nav__bttn--burger">
        <div class="burger__layer layer1" />
        <div class="burger__layer layer2" />
        <div class="burger__layer layer3" />
    </div>
</nav>

<Link to="dashboard">Go to dashboard</Link>

<button on:click={login}>Login</button>

<style>
    .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 10vh;
    }

    .nav__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        transition: all 333ms ease-in;
        color: #2196f3;
    }

    .nav__logo, h4{
        margin: 0 auto;
    }

    .nav__container {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        z-index: 1;
    }

    .nav__bttn--burger {
        display: none;
        cursor: pointer;
        padding: 1rem;
    }

    .nav__bttn {
        background-color: transparent;
        color: #2196f3;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 1rem;
        margin: 0 1rem 0 1rem;
    }

    .burger__layer {
        width: 25px;
        height: 3px;
        margin: 5px;
        background-color: #2196f3;
        transition: all 0.3s ease;
    }

    .nav__active {
        transform: translateX(0%);
    }

    @keyframes navFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    @media screen and (max-width: 768px) {
        nav {
            overflow-x: hidden;
        }

        .nav__header {
            padding: 1rem;
        }

        .nav__container {
            position: absolute;
            top: 10vh;
            right: 0px;
            height: 50vh;
            width: 50%;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            background-color: whitesmoke;
            transform: translateX(100%);
            transition: 0.5s ease-in;
        }

        .nav__bttn--burger {
            display: block;
            padding: 1rem;
        }
    }
</style>
