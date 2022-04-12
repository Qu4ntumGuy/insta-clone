import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      className=" grid grid-cols-1 md:grid-col-2 md:max-w-3xl
       xl:grid-cols-3 xl:max-w-6xl mx-auto "
    >
      <section className="col-span-2">
        {/* Story  */}
        <Stories />
        <Posts />
        {/*Post */}
      </section>

      <section className=" hidden lg:inline-grid md:col-span-1">
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
};

export default Feed;
