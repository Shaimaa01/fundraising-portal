import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
      
          <Route path="/" element={<LoginPage />} />

        
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
       <Toaster />
    </BrowserRouter>
  );
}

export default App;
