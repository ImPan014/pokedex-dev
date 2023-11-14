import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(response.status + " al llamar la API: " + response.statusText)
      }
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      console.log(error)
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getFetch();
  }, [url]);

  return {state};
};
