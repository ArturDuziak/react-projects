import React from "react";

const SearchBox = ({ searchValue, setSearchValue, dataCy }) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search"
        value={searchValue}
        data-cy={dataCy}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
