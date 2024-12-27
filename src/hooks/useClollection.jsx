import { db } from "../firebase/config";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";

export function useCollection(collectionName) {
  useEffect(() => {
    const q = collection(db, "collectionName");
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((snapshot) => {
        console.log(snapshot.id);
      });
    });
  }, [collectionName]);
}
