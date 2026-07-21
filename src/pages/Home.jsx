import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import PropertyList from "../components/PropertyList/PropertyList";

function Home() {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  return (
    <>
      <Navbar />
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />

      <PropertyList
        search={search}
        propertyType={propertyType}
        bedrooms={bedrooms}
      />
    </>
  );
}

export default Home;