<script>
    export let href = "";
</script>

<li>
    <a {href}>
        <slot />
    </a>
</li>

<style>
    li,
    a {
        all: unset;
    }

    li {
        opacity: 0;
        animation-name: fly-in;
        animation-delay: var(--delay);
        animation-duration: 200ms;
        animation-fill-mode: forwards;
        animation-timing-function: var(--ease-out-5);
    }

    @keyframes fly-in {
        from {
            opacity: 0;
            transform: translateY(200px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    a:hover {
        cursor: pointer;
    }
</style>
