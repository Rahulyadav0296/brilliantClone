import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading } from "../../../../utils/authSlice";
import { db } from "../../../../utils/firebaseConfig";
import CalenderItem from "./CalenderItem/CalenderItem";
import IconDetails from "./IconDetails/IconDetails";
import UnlockLeague from "./UnlockLeague/UnlockLeague";

interface UserData {
  id: string;
  firstName: string;
  // Add other properties as needed
}

const LeftHome: FC = () => {
  const dispatch = useDispatch();
  const [singleUser, setSingleUser] = useState<string | null>(null);
  const [showCalender, setShowCalender] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading(true));
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.error("User is not authenticated");
          return;
        }

        const userId = user.uid;
        console.log("Fetching document with user ID:", userId);

        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = { ...(docSnap.data() as UserData), id: docSnap.id };

          setSingleUser(userData.firstName);
        } else {
          console.log("No such document!");
          dispatch(setError("No Such Document!"));
        }
      } catch (error) {
        console.error("Error Fetching User Data: ", error);
        dispatch(setError(String(error)));
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
    </div>
  );
};

export default LeftHome;
