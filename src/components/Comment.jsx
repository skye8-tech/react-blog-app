import React from "react";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 mb-2">
        <div className=" border-l-2 p-4">{comment.body}</div>
      </div>
    </>
  );
};

export default Comment;
