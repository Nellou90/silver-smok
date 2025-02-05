<script lang="ts">
    import { games, addGame, deleteGame } from "$lib/stores/games";
    import { user } from "../lib/stores/auth"; // Utilisateur connecté
    let title = "";
    let genre = "";
    let release_year: number;
  </script>
  
  <h1>🎮 Liste des Jeux Vidéo</h1>
  
  {#if $user}
    <p>Connecté en tant que : {$user.email}</p>
    <a href="/logout"><button>Déconnexion</button></a>
  
    <ul>
      {#each $games as game}
        <li>
          {game.title} - {game.genre} ({game.release_year})
          <button on:click={() => game.id && deleteGame(game.id)}>🗑️ Supprimer</button>
        </li>
      {/each}
    </ul>
  
    <h2>Ajouter un jeu</h2>
    <input type="text" bind:value={title} placeholder="Titre" />
    <input type="text" bind:value={genre} placeholder="Genre" />
    <input type="number" bind:value={release_year} placeholder="Année" />
    <button on:click={() => addGame(title, genre, release_year)}>Ajouter</button>
  {:else}
    <p>⚠️ Vous devez être connecté pour gérer les jeux vidéo.</p>
    <a href="/login"><button>Se connecter</button></a>
  {/if}
  

