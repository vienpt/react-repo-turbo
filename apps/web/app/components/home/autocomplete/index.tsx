"use client";

import { use, useEffect, useState } from "react";
import InputSearch from "./input-search";
import ListItems from "./list-items";
import _ from "lodash-es";

interface AutoCompleteProps {
  dataPromise: Promise<string[]>;
}

const DELAY_TIME = 200;

export default function AutoComplete({ dataPromise }: AutoCompleteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // Check if window is defined
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set("q", query);
      window.history.replaceState({}, "", `?${params.toString()}`);
    } else {
      params.delete("q");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [query]);

  const data = use(dataPromise);

  const filterItems = (searchQuery: string = "") => {
    return data.filter((item: string) =>
      item.toLowerCase().includes(searchQuery?.toLowerCase()),
    );
  };

  function handleOnChange(str: string) {
    setQuery(str);
  }

  function handleSelectItem(item: string) {
    setSelected(item);
  }

  return (
    <div>
      <InputSearch
        query={query}
        setQuery={handleOnChange}
        onFocus={filterItems}
      />
      <ListItems data={filterItems(query)} onSelectItem={handleSelectItem} />
      <p>{selected}</p>
    </div>
  );
}
