import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      className="flex flex-row w-screen justify-center"
    >
      <section className="flex flex-col w-[40%] lg:w-[70%s]">
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