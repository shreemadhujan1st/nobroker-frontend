import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import api from "../services/api";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await api.get("properties/favorites/");

      setFavorites(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1>Your Favorites ❤️</h1>

        {favorites.length === 0 ? (
          <h3>No favorite properties yet.</h3>
        ) : (
          favorites.map((favorite) => (
            <PropertyCard
              key={favorite.id}
              property={favorite.property}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Favorites;