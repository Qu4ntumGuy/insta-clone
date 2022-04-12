import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import { useState } from "react";
import Story from "./Story";

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
    <div className="flex space-x-2 p-6 mt-6">
      {suggestions.map((profile) => (
        <Story
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
    </div>
  );
};

export default Stories;
