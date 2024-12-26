import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

export function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailEndPassword = (displayName, email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (profile) => {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
        });
        dispatch(login(profile.user));
      })
      .catch((error) => {
        console.error("Xatolik", error.message);
      });
  };
  return { registerWithEmailEndPassword };
}
