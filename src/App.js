import "./App.css";
import Navigation from "./components/Navigation";
import SectionOne from "./pages/SectionOne";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <Navigation />
      <SectionOne />
    </Box>
  );
}

export default App;
