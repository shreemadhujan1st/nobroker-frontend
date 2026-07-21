import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import PropertyList from "../components/PropertyList/PropertyList";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters />

      <PropertyList
        search={search}
      />
    </>
  );
}

export default Home;