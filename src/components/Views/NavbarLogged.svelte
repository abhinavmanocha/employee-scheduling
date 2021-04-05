<script>
    import { getContext } from "svelte";
    import { Router, Link, link } from "svelte-routing";

    import LogoutConfirm from "../Modal/ModalViews/LogoutConfirm.svelte";

    const { open } = getContext("simple-modal");

    const logout = () => {
        open(LogoutConfirm, { type: LogoutConfirm });
    };
</script>

<nav class="navbar">
    <ul class="navbar__nav">
        <li class="nav__item">
            <a href={"/app/schedules"} class="nav__link" use:link>
                <div class="link__icon">
                    <i class="far fa-calendar-alt fa-2x" />
                </div>
                <span class="link__text">Schedules</span>
            </a>
        </li>

        <li class="nav__item">
            <a href={"/app/squads"} class="nav__link" use:link>
                <div class="link__icon">
                    <i class="fas fa-users fa-2x" />
                </div>
                <span class="link__text">Squads</span>
            </a>
        </li>

        <li class="nav__item">
            <a href={"/app/employees"} class="nav__link" use:link>
                <div class="link__icon">
                    <i class="fas fa-layer-group fa-2x" />
                </div>
                <span class="link__text">Employees</span>
            </a>
        </li>

        <li class="nav__item">
            <a href={"/app/user"} class="nav__link" use:link>
                <div class="link__icon">
                    <i class="fas fa-user-alt fa-2x" />
                </div>
                <span class="link__text">User</span>
            </a>
        </li>

        <li class="nav__item">
            <a href={"/app/help"} class="nav__link" use:link>
                <div class="link__icon">
                    <i class="fab fa-teamspeak fa-2x" />
                </div>
                <span class="link__text">Help</span>
            </a>
        </li>

        <li class="nav__item nav__item--logout" on:click={logout}>
            <a href={"#"} class="nav__link">
                <div class="link__icon">
                    <i class="fas fa-sign-out-alt fa-2x" />
                </div>
                <span class="link__text">Sign out</span>
            </a>
        </li>
    </ul>
</nav>

<style>
    :root {
        --text-primary: #2196f3;
        --text-secondary: #fafafa;
        --bg-primary: #fafafa;
        --bg-secondary: #2196f3;
        --transition-speed: 600ms;
    }

    .navbar {
        position: fixed;
        background-color: #eeeeee;
        transition: width 600ms ease;
        overflow: hidden;
        z-index: 999;
    }

    .navbar__nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .link__icon {
        width: 100%;
        align-items: center;
        text-align: center;
    }

    .navbar:hover .link__icon {
        width: 50%;
    }

    .nav__item {
        width: 100%;
    }

    .nav__item:last-child {
        margin-top: auto;
    }

    .nav__link {
        display: flex;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;
        filter: grayscale(100%);
        transition: var(--transition-speed);
    }

    .nav__link:hover {
        filter: grayscale(0%);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }

    .link__text {
        display: none;
        /* margin: 0 auto; */
        text-align: left;
        text-transform: uppercase;
        font-size: 1.15rem;
        font-weight: bolder;
    }

    @media screen and (max-width: 798px) {
        .navbar {
            bottom: 0;
            width: 100vw;
            height: 5rem;
        }

        .navbar__nav {
            flex-direction: row;
        }

        .nav__link {
            justify-content: center;
        }
    }

    @media screen and (min-width: 798px) {
        .navbar {
            top: 0;
            width: 5rem;
            height: 100vh;
        }

        .navbar:hover {
            width: 18rem;
        }

        .navbar:hover .link__text {
            display: inline;
        }
    }
</style>
