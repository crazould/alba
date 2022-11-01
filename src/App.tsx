import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TokenProvider } from "./context/token";
import HomePage from "./pages";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <TokenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </TokenProvider>
  );
}

export default App;
