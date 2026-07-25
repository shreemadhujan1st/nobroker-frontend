import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import api from "../services/api";
import "./AddProperty.css";

function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await api.post("properties/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property Added Successfully 🎉");

      navigate("/my-properties");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Unable to add property."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="add-property-container">
        <h1>Add New Property</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <select
            name="property_type"
            value={formData.property_type}
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
            min="1"
            value={formData.bedrooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="bathrooms"
            min="1"
            value={formData.bathrooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="area"
            placeholder="Area (sqft)"
            value={formData.area}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Property"}
          </button>

        </form>
      </div>
    </>
  );
}

export default AddProperty;