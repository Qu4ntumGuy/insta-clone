import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import { useState } from "react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {suggestions.map((profile) => (
        <Stories
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
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
