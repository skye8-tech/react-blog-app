import axios from "axios";
import React, { useEffect, useState } from "react";

function Avatar(props) {
  const { createdAt, authorId } = props;
  const [username, setUsername] = useState("");

  const getUsername = async (id) => {
    try {
      const response = await axios.get(
        `https://blog-api-zk5m.onrender.com/v1/users/${id}`
      );
      return `${response.data.firstname} ${response.data.lastname}`;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsername(authorId).then((user) => setUsername(user));
  }, [authorId]);

  return (
    <div className="flex flex-row gap-x-2.5 text-sm">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={`/images/profile.png`}
        alt=""
      />
      <div className="flex flex-col justify-between">
        <p className="font-medium text-gray-600">
          {username ? username : "..."}
        </p>
        <p className="font-normal text-gray-500">
          {new Date(createdAt).toISOString().split("T")[0]}
        </p>
      </div>
    </div>
  );
}

export default Avatar;
