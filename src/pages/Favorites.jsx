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
      alert("Unable to load favorites.");
    }
  };

  const removeFavorite = async (favoriteId) => {
    try {
      await api.delete(`properties/favorites/${favoriteId}/`);

      setFavorites((prevFavorites) =>
        prevFavorites.filter(
          (favorite) => favorite.id !== favoriteId
        )
      );

      alert("Removed from Favorites ❤️");
    } catch (error) {
      console.error(error);

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
                className="favorite-btn"
                onClick={() =>
                  removeFavorite(favorite.id)
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