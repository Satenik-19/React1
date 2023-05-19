import Header from "./component/Header";
import Post from "./component/Post";
import Menu from "./component/Menu";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  let [overlay, setOverlay] = useState({});
  let [objOfPost, setObjOfPost] = useState("");
  let [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Menu />
      <main className="container">
        <div
          className="overlay"
          style={overlay}
          onClick={(event) => {
            if (event.target.getAttribute("class") === "overlay") {
              setOverlay({});
            }
          }}
        >
          <div className="popup">
            <a className="close" href="#" onClick={() => setOverlay({})}>
              &times;
            </a>
            <Post
              title={objOfPost.title}
              text={objOfPost.text}
              tags={objOfPost.tags}
              autor={objOfPost.autor}
              img={objOfPost.img}
              img_2x={objOfPost.img_2x}
              date={objOfPost.date}
              views={objOfPost.views}
            />
          </div>
        </div>
        {users
          .filter((item) =>
            item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1
              ? item
              : item.tags.toUpperCase().indexOf(search.toUpperCase()) !== -1
              ? item
              : 0
          )
          .map((item, index) => {
            return (
              <Post
                title={item.title}
                text={item.text}
                tags={item.tags}
                autor={item.autor}
                img={item.img}
                img_2x={item.img_2x}
                date={item.date}
                views={item.views}
                key={index}
                click={setOverlay}
                objOfPost={item}
                setObjOfPost={setObjOfPost}
                isOnPage={true}
              />
            );
          })}
      </main>
    </>
  );
}

export default App;
