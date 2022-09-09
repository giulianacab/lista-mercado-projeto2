import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home"
import {Navbar} from "./pages/components/Navbar"
import {AddItems} from './pages/AddItems';
import "./style.css";

function App() {
  return <>
  <Navbar>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add-items" element={<AddItems />} />
  </Routes>
  </Navbar>

  
  </>
}

export default App;
