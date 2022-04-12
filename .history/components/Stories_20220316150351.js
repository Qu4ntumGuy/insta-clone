import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import { useState } from "react/cjs/react.production.min";

const Stories = () => {
    const [suggestions, setSuggestions] = useState([];)
  useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
          ...faker.helpers.contextualCard(),
          id: i,
      }));

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
