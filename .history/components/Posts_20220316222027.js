import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "_gauravbisht_",
    userImg:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520603390-tony-starks-infinity-war.jpg",
    img: "https://m.media-amazon.com/images/I/71ouO-MEmIL._SL1500_.jpg",
    caption: "Smash that Like Button!!",
  },
  {
    id: "123",
    username: "_gauravbisht_",
    userImg:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520603390-tony-starks-infinity-war.jpg",
    img: "https://m.media-amazon.com/images/I/71ouO-MEmIL._SL1500_.jpg",
    caption: "Smash that Like Button!!",
  },
];

const Posts = () => {
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
      <Post />
    </div>
  );
};

export default Posts;
