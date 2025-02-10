<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { user, register } from '$lib/stores/auth';
  
    let email = '';
    let password = '';
  
    onMount(() => {
      if (user) {
        goto('/games'); // Redirige si déjà connecté
      }
    });
  
    const handleRegister = async () => {
      try {
        await register(email, password);
        goto('/games');
      } catch (error) {
        console.error("Erreur d'inscription :", error);
      }
    };
  </script>
  
  <h1>Créer un compte</h1>
  <form on:submit|preventDefault={handleRegister}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Mot de passe" required />
    <button type="submit">S'inscrire</button>
  </form>
  