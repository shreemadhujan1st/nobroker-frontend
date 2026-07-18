import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import PropertyList from "../components/PropertyList/PropertyList";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Filters />
      <PropertyList />
    </>
  );
}

export default Home;