import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className=" mt-5 sm:mt-0 grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
     xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      <section className="">
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
