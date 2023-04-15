import { useState, useEffect } from "react";
import Todo from "../api/todo";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const todo = new Todo();
    todo.httpClient
      .get(url)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { isPending, data, setData, error };
};
