// app/providers/DataProvider.js
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export function DataProvider({ children, initialData }) {
  const [data, setData] = useState(initialData || null);

  useEffect(() => {
    if (!initialData) {
      async function fetchData() {
        const res = await fetch("/api/cartitems", { cache: "no-store" });
        const json = await res.json();
        setData(json);
      }
      fetchData();
    }
  }, [initialData]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
