import React, { useState } from "react";
// Internal imports
import SearchbarBtn from "../searchbar-btn/searchbar-btn";
import { getStats } from "./getStats";

const Searchbar = ({ setStats }) => {
  const [username, setUsername] = useState("");

  const handleClick = async () => {
    if (username) {
      const res = await getStats(username);
      console.log(res);
      if (res.error) {
        setStats([]);
      } else {
        if (Array.isArray(res)) {
          setStats(res);
        } else {
          setStats([res]);
        }
      }
    }
  };

  const keyPress = async (e) => {
    if (e.keyCode === 13) {
      if (username) {
        const res = await getStats(username);
        console.log(res);
        if (res.error) {
          setStats([]);
        } else {
          if (Array.isArray(res)) {
            setStats(res);
          } else {
            setStats([res]);
          }
        }
      }
    }
  };

  return (
    <div className="searchbar-wrapper">
    <div className="searchbar">
      <SearchbarBtn handleClick={handleClick} />
      <div className="searchbar-input">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => keyPress(e)}
          placeholder="Search..."
        ></input>
      </div>
    </div>
    </div>
  );
};

export default Searchbar;
