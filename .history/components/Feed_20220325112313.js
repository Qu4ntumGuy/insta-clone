import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      className="flex flex-row w-screen justify-center"
    >
      <section className="flex flex-col w-3/4">
        {/* Story  */}
        <Stories />
        <Posts />
        {/*Post */}
      </section>

      <section className="  lg:inline-grid md:col-span-1">
        <div className=" fixed top-20"> 
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;