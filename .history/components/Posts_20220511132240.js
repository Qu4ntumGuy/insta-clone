import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "_gauravbisht_",
    userImg:
      "https://m.media-amazon.com/images/I/71ouO-MEmIL._SL1500_.jpg",
    img: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520603390-tony-starks-infinity-war.jpg",
    caption: "Smash that Like Button!!",
  },
  {
    id: "123",
    username: "_gauravbisht_",
    userImg:
      "https://m.media-amazon.com/images/I/71ouO-MEmIL._SL1500_.jpg",
    img: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520603390-tony-starks-infinity-war.jpg",
    caption: "Smash that Like Button!!",
  },
];

const Posts = () => {

  const [posts, setPosts] = useState(posts);
  useEffect(() => {
    onSnapshot(query(collection(db, 'posts')))
  },[])

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
