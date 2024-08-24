import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const response = await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
      setLoading(false);
    };
    fetchApi();
  }, []);

  return { data, loading };
};

export default useFetch;
