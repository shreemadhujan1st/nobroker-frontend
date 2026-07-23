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
      console.log(error);
    }
  };

  const removeFavorite = async (propertyId) => {
    try {
      await api.delete(`properties/favorites/${propertyId}/`);

      setFavorites(
        favorites.filter(
          (fav) => fav.property.id !== propertyId
        )
      );

      alert("Removed from Favorites");
    } catch (error) {
      console.log(error.response);

      alert(
        error.response?.data?.detail ||
        "Unable to remove favorite."
      );
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
          <h3>No favorite properties.</h3>
        ) : (
          favorites.map((favorite) => (
            <div
              key={favorite.id}
              style={{
                marginBottom: "30px",
              }}
            >
              <PropertyCard
                property={favorite.property}
              />

              <button
                onClick={() =>
                  removeFavorite(favorite.property.id)
                }
              >
                ❌ Remove Favorite
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Favorites;