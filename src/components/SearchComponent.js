import React from "react";
import { Input } from "reactstrap";

function SearchComponent(handleInput, search) {

  return (
    <section>
      <Input
        type="text"
        placeholder="Search..."
        // data={dataMovie}
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default SearchComponent;
