import React from "react";

const TextList = (props) => {
  const items = props.gifs.map((itemData) => {
    return <Item url={itemData.url} />;
  });
  return <div className="absolute bg-white bottom-24 z-50 grid grid-cols-2">{items}</div>;
};
const Item = (props) => {
  return (
    <div >
      <img src={props.url} />
    </div>
  );
};
export default TextList;