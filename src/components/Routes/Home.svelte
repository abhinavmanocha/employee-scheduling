<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { Link, navigate } from "svelte-routing";

    import { token } from "../../stores";
    import Modal from "../Modal/Modal.svelte";

    import Navbar from "../Views/Navbar.svelte";
    import Footer from "../Views/Footer.svelte";

    export let title;

    const login = () => {
        localStorage.setItem("token", "1");
        token.set(localStorage.getItem("token"));

        navigate("/dashboard", { replace: true });
    };
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="home">
    <Modal>
        <Navbar />
    </Modal>

    <section class="home__section">
        <div class="home__showcase" in:fade={{ duration: 1250 }}>
            <!-- <h1 in:fly={{ x: -200, duration: 500 }}>
                <i class="nav__logo far fa-calendar-alt" />
                Schede
            </h1> -->
        </div>

        <div class="home__about" id="about" name="about">adsasda</div>

        <div class="home__boxes">
            <div class="box">
                <i class="fas fa-handshake fa-4x" />
                <h3>Easy to use</h3>
                <p>
                    Schede is easy to use. Interface is intuitive, buttons are clearly visible and big.
                </p>
            </div>

            <div class="box">
                <i class="fas fa-chart-pie fa-4x" />
                <h3>Analytics</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero, hic.
                </p>
            </div>

            <div class="box">
                <i class="fas fa-users fa-4x" />
                <h3>Free</h3>
                <p>Schede is free, you don't have to pay for anything.</p>
            </div>
        </div>

        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
    </section>

    <Footer />
</main>

<style>
    :root {
        --mainColor: #2196f3;
        --secColor: #fafafa;
        --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
        --navbarHeight: 56px;
    }

    .home {
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-flow: column nowrap;
        position: relative;
    }

    .home__showcase {
        min-height: calc(100vh - var(--navbarHeight));
        background-image: url("/imgs/skyscrapers.jpg");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-flow: column wrap;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow);
    }

    .home__boxes {
        display: grid;
        place-items: center;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin: 10px;
    }

    .box {
        max-width: 356px;
        background: var(--primary);
        text-align: center;
        padding: 1.5rem 2rem;
        box-shadow: var(--shadow);
    }

    .info {
        background: var(--primary);
        box-shadow: var(--shadow);
        display: grid;
        grid-gap: 40px;
        grid-template-columns: repeat(2, 1fr);
        padding: 3rem;
    }

    @media screen and (max-width: 768px) {
        .info {
            grid-template-columns: 1fr;
        }
    }
</style>
