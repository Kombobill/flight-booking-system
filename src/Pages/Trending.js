import React, { useEffect } from 'react';
import React, { useState } from "react";
function Trending() {
  const [trendingData, setTrendingData] = useState([]);
  const fetchTrending = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`);
      const data = await response.json();
      setTrendingData(data.results);
    } catch (error) {
      console.error('Error fetching trending data:', error);

    }
  };
  useEffect(() => {
    fetchTrending();
  }, []
); // Empty depency array ensures the effects runs only once on initial render
  return (
    <div>
      {/* Your JSX code will go here */}
    </div>
  );
}

export default Trending;
