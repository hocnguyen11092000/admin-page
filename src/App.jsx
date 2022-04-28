import { Route, Routes } from "react-router-dom";
import Admin from "./components/layout/Admin";
import Login from "./features/auth/pages/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/*" element={<Admin></Admin>}></Route>
      </Routes>
    </>
  );
}

export default App;
