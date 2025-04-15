import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className="rounded-full bg-yellow-100 px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 sm:w-64 sm:focus:w-72"
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
