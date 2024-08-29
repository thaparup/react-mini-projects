import { useState, useEffect } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("Pokhara");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function callApi() {
    setLoading(true);
    console.log();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3294a0d15a248b25536ba062a0498a26`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
    setLoading(false);
  }

  useEffect(() => {
    callApi();
  }, []);
  const current = new Date();
  function getCurrentDateAndTime() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleClick={() => callApi()}
      />
      {loading && <h3>Loading...</h3>}
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
        {data?.name}, <span>{data?.sys?.country}</span>
      </h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        {getCurrentDateAndTime()}
      </p>

      <div
        style={{ fontSize: "30px", fontWeight: "bolder", textAlign: "center" }}
      >
        {data?.main?.temp}
      </div>
      <p style={{ fontWeight: "bolder", textAlign: "center" }}>
        {data && data.weather[0] ? data.weather[0].description : ""}
      </p>
      <div
        style={{ display: "flex", gap: "20px", justifyContent: "space-evenly" }}
      >
        <div>
          <div>
            <p>{data?.wind.speed}</p>
            <p>Wind speed</p>
          </div>
        </div>
        <div>
          <div>
            <p>{data?.main.humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </>
  );
}
