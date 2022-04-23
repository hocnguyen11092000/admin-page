import { Route, Routes } from "react-router-dom";
import Admin from "./components/layout/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Admin></Admin>}></Route>
      </Routes>
    </>
  );
}

export default App;
