import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="p-5 grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
     xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      <section className="xl:w-[150%]">
        {/* Story  */}
        <Stories />
        <Posts />
        {/*Post */}
      </section>

      <div className="hidden lg:block">
        <MiniProfile />
        <Suggestions />
      </div>
    </main>
  );
};

export default Feed;
