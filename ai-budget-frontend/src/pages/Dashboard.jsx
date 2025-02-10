import { useEffect, useState } from "react";
import { fetchUser } from "../api/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const userData = await fetchUser(1); // Change based on login session
      setUser(userData);
    }
    getUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {user ? (
        <p className="text-lg mt-2">Welcome, {user.name}!</p>
      ) : (
        <p className="text-lg mt-2">Loading user data...</p>
      )}
    </div>
  );
}
