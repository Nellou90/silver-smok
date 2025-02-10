<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { user } from '$lib/stores/auth'; // Importation de l'état utilisateur
  
    let gameName = '';
    let genre = '';
  
    onMount(() => {
      if (!user) {
        goto('/login'); // Redirige vers login si pas connecté
      }
    });
  
    const addGame = () => {
      console.log(`Ajout du jeu : ${gameName} (${genre})`);
      // Ici tu peux ajouter l'appel à Firebase ou à une base de données
    };
  </script>
  
  <h1>Ajouter un jeu vidéo</h1>
  <form on:submit|preventDefault={addGame}>
    <input type="text" bind:value={gameName} placeholder="Nom du jeu" required />
    <input type="text" bind:value={genre} placeholder="Genre" required />
    <button type="submit">Ajouter</button>
  </form>
  