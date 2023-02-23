import React from "react";
import styles from "./filtersBar.module.css";
import { FilterByTypes } from "../FilterByTypes/FilterByTypes";
import { SearchByName } from "../SearchByName/SearchByName";

export const FiltersBar = ({ filter, setFilter, history, setCurrentPage }) => {
  return (
    <div className={styles.filtersBar}>
      <SearchByName
        history={history}
        filter={filter}
        setFilter={setFilter}
        setCurrentPage={setCurrentPage}
      />
      <FilterByTypes
        history={history}
        filter={filter}
        setFilter={setFilter}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
