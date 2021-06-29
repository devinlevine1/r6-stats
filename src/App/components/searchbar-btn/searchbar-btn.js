//External Imports
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const SearchbarBtn = ({ handleClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      classname="searchbar-btn-box"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      {" "}
      <btn className="searchbar-btn" type="button" onClick={handleClick}>
        <BiSearchAlt key={hover} fill={hover ? "#8b939a" : "#fff"} />
      </btn>
    </div>
  );
};

export default SearchbarBtn;
