import './App.css'
import Post from "./component/Post.jsx";
function App() {
  const onClickPost = (name) => {
    alert(`Post by ${name} clicked!`);
  };

  return (
    <>
      <Post name="Shira Smotny" content="First Post" onClick={() => onClickPost("Shira Smotny")} />
      <Post name="Yael Levi" content="Second Post" onClick={() => onClickPost("Yael Levi")} />
      <Post name="Michal Cohen" content="Third Post" onClick={() => onClickPost("Michal Cohen")} />
    </>
  );
}

export default App;
