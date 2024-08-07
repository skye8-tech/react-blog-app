import React, { useEffect } from "react";
import Post from "./Post";
import Load from "./Load";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

function Blogs() {
  const { loading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <section className="py-8 min-h-[80vh] bg-[url('/images/Background.jpg')] bg-contain bg-top bg-no-repeat">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-[repeat(auto-fit,minmax(343px,384px))] justify-center gap-8 pb-6">
          {loading ? (
            <Load />
          ) : error ? (
            <div className="text-center text-2xl font-semibold">
              <h1>{error}</h1>
            </div>
          ) : posts.length !== 0 ? (
            posts.map((post) => <Post key={post._id} {...post} />)
          ) : (
            <div className="text-center text-2xl font-semibold">
              <h1>There are no Posts!!!</h1>
            </div>
          )}
        </div>
      </section>
      <div className="flex justify-center cursor-pointer">
        <p className="bg-[var(--secondary-color)] w-fit py-2.5 px-4 text-sm rounded-md mb-8">
          <i className="fas fa-arrow-down"></i> Load more
        </p>
      </div>
    </>
  );
}

export default Blogs;
