import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Load from "../components/Load";
import { useBlogProvider } from "../components/BlogContext";

function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { loading, error, fetchPostById } = useBlogProvider();

  const isEmpty = (obj) => {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    setPost(fetchPostById(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <div>
      <div className="h-12 shadow-md font-bold flex items-center pl-8 mb-8">
        Post Detail
      </div>

      <div className="max-w-5xl min-h-[50vh] mx-auto flex flex-col gap-y-4 px-4">
        {loading ? (
          <Load />
        ) : error ? (
          <div className="text-center text-2xl font-semibold">
            <h1>There was an error!!!</h1>
          </div>
        ) : !isEmpty(post) ? (
          <>
            <p className="text-base text-[var(--dark-color)] font-semibold">
              {post.category}
            </p>
            <div className="text-4xl font-semibold">{post.title}</div>
            {post.author && (
              <Avatar datePublished={post.datePublished} author={post.author} />
            )}
            <img
              className="w-[105%] mx-4 self-center rounded-2xl mb-4"
              src={`/images/${post.image}.jpg`}
              alt=""
            />
            <p className="leading-6 mb-4 first-letter:text-2xl first-letter:pl-12">
              {post.content}
            </p>
            <div className="flex justify-around border-t-2 border-b-2 mb-2 py-4 text-lg">
              <p>
                <i className="fa-regular fa-thumbs-up mr-2"></i>Like
              </p>
              <p>
                <i className="fa-regular fa-comment mr-2"></i>Comment
              </p>
              <p>
                <i className="fa-solid fa-share mr-2"></i>Share
              </p>
            </div>
            <p className="text-center my-2 font-bold">Comments</p>
            <div className="flex flex-col gap-y-2 mb-2">
              <div className=" border-l-2 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                consectetur, asperiores cumque expedita distinctio,
                exercitationem reiciendis quae ipsam alias vero quidem est,
                aperiam harum repellat in recusandae animi enim neque.
              </div>
              <div className=" border-l-2 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                consectetur, asperiores cumque expedita distinctio,
                exercitationem reiciendis quae ipsam alias vero quidem est,
                aperiam harum repellat in recusandae animi enim neque.
              </div>
            </div>
            <form action="#" className="flex mb-4">
              <textarea
                name=""
                className=" flex-grow border-2 border-[var(--primary-color)] outline-none rounded-l-lg p-1"
                placeholder="Write a comment..."
              ></textarea>
              <button className="bg-[var(--primary-color)] py-2 px-4 rounded-r-lg text-center">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-2xl font-semibold">
            <h1>Post not found!!!</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
