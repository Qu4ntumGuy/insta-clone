import { useEffect } from "react/cjs/react.production.min";
import faker from "faker";

const Stories = () => {

  useEffect(() => {
    const Suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
    }))
  }, []);

  return (
    <div>
      {/* Stories... */}
      {/* Stories... */}
      {/* Stories... */}
      {/* Stories... */}
      {/* Stories... */}
      {/* Stories... */}
      {/* Stories... */}
      This is Stories section..
    </div>
  );
};

export default Stories;
