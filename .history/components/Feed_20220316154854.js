import Stories from "./Stories";

const Feed = () => {
  return (
    <main
      className=" grid grid-cols-1 md:grid-col-2 md:max-w-3xl
    xl:grid-col-3 xl:max-w-6xl mx-auto"
    >
      <section className=" col-span-2">
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
