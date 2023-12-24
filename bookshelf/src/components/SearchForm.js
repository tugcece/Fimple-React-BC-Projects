import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Kitap veya yazar ismi girin"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchForm;
