<script lang="ts">
    import { auth } from "$lib/firebase";
    import { signOut } from "firebase/auth";
  
    async function handleLogout() {
      await signOut(auth);
      window.location.href = "/"; // Rediriger vers la page d'accueil après la déconnexion
    }
  </script>
  
  <h2>Déconnexion</h2>
  <button on:click={handleLogout}>Se déconnecter</button>
  