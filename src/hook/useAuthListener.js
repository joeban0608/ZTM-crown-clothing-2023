import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/userSlice";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

const useAuthListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, []);
};
export default useAuthListener;
