import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading } from "../../../../utils/authSlice";
import { db } from "../../../../utils/firebaseConfig";
import CalenderItem from "./CalenderItem/CalenderItem";
import IconDetails from "./IconDetails/IconDetails";
import UnlockLeague from "./UnlockLeague/UnlockLeague";

const LeftHome: FC = () => {
  const dispatch = useDispatch();
  const [singleUser, setSingleUser] = useState(null);
  const [showCalender, setShowCalender] = useState<boolean>(false);
  const error = useSelector(
    (state: { course: { error: string } }) => state.course.error
  );

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading(true));
      try {
        // Get the current user ID from Firebase Auth
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.error("User is not authenticated");
          return;
        }

        const userId = user.uid; // Get logged-in user's unique ID
        console.log("Fetching document with user ID:", userId);

        // Fetch document with user's ID
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = { id: docSnap.id, ...docSnap.data() };
          setSingleUser(userData.firstName);
        } else {
          console.log("No such document!");
          dispatch(setError("No Such Document!"));
        }
      } catch (error) {
        console.error("Error Fetching User Data: ", error);
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <div className="mt-6 p-3 w-full md:w-[50%] h-auto mr-0 md:mr-8">
      {!singleUser ? (
        <p className="text-[20px] mb-4">Loading user data...</p>
      ) : (
        <h1 className="font-bold text-[20px] mb-4">Welcome, {singleUser}</h1>
      )}
      <div className="flex flex-col border border-gray-500 p-3 rounded-xl mb-10">
        <IconDetails
          onClick={() => {
            setShowCalender(!showCalender);
          }}
          showCalender={showCalender}
        />
        {!showCalender && <CalenderItem />}
      </div>
      <UnlockLeague />
      {error && (
        <p className="text-center text-red-500 font-bold text-[15px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default LeftHome;
