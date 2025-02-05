import { writable } from "svelte/store";
import { db } from "$lib/firebase";
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";

// 📌 1. Définition du type Game
interface Game {
  id?: string;
  title: string;
  genre: string;
  release_year: number;
}

// 📌 2. Création du store avec le type Game[]
export const games = writable<Game[]>([]);

const gamesCollection = collection(db, "games");

// 📌 3. Récupération des données avec typage
onSnapshot(gamesCollection, (snapshot) => {
  games.set(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Game) })));
});

// 📌 4. Ajout d'un jeu
export async function addGame(title: string, genre: string, release_year: number) {
  await addDoc(gamesCollection, { title, genre, release_year });
}

// 📌 5. Suppression d'un jeu
export async function deleteGame(id: string) {
  await deleteDoc(doc(db, "games", id));
}

