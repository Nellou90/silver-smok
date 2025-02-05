<script lang="ts">
    import { auth } from "$lib/firebase";
    import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
  
    let email = "";
    let password = "";
    let errorMessage = "";
  
    async function handleLogin() {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "/"; // Redirection après connexion
      } catch (error) {
        errorMessage = "Erreur de connexion : " + (error as any).message;
      }
    }
  
    async function handleRegister() {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "/";
      } catch (error) {
        errorMessage = "Erreur d'inscription : " + (error as any).message;
      }
    }
  </script>
  
  <h2>Connexion / Inscription</h2>
  <input type="email" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Mot de passe" />
  <button on:click={handleLogin}>Se connecter</button>
  <button on:click={handleRegister}>S'inscrire</button>
  <p>{errorMessage}</p>
  