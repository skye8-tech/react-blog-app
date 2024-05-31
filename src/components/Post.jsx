import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const truncateChars = (text) => {
  return text.length < 90 ? text : text.slice(0, 85) + ". . .";
};

function Post(props) {
  const { id, image, category, title, content, datePublished, author } = props;
  return (
    <Link to={`/posts/${id}`}>
      <div className="max-w-[384px] min-h-[530px] pt-6 px-6 pb-8 shadow-md flex flex-col gap-8 bg-white max-[380px]:mx-8">
        <img src={`/images/${image}.jpg`} alt="" className="w-full" />
        <div className="flex flex-col justify-between flex-grow">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[var(--dark-color)] font-semibold">
              {category}
            </p>
            <div className="flex justify-between text-2xl font-semibold items-start">
              <p>{title}</p>
              <img src="/images/Icon wrap.jpg" alt="" className="w-6" />
            </div>
            <p className="text-base text-[#667085]">{truncateChars(content)}</p>
          </div>

          <Avatar datePublished={datePublished} author={author} />
        </div>
      </div>
    </Link>
  );
}

export default Post;
