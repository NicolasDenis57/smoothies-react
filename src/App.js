import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import FrontPage from "./Components/FrontPage/FrontPage"
import RecipePage from "./Components/RecipePage/RecipePage"


function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/login" element={''} />
      <Route path="/signup" element={''} />
      <Route path="/logout" element={''} />
      <Route path="/smoothies" element={<RecipePage/>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
