import React, { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
