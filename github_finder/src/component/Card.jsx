import React from "react";

const Card = ({ imageUrl, followers, login }) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <img
        src={imageUrl}
        alt=""
        height={100}
        width={100}
        style={{ borderRadius: "100px" }}
      />
      <h2>{login}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Followers</h3>
        <h3>{followers}</h3>
      </div>
    </div>
  );
};

export default Card;
