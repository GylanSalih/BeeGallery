import React, { useState, useEffect } from "react";
import { useGalleryPoster } from "../../context/Context";
import styles from "./AddNewPost.module.scss";

const AddNewPost = () => {
  const { addPost } = useGalleryPoster();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(1);
  const [loading, setLoading] = useState(false);

  // Add New Handler bei klick auf Btn

  const handleAddPostClicker = async (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("please fill out all fields!");
      return;
    }

    if (window.confirm("Do you want to add this post?")) {
      try {
        setLoading(true);
        await addPost(title, body, userId);
        // reset the form
        setTitle("");
        setBody("");
        setUserId(1);
        alert("Post Successfully added!");
      } catch (err) {
        alert("Error adding post");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={StyleSheet.addNewPost}>
      <div className={StyleSheet.simpleWrapper}>
        <p>Add New Post</p>
      </div>

      <div className={StyleSheet.formContainer}>
        <form className={StyleSheet.form} onSubmit={handleAddPostClicker}>
          <input
            type="text"
            value={title}
            placeholder="Enter Title..."
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />
          <input
            type="text"
            value={body}
            placeholder="Enter Content..."
            onChange={(e) => setBody(e.target.value)}
            disabled={loading}
          />
          <input
            type="number"
            value={userId}
            placeholder="Enter User Id..."
            onChange={(e) => setUserId(e.target.value)}
            disabled={loading}
            max={5}
            min={1}
          />
          <button
            className={StyleSheet.createbutton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating.." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewPost;