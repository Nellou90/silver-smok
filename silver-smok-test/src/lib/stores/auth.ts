import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const user = writable(auth.currentUser);

auth.onAuthStateChanged((newUser) => {
  user.set(newUser);
});

export const register = async (email: string, password: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const login = async (email: string, password: string) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const logout = async () => {
  await signOut(auth);
};

