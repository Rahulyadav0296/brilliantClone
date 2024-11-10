import {
  createUserWithEmailAndPassword, // Firebase function to create a new user with email/password
  GoogleAuthProvider, // Firebase provider for Google authentication
  signInWithEmailAndPassword, // Firebase function to sign in with email/password
  signInWithPopup, // Firebase function to sign in with a popup (used for Google login)
  signOut, // Firebase function to sign out the current user
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore methods to create document references and set data in Firestore
import {
  setAge,
  setEmail,
  setError,
  setFirstName,
  setLastName,
  setLoading,
  setOpen,
  setPassword,
  setShowSignup,
  setToken,
  setUser,
} from "./authSlice"; // Actions from a Redux slice to manage authentication state
import { auth, db } from "./firebaseConfig"; // Firebase configuration, `auth` and `db` instances
import { AppDispatch } from "./store"; // Type for dispatching Redux actions

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Function to log in using Google
export const googleLogin = (navigate: any) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true)); // Set loading state
  try {
    const result = await signInWithPopup(auth, googleProvider); // Sign in with Google
    const newUser = {
      email: result.user.email,
      userId: result.user.uid,
    };
    dispatch(setUser(newUser)); // Store user data in Redux
    localStorage.setItem("Token", result.user.accessToken); // Store token in localStorage
    dispatch(setToken(result.user.accessToken)); // Store token in Redux
    navigate("/"); // Navigate to home page
    dispatch(setOpen(false)); // Close modal or login popup
  } catch (error: any) {
    dispatch(setError(error.message)); // Handle and display error
  } finally {
    dispatch(setLoading(false)); // Reset loading state
  }
};

// Function to log in using email and password
export const userLogin =
  (email: string, password: string, navigate: any) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await signInWithEmailAndPassword(auth, email, password); // Sign in with email/password
      const newUser = {
        email: result.user.email,
        userId: result.user.uid,
      };
      dispatch(setUser(newUser));
      localStorage.setItem("Token", result.user.accessToken);
      dispatch(setToken(result.user.accessToken));
      dispatch(setEmail("")); // Reset email input
      dispatch(setPassword("")); // Reset password input
      dispatch(setOpen(false));
      navigate("/");
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

// Function to create a new user with additional profile data
export const userSignup =
  (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    age: number
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = result.user.uid;
      // Save additional profile data to Firestore
      await setDoc(doc(db, "users", userId), {
        uid: userId,
        email: result.user.email,
        firstName,
        lastName,
        age,
        createdAt: new Date(),
      });
      const newUser = {
        email: result.user.email,
        userId: result.user.uid,
      };
      dispatch(setUser(newUser));
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setFirstName(""));
      dispatch(setLastName(""));
      dispatch(setAge(0));
      dispatch(setShowSignup(false)); // Close signup form
    } catch (error: any) {
      // Handle specific error cases from Firebase
      if (error.code === "auth/email-already-in-use") {
        dispatch(setError("This email is already in use."));
      } else if (error.code === "auth/invalid-email") {
        dispatch(setError("The email address is not valid."));
      } else if (error.code === "auth/weak-password") {
        dispatch(setError("The password is too weak."));
      } else {
        dispatch(setError("An unknown error occurred."));
      }
      console.error("Firebase error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

// Function to log out the current user
export const logoutUser = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth); // Sign out from Firebase
    dispatch(
      setUser({
        email: "",
        userId: "",
      })
    );
    localStorage.removeItem("Token"); // Clear token from localStorage
    dispatch(setToken("")); // Clear token from Redux state
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
