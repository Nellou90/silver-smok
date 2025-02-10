<script>
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase";
  /**
	 * @type {any[]}
	 */
  let games = [];
  
  (async () => {
      const querySnapshot = await getDocs(collection(db, "games"));
      games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  })();
  </script>
  
  <div class="grid grid-cols-3 gap-4">
      {#each games as game}
          <div class="border p-4 rounded-lg shadow-lg">
              <h2 class="text-lg font-bold">{game.title}</h2>
              <p>{game.description}</p>
          </div>
      {/each}
  </div>
  