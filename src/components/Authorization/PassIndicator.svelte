<script>
    export let password;

    let strongPass = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/;
    let mediumPass = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))$/;
    let badPass = /^(?=.{2,}).*$/;
    let color = "#999";
    let strength;

    $: {
        if (badPass.test(password)) {
            color = "#D50000";
            strength = "bad";
        } else if (mediumPass.test(password)) {
            color = "#FF9800";
            strength = "quite good";
        } else if (strongPass.test(password)) {
            color = "#4CAF50";
            strength = "strong";
        }
    }
</script>

<div class="pass__indicator" style="color: {color}">
    <span
        class="pass__indicator--marker"
        id="indicator"
        style="background-color: {color}"
    />
    <span class="pass__info">
        {#if strength}
            Your password is
            <span class="pass__strength">{strength}</span>
        {:else}
            Please input password
        {/if}
    </span>
</div>

<style>
    .pass__indicator {
        display: flex;
        justify-content: left;
        text-align: left;
        align-items: flex-start;
        line-height: 1rem;
    }

    .pass__indicator--marker {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        margin: 1px;
    }

    .pass__strength {
        font-weight: 700;
    }
</style>
