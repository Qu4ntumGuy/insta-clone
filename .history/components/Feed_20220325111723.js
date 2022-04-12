import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      className="flex flex-row"
    >
      <section className="flex flex-col">
        {/* Story  */}
        <Stories />
        <Posts />
        {/*Post */}
      </section>

      <section className=" ">
        <div className=" fixed top-20"> 
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;