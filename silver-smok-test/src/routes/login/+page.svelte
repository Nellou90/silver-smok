<script lang="ts">
  import { auth } from "$lib/firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { user } from "$lib/stores/auth";
  import { goto } from "$app/navigation";
  import Navbar from "$lib/components/Navbar.svelte";
  
  let email = "";
  let password = "";
  let errorMessage = "";
  
  async function login(event: Event) {
      event.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, password);
          goto("/games");
      } catch (error) {
          errorMessage = (error as Error).message;
      }
  }
  
  function closeModal(event: MouseEvent) {
      // Vérifie si le clic est en dehors du formulaire
      if (event.target && (event.target as HTMLElement).id === "modalBackground") {
          goto("/games");
      }
  }
  </script>
  
  <Navbar />
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div id="modalBackground" class="fixed inset-0 flex items-center justify-center bg-[#000000e1] bg-opacity-50" on:click={closeModal}>
      <form class="relative bg-[#e1e8ec] w-[25rem] h-[30rem] rounded-lg shadow-lg p-5">
          <!-- Croix de fermeture -->
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button type="button" class="absolute top-3 right-3 p-2 text-gray-600 hover:bg-red-400 rounded-full hover:text-white transition" on:click={() => goto("/games")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"/>
                  </path>
              </svg>
          </button>
  
          <p class="text-center text-xl mb-5">Connexion</p>
  
          <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Votre email</label>
              <input type="email" bind:value={email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@mail.com" required />
          </div>
  
          <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Votre mot de passe</label>
              <input type="password" bind:value={password} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring block w-full p-2.5" placeholder="****" required />
          </div>
  
          <button on:click={login} type="submit" class="text-white bg-[#003c5f] hover:bg-[#507e99] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Se connecter</button>
  
          <p class="text-center mt-4">
              <a href="/register" class="text-blue-600 hover:underline">Créer un compte</a>
          </p>
      </form>
  </div>
  