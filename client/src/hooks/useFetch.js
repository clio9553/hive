import { useState, useEffect } from "react";

function useFetch(url) {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [isFetching, setIsfetching] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setIsfetching(false);
            setData(data);
          });
        } else {
          if (res.status === 404) {
            throw Error("Unable to get data");
          } else {
            throw Error("Fetch aborted by user");
          }
        }
      })
      .catch((err) => {
        setIsfetching(false);
        setIsError(true);
        setError(err.message);
      });
    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, error, isError, isFetching };
}

export default useFetch;
