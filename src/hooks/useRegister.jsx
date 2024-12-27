import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { v4 as uuid } from "uuid";

export function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailEndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (profile) => {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: "https://api.dicebear.com/9.x/micah/svg?seed=" + uuid(),
        });
        dispatch(login(profile.user));
      })
      .catch((error) => {
        console.error("Xatolik", error.message);
      });
  };
  return { registerWithEmailEndPassword };
}
