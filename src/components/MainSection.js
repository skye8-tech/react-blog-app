import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./MainSection.css";

function MainSection() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const allPosts = [
      {
        id: 1,
        image: "image1",
        category: "Design",
        title: "UX review presentations",
        content:
          "How do you create compelling presentations that wow your colleagues and impress your managers?",
        datePublished: "20 Jan 2022",
        author: {
          name: "Olivia Rhye",
          profilePic: "image1",
        },
      },
      {
        id: 2,
        image: "image2",
        category: "Product",
        title: "Migrating to Linear 101",
        content:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
        datePublished: "19 Jan 2022",
        author: {
          name: "Phoenix Baker",
          profilePic: "image2",
        },
      },
      {
        id: 3,
        image: "image3",
        category: "Software Engineering",
        title: "Building your API Stack",
        content:
          "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        datePublished: "18 Jan 2022",
        author: {
          name: "Lana Steiner",
          profilePic: "image3",
        },
      },
      {
        id: 4,
        image: "image4",
        category: "Management",
        title: "Bill Walsh leadership lessons",
        content:
          "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        datePublished: "17 Jan 2022",
        author: {
          name: "Alec Whitten",
          profilePic: "image4",
        },
      },
      {
        id: 5,
        image: "image5",
        category: "Product",
        title: "PM mental models",
        content:
          "Mental models are simple expressions of complex processes or relationships.",
        datePublished: "16 Jan 2022",
        author: {
          name: "Demi WIlkinson",
          profilePic: "image5",
        },
      },
      {
        id: 6,
        image: "image6",
        category: "Design",
        title: "What is Wireframing?",
        content:
          "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        datePublished: "15 Jan 2022",
        author: {
          name: "Candice Wu",
          profilePic: "image6",
        },
      },
      {
        id: 7,
        image: "image7",
        category: "Design",
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        datePublished: "14 Jan 2022",
        author: {
          name: "Natali Craig",
          profilePic: "image7",
        },
      },
      {
        id: 8,
        image: "image8",
        category: "Product",
        title: "Our top 10 Javascript frameworks to use",
        content:
          "JavaScript frameworks make development easy with extensive features and functionalities.",
        datePublished: "13 Jan 2022",
        author: {
          name: "Drew Cano",
          profilePic: "image8",
        },
      },
      {
        id: 9,
        image: "image9",
        category: "Customer Success",
        title: "Podcast: Creating a better CX Community",
        content:
          "Starting a community doesn’t need to be complicated, but how do you get started?",
        datePublished: "12 Jan 2022",
        author: {
          name: "Orlando Diggs",
          profilePic: "image9",
        },
      },
    ];
    setPosts(allPosts);
  }, []);
  return (
    <section className="main-content">
      <div className="container grid">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>

      <div className="container load">
        <p className="load-more">
          <i className="fas fa-arrow-down"></i> Load more
        </p>
      </div>
    </section>
  );
}

export default MainSection;
