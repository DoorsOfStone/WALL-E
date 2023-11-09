import React from "react";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "John Doe",
        profileImageUrl: "https://i.pravatar.cc/150?img=1",
      },
      imageUrl: "https://picsum.photos/640/640?random=1",
      likes: 10,
      comments: [
        {
          id: 1,
          user: {
            name: "Jane Doe",
            profileImageUrl: "https://i.pravatar.cc/150?img=2",
          },
          content: "This is a comment.",
        },
        {
          id: 2,
          user: {
            name: "Bob Smith",
            profileImageUrl: "https://i.pravatar.cc/150?img=3",
          },
          content: "This is another comment.",
        },
      ],
    },
    {
      id: 2,
      user: {
        name: "Jane Doe",
        profileImageUrl: "https://i.pravatar.cc/150?img=2",
      },
      imageUrl: "https://picsum.photos/640/640?random=2",
      likes: 20,
      comments: [
        {
          id: 1,
          user: {
            name: "John Doe",
            profileImageUrl: "https://i.pravatar.cc/150?img=1",
          },
          content: "This is a comment.",
        },
      ],
    },
    {
      id: 1,
      user: {
        name: "John Doe",
        profileImageUrl: "https://i.pravatar.cc/150?img=1",
      },
      imageUrl: "https://picsum.photos/640/640?random=1",
      likes: 10,
      comments: [
        {
          id: 1,
          user: {
            name: "Jane Doe",
            profileImageUrl: "https://i.pravatar.cc/150?img=2",
          },
          content: "This is a comment.",
        },
        {
          id: 2,
          user: {
            name: "Bob Smith",
            profileImageUrl: "https://i.pravatar.cc/150?img=3",
          },
          content: "This is another comment.",
        },
      ],
    },
    {
      id: 1,
      user: {
        name: "John Doe",
        profileImageUrl: "https://i.pravatar.cc/150?img=1",
      },
      imageUrl: "https://picsum.photos/640/640?random=1",
      likes: 10,
      comments: [
        {
          id: 1,
          user: {
            name: "Jane Doe",
            profileImageUrl: "https://i.pravatar.cc/150?img=2",
          },
          content: "This is a comment.",
        },
        {
          id: 2,
          user: {
            name: "Bob Smith",
            profileImageUrl: "https://i.pravatar.cc/150?img=3",
          },
          content: "This is another comment.",
        },
      ],
    },
    {
      id: 1,
      user: {
        name: "John Doe",
        profileImageUrl: "https://i.pravatar.cc/150?img=1",
      },
      imageUrl: "https://picsum.photos/640/640?random=1",
      likes: 10,
      comments: [
        {
          id: 1,
          user: {
            name: "Jane Doe",
            profileImageUrl: "https://i.pravatar.cc/150?img=2",
          },
          content: "This is a comment.",
        },
        {
          id: 2,
          user: {
            name: "Bob Smith",
            profileImageUrl: "https://i.pravatar.cc/150?img=3",
          },
          content: "This is another comment.",
        },
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  function handleLikeClick(postId) {
    setPosts((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }

  function handleCommentClick(post) {
    setSelectedPost(post);
    setShowModal(true);
  }

  function handleModalClose() {
    setSelectedPost(null);
    setShowModal(false);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    const content = event.target.elements.comment.value;
    const newComment = {
      id: selectedPost.comments.length + 1,
      user: {
        name: "You",
        profileImageUrl: "https://i.pravatar.cc/150?img=4",
      },
      content,
    };
    setPosts((posts) =>
      posts.map((post) =>
        post.id === selectedPost.id
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
    handleModalClose();
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Community Feed </h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-4">
                <img
                  src={post.user.profileImageUrl}
                  alt={post.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-600">{post.user.name}</span>
              </div>
              <img src={post.imageUrl} alt="" className="mb-4" />
              <div className="flex justify-between items-center">
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => handleLikeClick(post.id)}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 14.35 2 11.22 2 7.5 2 4.42 4.42 2 7.5 2c2.34 0 4.47 1.19 5.74 3.15C14.03 3.19 16.16 2 18.5 2 21.58 2 24 4.42 24 7.5c0 3.72-3.4 6.85-8.55 12.53L12 21.35z" />
                  </svg>
                  <span className="ml-2">{post.likes}</span>
                </button>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => handleCommentClick(post)}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M21 2H3c-1.1 0-2 .9-2 2v16a2 2 0 002 2h18c1.1 0 2-.9 2-2V4a2 2 0 00-2-2zM3 6h18v10H3V6zm4 5h10v2H7v-2z" />
                  </svg>
                  <span className="ml-2">{post.comments.length}</span>
                </button>
              </div>
              {post.comments.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Comments</h3>
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex items-center mb-2">
                      <img
                        src={comment.user.profileImageUrl}
                        alt={comment.user.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-gray-600">
                        {comment.user.name}: {comment.content}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-lg font-bold mb-4">Leave a Comment</h2>
              {/* <button onClick={handleModalClose()}>X</button> */}
              <form onSubmit={handleCommentSubmit}>
                <div className="flex items-center mb-4">
                  <img
                    src={selectedPost.user.profileImageUrl}
                    alt={selectedPost.user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-600">
                    {selectedPost.user.name}
                  </span>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="3"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Community;
