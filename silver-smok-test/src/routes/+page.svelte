<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        goto('/games'); // Redirige vers la page "Games"
    });
</script>
