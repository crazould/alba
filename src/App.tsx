import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import ProfilePage from "./pages/profile-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
