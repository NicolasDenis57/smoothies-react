import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import FrontPage from "./Components/FrontPage/FrontPage"
import RecipePage from "./Components/RecipePage/RecipePage"
import LoginPage from "./Components/LoginPage/LoginPage"
import SignUpPage from "./Components/SignUpPage/SignUpPage"


function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/logout" element={''} />
      <Route path="/smoothies" element={<RecipePage/>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
