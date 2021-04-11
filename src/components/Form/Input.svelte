<script>
    export let label;
    export let value;
    export let placeholder;
</script>

<div class="input__group">
    <input
        class="input__group--input"
        bind:value
        id={label}
        {placeholder}
        {...$$restProps}
    />
    <label class="input__group--label" for={label}>{label}</label>
</div>

<style>
    .input__group {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .input__group--input {
        position: relative;
        outline: none;
        width: 100%;
        border: 2px solid gray;
        background: none;
        top: 0;
        left: 0;
        z-index: 1;
        padding: 8px 12px;
        margin: 1rem 0;
    }

    .input__group--label {
        transition: background 100ms, color 100ms, top 100ms, bottom 100ms,
            right 100ms, left 100ms ease-in;
        color: transparent;
        position: absolute;
        visibility: hidden;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .input__group--input:valid {
        background: white;
    }

    .input__group--input:focus::placeholder {
        color: transparent;
    }

    .input__group--input:focus {
        border: 2px solid #2196f3;
    }

    .input__group--input:focus + label {
        top: 100%;
        margin-top: -20px;
        background: #2196f3;
        color: white;
        font-size: 80%;
        z-index: 2;
        text-transform: uppercase;
        font-weight: 700;
        visibility: visible;
        padding: 1px;
    }
</style>
