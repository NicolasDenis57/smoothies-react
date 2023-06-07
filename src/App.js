import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import Layout from "./Components/Layout"
import FrontPage from "./Components/FrontPage/FrontPage"
import RecipePage from "./Components/RecipePage/RecipePage"
import LoginPage from "./Components/LoginPage/LoginPage"
import SignUpPage from "./Components/SignUpPage/SignUpPage"
import MissingPage from "./Components/MissingPage/MissingPage"
import UnauthorizedPage from "./Components/UnauthorizedPage/UnauthorizedPage"
import AdminPage from "./Components/AdminPage/AdminPage"
import RequireAuth from './Components/RequireAuth';
import PersistLogin from "./Components/PersistLogin";

import { Routes, Route } from "react-router-dom";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}




function App() {
  return (
  <>
    <Header />
        <Routes>
        
          <Route path="/" element={< Layout />}>

            {/* public routes */}
            <Route path="/" element={< FrontPage />} />
            <Route path="login" element={< LoginPage />} />
            <Route path="signup" element={< SignUpPage />} />
            <Route path="unauthorized" element={< UnauthorizedPage />} />

            
            <Route element={<PersistLogin />}>

                    {/* protected routes only fo members */}

                        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
                          <Route path="smoothies" element={< RecipePage />} />
                        </Route>

                    {/*protected routes only for admin */}
                        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                          <Route path="admin" element={< AdminPage />} />
                        </Route>

                    {/* catch all */}
                        <Route path="*" element={< MissingPage />} />

            </Route>

           
            
          </Route>
        </Routes>
    <Footer />
   
  </>
  );
}

export default App;
