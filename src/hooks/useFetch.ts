import React, { useEffect } from "react";

export const useFetch = (url: string) => {
  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
  };
  useEffect(() => {
    getFetch();
  }, [url]);
};
