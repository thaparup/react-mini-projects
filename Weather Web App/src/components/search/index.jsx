import { useState } from "react";

export default function Search({ search, setSearch, handleClick }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "40px",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          style={{
            height: "28px",
            width: "90%",
            borderRadius: "5px",
            borderColor: "white",
          }}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          style={{
            background: "black",
            color: "white",
            paddingInline: "15px",
            borderRadius: "6px",
          }}
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </>
  );
}
