import { useState, useEffect } from 'react';

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const url = `${import.meta.env.VITE_API_URL}${endpoint}`;

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setData(response.data);
      } catch (ex) {
        setErrors(ex);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return {
    data,
    isLoading,
    errors,
  };
};
