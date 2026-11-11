import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

/**
 * Realiza login com e-mail e senha e retorna o token de acesso
 */
export async function loginWithEmail(
  email: string,
  pass: string,
): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    pass,
  );
  // const token = await userCredential.user.getIdToken();
  return userCredential.user;
}

/**
 * Cria uma nova conta com e-mail e senha e retorna o token
 */
export async function registerWithEmail(
  email: string,
  pass: string,
): Promise<User> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    pass,
  );
  // const token = await userCredential.user.getIdToken();
  return userCredential.user;
}

/**
 * Encerra a sessão no Firebase
 */
export async function logoutUser(): Promise<void> {
  await firebaseSignOut(auth);
}
