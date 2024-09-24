import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./maincontent";
import "./App.css";
import Engineering from "./engineering.js";
import Medical from "./medical.js";
import Finance from "./finance.js";
import FrontEnd from "./frontend";
import Orthopedics from "./orthopedic";
import AssetManager from "./assetmanager";
import About from "./About";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/medical" element={<Medical />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/" element={<MainContent />} />
                <Route path="/frontend" element={<FrontEnd />} />
                <Route path="/orthopedics" element={<Orthopedics />} />
                <Route path="/assetmanager" element={<AssetManager />} />
                {/* {/*<Route path="/clothingforwomen" element={<Women />} /> */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
