import { useState } from 'react';
import './App.css'
import Post from "./component/Post.jsx";
import AddPost from "./component/AddPost.jsx"; 

function App() {
  const [posts, setPosts] = useState([
    { name: "Shira Smotny", content: "First Post" },
    { name: "Yael Levi", content: "Second Post" },
    { name: "Michal Cohen", content: "Third Post" }
  ]);
  
  const [isAdding, setIsAdding] = useState(false); 

  // הוספת פוסט חדש
  const handleAddPost = (name, content) => {
    setPosts((prevPosts) => {
      return [{ name, content }, ...prevPosts]; 
    });
  };

  // מחיקת פוסט
  const handleDeletePost = (indexToDelete) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((_, index) => index !== indexToDelete);
    });
  };

  // עריכת פוסט
  const handleEditPost = (index, newContent) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].content = newContent;
      return updatedPosts;
    });
  };

  // הדפסת המערך המעודכן ל-Console
  const handleLogPosts = () => {
    console.log("Current posts array:", posts);
  };

  return (
    <div className="app-container">
      <h1>My Posts</h1>
      
      {/* אזור כפתורי הפעולה העליונים */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
        <button className="button" onClick={() => setIsAdding(true)}>
          Add New Post
        </button>
        
        {/* הכפתור שהיה חסר מהדרישות */}
        <button className="button" onClick={handleLogPosts}>
          Log Posts to Console
        </button>
      </div>

      {/* טופס הוספה צף */}
      {isAdding && (
        <AddPost 
          onAdd={handleAddPost} 
          closeDialog={() => setIsAdding(false)} 
        />
      )}

      {/* רשימת הפוסטים */}
      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          content={post.content}
          onEdit={(newContent) => handleEditPost(index, newContent)}
          onDelete={() => handleDeletePost(index)}
        />
      ))}
    </div>
  );
}

export default App;