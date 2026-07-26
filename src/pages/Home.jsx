import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import PropertyList from "../components/PropertyList/PropertyList";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function Home() {

  const [search, setSearch] = useState("");
  const [listingType, setListingType] = useState("Buy");
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
        listingType={listingType}
        setListingType={setListingType}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />

      <PropertyList
        search={search}
        listingType={listingType}
        propertyType={propertyType}
        bedrooms={bedrooms}
      />

      <WhyChoose />

      <Statistics />

      <Testimonials />

      <Footer />
    </>
  );
}

export default Home;