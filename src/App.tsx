import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/index";

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
