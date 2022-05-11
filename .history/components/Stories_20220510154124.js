import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";
import Story from "./Story";

const Stories = () => {
  const {data: session} = useSession();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className=" flex space-x-4 p-5 rounded-sm border-gray-300 
    border overflow-x-scroll scrollbar-hide">

      {session && (
          <Story img={session.user.image} username={session.user.username}/>
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
