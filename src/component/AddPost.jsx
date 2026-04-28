import React, { useState } from 'react';
import styles from './AddPost.module.css';

function AddPost({ onAdd, closeDialog }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "" || content.trim() === "") return; 
    
    onAdd(name, content); 
    setName("");
    setContent("");
    closeDialog();
  };

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          className={styles.input}
          autoFocus
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          rows={3}
          placeholder="Enter content"
          className={styles.input}
          value={content} 
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitBtn}>Submit</button>
        <button type="button" className={styles.cancelBtn} onClick={closeDialog}>Cancel</button>
      </div>
    </form>
  );
}

export default AddPost;