import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import api from "../services/api";
import "./EditProperty.css";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    property_type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const response = await api.get(`properties/${id}/`);

      setProperty({
        title: response.data.title,
        description: response.data.description,
        price: response.data.price,
        location: response.data.location,
        property_type: response.data.property_type,
        bedrooms: response.data.bedrooms,
        bathrooms: response.data.bathrooms,
        area: response.data.area,
        image: null,
      });
    } catch (error) {
      console.error(error);

      alert("Unable to load property.");

      navigate("/my-properties");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setProperty((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setProperty((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("title", property.title);
    formData.append("description", property.description);
    formData.append("price", property.price);
    formData.append("location", property.location);
    formData.append("property_type", property.property_type);
    formData.append("bedrooms", property.bedrooms);
    formData.append("bathrooms", property.bathrooms);
    formData.append("area", property.area);

    if (property.image) {
      formData.append("image", property.image);
    }

    try {
      await api.put(
        `properties/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Property Updated Successfully 🎉");

      navigate("/my-properties");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Unable to update property."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="add-property-container">
        <h1>Edit Property</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={property.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={property.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={property.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={property.location}
            onChange={handleChange}
            required
          />

          <select
            name="property_type"
            value={property.property_type}
            onChange={handleChange}
          >
            <option>Apartment</option>
            <option>Villa</option>
            <option>House</option>
            <option>Plot</option>
          </select>

          <input
            type="number"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="area"
            placeholder="Area"
            value={property.area}
            onChange={handleChange}
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Property"}
          </button>

        </form>
      </div>
    </>
  );
}

export default EditProperty;