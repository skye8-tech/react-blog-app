import React from "react";

function Avatar(props) {
  const { datePublished, author } = props;
  return (
    <div className="flex flex-row gap-x-2.5 text-sm">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={`/images/${author.profilePic}.jpg`}
        alt=""
      />
      <div className="flex flex-col justify-between">
        <p className="font-medium">{author.name}</p>
        <p className="font-normal">{datePublished}</p>
      </div>
    </div>
  );
}

export default Avatar;
