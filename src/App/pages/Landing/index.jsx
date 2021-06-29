// External Imports
import React, { useState } from "react";

// Internal Imports
import Navbar from "../../components/navbar/navbar";
import Searchbar from "../../components/searchbar";
import StatList from "../../components/StatList/";

const Landing = () => {
  const [stats, setStats] = useState([]);

  return (
    <section>
      <div>
        <Navbar />
        <Searchbar setStats={setStats} />
        <StatList stats={stats} />
      </div>
    </section>
  );
};

export default Landing;
