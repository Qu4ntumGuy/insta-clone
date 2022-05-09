import { useEffect, useState } from "react";

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
    return <div>

    </div>
};

export default Suggestions;