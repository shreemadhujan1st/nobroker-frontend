import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import MyProperties from "./pages/MyProperties";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/my-properties"
          element={<MyProperties />}
        />

        <Route
          path="/add-property"
          element={<AddProperty />}
        />

        <Route
          path="/edit-property/:id"
          element={<EditProperty />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;