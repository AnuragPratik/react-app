import { useState, useEffect } from "react";

// url, options
const useFetch = (url = "", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setData(data);
          setError(null);
        })
        .catch((error) => {
          console.log("error", error);
          setError(error);
          setData(null);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, [url, options]);
  return { loading, error, data };
};

export default useFetch;
