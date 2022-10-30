import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages";
import ProfilePage from "./pages/profile-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
