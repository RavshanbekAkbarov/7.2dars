import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export function useLogout() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon");
      })
      .catch((error) => {
        toast.error("Xato!")
      });
  };
  return { logout };
}
