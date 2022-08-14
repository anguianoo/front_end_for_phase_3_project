import "./App.css";
import { Routes, Route } from "react-router-dom";
import DisplaySkaters from "./components/DisplaySkaters";
import Home from "./components/Home";
import Header from "./components/Header";
import DisplaySkateboards from "./components/DisplaySkateboards";
import { Container } from "@mui/system";
import Skater from "./components/Skater";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">Skaters</header> */}
      <Container maxWidth="sm">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skaters" element={<DisplaySkaters />} />
          <Route path="/skateboards" element={<DisplaySkateboards />} />
          <Route path="/skaters/:id" element={<Skater />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
