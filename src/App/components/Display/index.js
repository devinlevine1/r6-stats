//External Imports
import { useState, useEffect } from "react";

// Internal Imports
import DisplayItem from "../DisplayItem";

const Display = ({ selection }) => {
  const API_KEY = "c23c1404-f353-45ab-b560-30353a7f8a35";
  const [leaders, setLeaders] = useState([]);

  console.log(selection);

  const getLeaderboards = async () => {
    if (selection) {
      const response = await fetch(
        `https://api2.r6stats.com/public-api/leaderboard/pc/${selection.value}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      const leaderboard = await response.json();
      console.log(leaderboard);
      setLeaders(leaderboard);
    }
  };

  useEffect(() => {
    getLeaderboards();
  }, [selection]);

  console.log(leaders);

  if (Array.isArray(leaders) && leaders.length) {
    return leaders.map((leader) => <DisplayItem leader={leader} />);
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ margin: 150, fontSize: 50 }}> Leaderboard Error...</p>
      </div>
    );
  }
};

export default Display;
