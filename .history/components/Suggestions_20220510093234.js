import { useEffect, useState } from "react";
import faker from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-5">
      <div className="flex justify-between text-sm mb-5">
        <h3
          className="text-sm font-bold 
        text-gray-400"
        >
          Suggestion For You
        </h3>
        <button className="font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div className="flex iten-center justify-between mt-3" key={profile.id}>
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className=" text-gray-400 text-xs">Work at {profile.company.name}</h3>
          </div>
          <button className="text-sm font-bold  text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
