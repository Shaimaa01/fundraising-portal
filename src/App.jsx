// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          {/* If the URL is '/', show the LoginPage */}
          <Route path="/" element={<LoginPage />} />

          {/* If the URL is '/dashboard', show the DashboardPage */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
