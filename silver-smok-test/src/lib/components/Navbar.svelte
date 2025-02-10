<script>
    import { onMount } from "svelte";
    let mobileMenuOpen = false;
    import { goto } from '$app/navigation';
  
    function toggleMobileMenu() {
      mobileMenuOpen = !mobileMenuOpen;
    }
  </script>
  
  <nav class="bg-[#002b44]">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Logo + Menu principal -->
        <div class="flex justify-start">
          <div class=" items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-white" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.345 11.297C6.88 9.9 8.297 8.92 9.748 9.005c3.575.015 7.153 0 10.728.01c1.188 1.241 2.374 2.486 3.566 3.725c4.848.018 9.7-.034 14.548.024c1.926.064 3.473 1.948 3.394 3.932c.015 6.16.03 12.324-.006 18.487c.032 1.936-1.518 3.771-3.397 3.81c-9.612.022-19.224-.011-28.836 0c-1.874.122-3.616-1.549-3.695-3.5a50 50 0 0 1 .009-4.674c2.599.057 5.2.033 7.803.012c1.62 1.6 3.155 3.293 4.752 4.921c.821.865 1.952 1.342 3.103 1.455c1.611.186 3.266-.916 3.73-2.55c.445-1.264.32-2.633.063-3.924c-.58-3.366-1.121-6.741-1.701-10.107c-.379-2.323-1.911-4.405-4.006-5.296c-1.145-.536-2.416-.606-3.651-.615q-5.032.004-10.064 0c.05-1.135-.184-2.338.256-3.418" stroke-width="1.7"/><circle cx="13.738" cy="18.712" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><circle cx="13.738" cy="26.712" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><circle cx="17.738" cy="22.712" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><circle cx="9.738" cy="22.712" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>
          </div>
          
            <div class="flex space-x-4">
              <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#507e99] hover:text-white self-center ml-8">Jeux Vidéo</a>
              <a href="/addGames" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#507e99] hover:text-white self-center">Ajouter un jeux vidéo</a>
            </div>
          
        </div>
  
        <!-- Profil utilisateur -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  
          <div class="relative ml-3">
            <a href="/login" class="relative flex rounded-full  text-sm transition duration-150 ease-in-out hover:scale-110">
              <span class="sr-only">Open user menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"/></path></g></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  
  </nav>
  
  <style>
    .size-6 {
      width: 24px;
      height: 24px;
    }
    .size-8 {
      width: 32px;
      height: 32px;
    }
  </style>
  