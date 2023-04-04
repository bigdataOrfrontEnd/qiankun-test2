import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="hom">首页</Link>
        <Link to="/my">我得</Link>
        <Routes>
          <Route path="/hom" element={<Home />}></Route>
          {/* <Route path="/my" element={<My />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
