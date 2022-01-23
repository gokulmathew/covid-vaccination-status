import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import AppRoutes from "./Routes/index";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
