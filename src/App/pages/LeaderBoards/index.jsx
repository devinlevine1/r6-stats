// External Imports
import React, { useState } from "react";

// Internal Imports
import Navbar from "../../components/navbar/navbar";
import RegionSelection from "../../components/RegionSelection";
import Display from "../../components/Display";

const items = [
  { id: 1, value: "ncsa" },
  { id: 2, value: "emea" },
  { id: 3, value: "apac" },
  { id: 4, value: "all" },
];

const LeaderBoards = () => {
  const [selection, setSelection] = useState("");
  return (
    <div>
      {" "}
      <Navbar />
      <RegionSelection
        title={"Region Selection"}
        items={items}
        selection={selection}
        setSelection={setSelection}
      />
      <Display selection={selection} />
    </div>
  );
};

export default LeaderBoards;
