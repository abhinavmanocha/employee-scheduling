<script>
    import { getContext, onMount } from "svelte";
    import { link } from "svelte-routing";

    import ModalLogin from "../Authorization/ModalLogin.svelte";
    import SignupForm from "../Authorization/SignupForm.svelte";
    import LoginForm from "../Authorization/LoginForm.svelte";

    const { open } = getContext("simple-modal");

    let toggle = false;
    let navElem;
    let burgerElem;

    const showLoginScreen = () => {
        open(ModalLogin, { type: LoginForm });
    };

    const showSignUpScreen = () => {
        open(ModalLogin, { type: SignupForm });
    };

    const closeNav = () => {
        navElem.classList.remove("nav__main--open");
        burgerElem.classList.remove("open");
    };
</script>

<header class="nav">
    <div class="nav__container">
        <h4 class="nav__header">
            <i class="nav__logo far fa-calendar-alt" />
            Schede
        </h4>

        <nav
            class="nav__main"
            class:nav__main--open={toggle}
            bind:this={navElem}
        >
            <ul class="nav__main--wrapper">
                <li>
                    <a href="/" class="nav__bttn" use:link>
                        <i class="fas fa-home nav__bttn--icon" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" class="nav__bttn" use:link>
                        <i class="fas fa-info-circle nav__bttn--icon" />
                        About
                    </a>
                </li>
                <li>
                    <a href="contact" class="nav__bttn" use:link>
                        <i class="fas fa-envelope nav__bttn--icon" />
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href={"#"}
                        on:click={showLoginScreen}
                        class="nav__bttn nav__bttn--signin"
                    >
                        <i class="fas fa-sign-in-alt nav__bttn--icon" class:icon--toggle={!toggle} />
                        Sign In
                    </a>
                </li>
                <li>
                    <a
                        href={"#"}
                        on:click={showSignUpScreen}
                        class="nav__bttn nav__bttn--signup"
                    >
                        <i class="fas fa-plus-circle nav__bttn--icon" class:icon--toggle={!toggle} />
                        Sign Up
                    </a>
                </li>
            </ul>
        </nav>

        <div
            class="nav__toggle"
            on:click={() => (toggle = !toggle)}
            class:open={toggle}
            bind:this={burgerElem}
        >
            <div class="nav__bttn--burger" />
        </div>
    </div>
</header>

<style>
    :root {
        --mainColor: #2196f3;
        --secColor: #fafafa;
    }

    .nav {
        position: relative;
        padding: 1em 0;
        background: var(--mainColor);
        color: #ebebd3;
    }

    .nav::after {
        content: "";
        clear: both;
        display: block;
    }

    .nav__container {
        width: 95%;
        max-width: 1000px;
        margin: 0 auto;
    }

    .nav__header {
        float: left;
        font-size: 1.125rem;
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        font-weight: 700;
    }

    .nav__header i {
        font-weight: 400;
    }

    .nav__main {
        position: absolute;
        top: 100%;
        right: 0%;
        background: var(--mainColor);
        clip-path: circle(0px at top right);
        transition: clip-path ease-in-out 700ms;
    }

    .nav__main--open {
        clip-path: circle(225% at top right);
    }

    .nav__main ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav__main li {
        border-bottom: 1px solid #ebebd3;
    }

    .nav__main li:last-child {
        border-bottom: none;
    }

    .nav__main a {
        display: block;
        padding: 2em 4em 2em 1.5em;
        color: #ebebd3;
        text-decoration: none;
        text-transform: uppercase;
    }

    .nav__bttn:hover,
    .nav__bttn:focus {
        color: #575766;
    }

    .nav__bttn {
        padding: 0 2em;
        text-transform: uppercase;
        font-weight: 600;
    }

    .nav__bttn:hover {
        cursor: pointer;
    }

    .nav__bttn--icon {
        display: inline-block;
        width: 1.1em;
        margin-right: 1em;
        text-align: right;
        color: rgba(252, 252, 252, 0.815);
        font-size: 1.5em;
    }

    .nav__toggle {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        padding: 1em;
        cursor: pointer;
    }

    .nav__bttn--burger,
    .nav__bttn--burger::before,
    .nav__bttn--burger::after {
        content: "";
        display: block;
        height: 3px;
        width: 1.75em;
        border-radius: 3px;
        background: #ebebd3;
        transition: all ease-in-out 500ms;
    }

    .nav__bttn--burger::before {
        transform: translateY(-6px);
    }

    .nav__bttn--burger::after {
        transform: translateY(3px);
    }

    .open .nav__bttn--burger {
        transform: rotate(45deg);
    }

    .open .nav__bttn--burger::before {
        opacity: 0;
    }

    .open .nav__bttn--burger::after {
        transform: translateY(-3px) rotate(-90deg);
    }

    @media (min-width: 761px) {
        .nav__toggle {
            display: none;
        }

        .nav__main {
            position: relative;
            background: transparent;
            height: auto;
            float: right;
            clip-path: initial;
        }

        .nav__main li {
            display: inline-block;
            border: none;
        }

        .nav__main a {
            padding: 0;
            margin-left: 3em;
        }

        .nav__main a:hover,
        .nav__main a:focus {
            background: transparent;
        }

        .nav__bttn--icon {
            display: none;
        }

        .icon--toggle {
            position: relative;
            display: inline-block;
            text-align: center;
            margin: 0;
            top: 3px;
            left: -1px;
            padding: 0;
            width: 1rem;
            color: var(--secColor);
        }
    }
</style>
