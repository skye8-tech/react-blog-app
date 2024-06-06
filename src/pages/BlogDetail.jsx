import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Load from "../components/Load";
import { useBlogProvider } from "../components/BlogContext";
import useInput from "../hooks/useInput";
import Comment from "../components/Comment";
import axios from "axios";
import { useAuth } from "../Authentication/auth";

function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comment, bindComment, resetComment] = useInput("");
  const [PostComments, setPostComments] = useState([]);
  const commentRef = useRef(null);
  const { loading, error, fetchPostById } = useBlogProvider();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const data = {
      postId: postId,
      body: comment,
    };
    if (auth.token) {
      axios
        .post("https://blog-api-zk5m.onrender.com/v1/comments/create", data, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((result) => {
          fetchComments(postId);
        })
        .catch((error) => console.log(error));
    } else {
      navigate("/login", { state: { path: location.pathname } });
    }
    resetComment();
  };

  const isEmpty = (obj) => {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  };

  const fetchComments = (postId) => {
    axios
      .get(`https://blog-api-zk5m.onrender.com/v1/comments`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setPostComments(
          // eslint-disable-next-line
          response.data.filter((item) => item.postId == postId)
        );
      })
      .catch((error) => console.log(error));
  };

  const handleLikePost = async () => {
    if (auth.token) {
      try {
        if (
          post.likes.filter((like) => like._id === auth.userId).length === 0
        ) {
          await axios.put(
            `https://blog-api-zk5m.onrender.com/v1/posts/like/${postId}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
          console.log("Liked post " + postId);
          fetchPostById(postId).then((result) => setPost(result));
        } else {
          await axios.delete(
            `https://blog-api-zk5m.onrender.com/v1/posts/like/${postId}`,
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
          console.log("Unliked post " + postId);
          fetchPostById(postId).then((result) => setPost(result));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login", { state: { path: location.pathname } });
    }
  };

  useEffect(() => {
    fetchComments(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  useEffect(() => {
    fetchPostById(postId).then((result) => setPost(result));
    fetchComments(postId);
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
              Category
            </p>
            <div className="text-4xl font-semibold">{post.title}</div>
            {post.authorId && (
              <Avatar createdAt={post.createdAt} authorId={post.authorId._id} />
            )}
            <img
              className="w-[105%] mx-4 self-center rounded-2xl mb-4"
              src={post.attachment}
              alt=""
            />
            <p className="leading-6 mb-4 first-letter:text-2xl first-letter:pl-12">
              {post.body}
            </p>
            <div className="flex justify-around border-t-2 border-b-2 mb-2 py-4 text-lg">
              <button onClick={handleLikePost}>
                <i className="fa-regular fa-thumbs-up mr-2"></i>
                {post.likes.filter((like) => like._id === auth.userId)
                  .length === 0
                  ? "Like"
                  : "Unlike"}
              </button>
              <button
                onClick={(e) => {
                  commentRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  commentRef.current.focus();
                }}
              >
                <i className="fa-regular fa-comment mr-2"></i>Comment
              </button>
              <button>
                <i className="fa-solid fa-share mr-2"></i>Share
              </button>
            </div>
            <p className="text-center my-2 font-bold">Comments</p>
            {PostComments.length !== 0 &&
              PostComments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))}
            <form action="post" className="flex mb-4">
              <textarea
                name=""
                className=" flex-grow border-2 border-[var(--primary-color)] outline-none rounded-l-lg p-1"
                placeholder="Write a comment..."
                {...bindComment}
                ref={commentRef}
              ></textarea>
              <button
                type="submit"
                className="bg-[var(--primary-color)] py-2 px-4 rounded-r-lg text-center"
                onClick={handleSubmitComment}
              >
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
