<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import Modal from "../Modal/Modal.svelte";

    import Navbar from "../Views/Navbar.svelte";
    import Slider from "../Views/Slider.svelte";
    import Footer from "../Views/Footer.svelte";

    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="home">
    <Modal>
        <Navbar />
    </Modal>

    <section class="home__section">
        <div class="home__showcase" in:fade={{ duration: 1250 }} />

        <div class="home__about" id="about" name="about">
            <p>
                Schedule your employee shifts with our state of the art
                scheduling app. Shift your
            </p>
        </div>

        <div class="home__boxes">
            <div class="box">
                <i class="fas fa-handshake fa-4x" />
                <h3>Easy to use</h3>
                <p>
                    Schede is easy to use. Interface is intuitive, buttons are
                    clearly visible and big
                </p>
            </div>

            <div class="box">
                <i class="fas fa-chart-pie fa-4x" />
                <h3>Analytics</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    Libero, hic.
                </p>
            </div>

            <div class="box">
                <i class="fas fa-users fa-4x" />
                <h3>Free</h3>
                <p>Schede is free, you don't have to pay for anything</p>
            </div>
        </div>

        <div class="overview">
            <div class="overview__video">
                <h3>Overview video</h3>
                <div class="overview__iframe">
                    <iframe
                        class="overview__video--iframe"
                        title="Schede - Overview"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/p8u_k2LIZyo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <p class="overview__video--watch">
                    Watch on
                    <a
                        href="https://www.youtube.com/watch?v=p8u_k2LIZyo&t"
                        target="_blank"
                        rel="noopener, noreferrer">YouTube</a
                    >
                </p>
            </div>

            <div class="overview__slider">
                <Modal>
                    <Slider />
                </Modal>
            </div>
        </div>
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

    .home__header {
        position: relative;
        color: aliceblue;
        font-size: 5rem;
        right: 15%;
    }

    .home__boxes {
        display: grid;
        place-items: center;
        grid-gap: 20px;
        grid-auto-rows: 1fr;
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

    .box:hover {
        filter: brightness(5%);
        cursor: pointer;
    }

    .overview {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        padding: 5rem;
    }

    .overview__video {
        box-shadow: var(--shadow);
        padding: 0.5rem 2rem 2rem 2rem;
        margin: 1rem;
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: 1px;
        line-height: 1.25rem;
    }

    .overview__video--watch {
        margin: 0.5rem 0 0 0;
        padding: 0;
    }

    .overview__slider {
        display: grid;
        place-content: center;
        box-shadow: var(--shadow);
        padding: 2rem;
        margin: 1rem;
    }

    @media screen and (max-width: 768px) {
        .overview__video--iframe {
            width: auto;
        }
    }
</style>
