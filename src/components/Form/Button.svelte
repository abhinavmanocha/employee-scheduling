<script>
</script>

<button on:click class="button">
    <slot />
</button>

<style>
    .button {
        display: inline-block;
        position: relative;
        margin: 1.5rem 0 1rem 0;
        padding: 0.75rem 1.5rem;
        border-radius: 5rem;
        color: #fff;
        background-color: #2196f3;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        transition: all 0.5s;
        overflow: hidden;
        z-index: 1;
    }


    .button:hover::before {
        width: 100%;
    }
</style>
