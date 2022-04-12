import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      className="flex flex-row w-screen justify-center"
    >
      <section className="flex flex-col w90%] lg:w-[40%] sm:w-[90%]">
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