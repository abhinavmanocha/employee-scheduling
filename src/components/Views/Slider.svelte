<script>
    import { onMount } from "svelte";

    import { fade } from "svelte/transition";

    const imgs = [
        {
            src: "https://picsum.photos/300/200?random=1",
            alt: "BBB",
        },
        {
            src: "https://picsum.photos/300/200?random=2",
            alt: "BBB",
        },
        {
            src: "https://picsum.photos/300/200?random=3",
            alt: "BBB",
        },
        {
            src: "https://picsum.photos/300/200?random=4",
            alt: "BBB",
        },
        {
            src: "https://picsum.photos/300/200?random=5",
            alt: "BBB",
        },
    ];

    let prevBttn;
    let nextBttn;

    onMount(() => {
        const trackElem = document.querySelector(".carousel__track");
        const navElem = document.querySelector(".carousel__nav");

        const slides = Array.from(trackElem.childNodes);
        const dots = Array.from(navElem.childNodes);

        const slideWidth = slides[0].getBoundingClientRect().width;

        // set first slide to default
        slides[0].classList.add("current-slide");
        dots[0].classList.add("current-slide");

        slides.forEach((slide, index) => {
            slide.style.left = `${slideWidth * index}px`;
        });

        const moveSlide = (trackElem, currSlide, targetSlide) => {
            trackElem.style.transform = `translateX(-${targetSlide.style.left})`;
            currSlide.classList.remove("current-slide");
            targetSlide.classList.add("current-slide");
        };

        const updateIndicator = (curr, target) => {
            curr.classList.remove("current-slide");
            target.classList.add("current-slide");
        };

        const previous = () => {
            const currentSlide = trackElem.querySelector(".current-slide");
            const prevSlide = currentSlide.previousElementSibling;

            moveSlide(trackElem, currentSlide, prevSlide);
        };

        const next = () => {
            const currentSlide = trackElem.querySelector(".current-slide");
            const nextSlide = currentSlide.nextElementSibling;

            moveSlide(trackElem, currentSlide, nextSlide);
        };

        const dotss = (elem) => {
            const targetDot = elem.target.closest("button");

            if (!targetDot) return;

            const currentSlide = trackElem.querySelector(".current-slide");
            const currentDot = navElem.querySelector(".current-slide");
            const targetIndex = dots.findIndex((dot) => dot === targetDot);

            const target = slides[targetIndex];

            moveSlide(trackElem, currentSlide, target);
            updateIndicator(currentDot, targetDot);
        };

        prevBttn.addEventListener("click", previous, true);
        nextBttn.addEventListener("click", next, true);
        navElem.addEventListener("click", dotss, true);
    });

    const bigScreen = () => {
        console.log("st");
    };
</script>

<div class="carousel">
    <button
        class="carousel__button carousel__button--prev"
        bind:this={prevBttn}
    >
        <i class="fas fa-angle-left fa-4x carousel__bttn--img" />
    </button>

    <div on:click={bigScreen} class="carousel__track--container">
        <ul class="carousel__track">
            {#each imgs as img}
                <li class="carousel__slide">
                    <img
                        class="carousel__img"
                        in:fade
                        src={img.src}
                        alt={img.alt}
                    />
                </li>
            {/each}
        </ul>
    </div>

    <button
        class="carousel__button carousel__button--next"
        bind:this={nextBttn}
    >
        <i class="fas fa-angle-right fa-4x carousel__bttn--img" />
    </button>

    <div class="carousel__nav">
        {#each imgs as img}
            <button class="carousel__indicator current-slide" />
        {/each}
    </div>
</div>

<style>
    .carousel {
        position: relative;
        width: 560px;
        height: 350px;
        margin: 0 auto;
    }

    .carousel__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border: none;
    }

    .carousel__track--container {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .carousel__track {
        height: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
        transition: transform 300ms ease-in;
    }

    .carousel__slide {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        border-radius: 100px;
    }

    .carousel__button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: 0;
        cursor: pointer;
        font-weight: 700;
        font-size: 2rem;
    }

    .carousel__button--prev {
        left: -35px;
    }

    .carousel__button--next {
        right: -35px;
    }

    .carousel__bttn--img {
        width: 12px;
    }

    .carousel__nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        padding: 10px 0;
    }

    .carousel__nav .carousel__indicator:nth-child(1) {
        background: rgba(0, 0, 0, 0.75);
    }

    .carousel__indicator {
        border: 0;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: rgba(0, 0, 0, 0.3);
        margin: 0px 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .carousel {
            width: auto;
        }
    }
</style>
