import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function Post(props) {
  const { _id, title, body, attachment, authorId, createdAt } = props;
  return (
    <Link to={`/posts/${_id}`}>
      <div className="max-w-[384px] min-h-[530px] pt-6 px-6 pb-8 shadow-md flex flex-col gap-8 bg-white max-[380px]:mx-8">
        <img src={attachment} alt="" className="w-full" />
        <div className="flex flex-col justify-between flex-grow">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[var(--dark-color)] font-semibold">
              Category
            </p>
            <div className="flex justify-between text-2xl font-semibold items-start">
              <p>{title}</p>
              <img src="/images/Icon wrap.jpg" alt="" className="w-6" />
            </div>
            <p className="text-base text-[#667085] line-clamp-3">{body}</p>
          </div>

          <Avatar createdAt={createdAt} authorId={authorId} />
        </div>
      </div>
    </Link>
  );
}

export default Post;
