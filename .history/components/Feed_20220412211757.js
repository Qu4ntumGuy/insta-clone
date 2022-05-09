import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
     xl:grid-cols-3 xl:max-w-6xl max-auto ">
      <section className="flex flex-col xl:w-[35%] lg:w-[53%] md:w-[90%]">
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
