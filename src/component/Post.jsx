import styles from "./Post.module.css";
import { useState } from "react";

function Post({ name, content = "", onEdit, onDelete }) {
  const [editableContent, setEditableContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setEditableContent(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditableContent(content); 
  };

  const handleSaveClick = () => {
    onEdit(editableContent);
    setIsEditing(false);
  };

  const actionButtons = (
    <div className={styles.buttonGroup}>
      <button className={styles.button} onClick={handleEditClick}>
        Edit
      </button>
      {}
      <button 
        className={styles.button + " " + styles.buttonCancel} 
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.content}>{content}</p>

      {}
      {!isEditing ? actionButtons : null}

      {isEditing && (
        <div className={styles.editSection}>
          <input
            value={editableContent}
            className={styles.input}
            type="text"
            onChange={handleInputChange}
            placeholder="Edit post content"
            autoFocus
          />
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={handleSaveClick}>
              Save
            </button>
            <button 
              className={styles.button + " " + styles.buttonCancel} 
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;