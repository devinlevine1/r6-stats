//External Imports
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "react-icons-wrapper";

const RegionSelection = ({ title, items = [], selection, setSelection }) => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState({});

  const toggle = () => {
    setOpen(!open);
  };

  const handleOnClick = (item) => {
    if (!selection[item.id]) {
      setSelection(item);
    } else {
      setSelection(null);
    }
    console.log(selection);
  };

  const onChange = () => {
    const styles = {
      border: "1px solid #fff",
      borderRadius: "5px",
      backgroundColor: "#5b6467",
      backgroundImage: "linear-gradient(315deg, #5b6467 0%, #8b939a 74%)",
    };

    const stylesNone = {
      border: "none",
      borderRadius: "0",
      backgroundColor: "unset",
      backgroundImage: "none",
      padding: "0",
    };

    if (!open) {
      setStyle(styles);
    } else {
      setStyle(stylesNone);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.id === item.id) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="dd-header">
        <div className="dd-header-title">{title}</div>
      </div>
      <div className="dd-wrapper" style={{ ...style }}>
        <div
          className="dd-toggle"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className="dd-toggle-action">
            <div onClick={onChange}>
              {open ? (
                <Icon name={"AiOutlineClose"} size={"1.5rem"} color={"#333"} />
              ) : (
                <Icon name={"FiMenu"} size={"1.5rem"} color={"#333"} />
              )}
            </div>{" "}
          </div>
        </div>
        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <li className="dd-list-item" key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span>{item.value.toUpperCase()}</span>
                  <span>{isItemInSelection(item) && " Selected"}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RegionSelection;
