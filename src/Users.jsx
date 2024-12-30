import { use } from "react";
import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const loadUser = async () => {
      const user = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await user.json();
      setUser(data);
    };
    loadUser();
  }, []);
  return (
    <div>
      <h3>User: {user.length}</h3>
    </div>
  );
}

/**
 * 1, declear a state to hold the data
 * 2. useEffect with call back dependency array
 */
