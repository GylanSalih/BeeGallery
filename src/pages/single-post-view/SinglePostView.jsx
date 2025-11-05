import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./SinglePostView.module.scss";
import {
  ArrowLeft,
  User,
  Image as ImageIcon,
  Link2,
  Maximize2,
  Edit,
  Trash2,
} from "lucide-react";
import { getPostById } from "../../api/api";
import { useGalleryPoster } from "../../context/Context.jsx";

const SinglePostView = () => {
  const { postId } = useParams();
  const { data, deletePost } = useGalleryPoster();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const foundPost = data.find((p) => p.id.toString() === postId);

        if (foundPost) {
          setPost(foundPost);
        } else {
          const response = await getPostById(postId);
          if (!response.ok) throw new Error("Post not found");
          const postData = await response.json();
          setPost(postData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchPost();
  }, [postId, data]);

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post?")) {
      if (deletePost) {
        await deletePost(Number(postId));
        navigate("/gallery");
      }
    }
  };

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error)
    return (
      <div className={styles.errorContainer}>
        <h1>Error</h1>
        <p>{error}</p>
        <button
          onClick={() => navigate("/gallery")}
          className={styles.backButton}
        >
          <ArrowLeft size={20} /> Back to Gallery
        </button>
      </div>
    );
  if (!post)
    return (
      <div className={styles.errorContainer}>
        <h1>Post not found</h1>
        <button
          onClick={() => navigate("/gallery")}
          className={styles.backButton}
        >
          <ArrowLeft size={20} /> Back to Gallery
        </button>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          onClick={() => navigate("/gallery")}
          className={styles.backButton}
        >
          <ArrowLeft size={20} /> Back to Gallery
        </button>
        <div className={styles.actionButtons}>
          <button
            onClick={() => navigate(`/editpost/${post.id}`)}
            className={styles.editButton}
          >
            <Edit size={18} /> Edit
          </button>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <Trash2 size={18} /> Delete
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src={post.download_url || post.url}
            alt={`Photo by ${post.author}`}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>Photo Details</h1>
          <div className={styles.infoGrid}>
            <InfoItem
              icon={<User size={20} />}
              label="Author"
              value={post.author || "Unknown"}
            />
            <InfoItem
              icon={<Maximize2 size={20} />}
              label="Dimensions"
              value={`${post.width} × ${post.height} px`}
            />
            <InfoItem
              icon={<ImageIcon size={20} />}
              label="Image ID"
              value={`#${post.id}`}
            />
            {post.url && (
              <InfoItem
                icon={<Link2 size={20} />}
                label="Source URL"
                value={
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    View on Unsplash
                  </a>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// geil oder ? statt mehrmals code zu schreiben einfach helper wirkt wie ein kleine mini componente
const InfoItem = ({ icon, label, value }) => (
  <div className={styles.infoItem}>
    <div className={styles.infoIcon}>{icon}</div>
    <div className={styles.infoContent}>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  </div>
);

export default SinglePostView;
