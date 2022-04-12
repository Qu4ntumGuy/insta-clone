import Stories from "./Stories";

const Feed = () => {
  return (
    <main className=" grid grid-cols-1 md:grid-col-2 md:max-w-3xl
    xl:grid-col-3">
      <section>
        {/* Story  */}
        <Stories />
        {/*Post */}
      </section>

      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
