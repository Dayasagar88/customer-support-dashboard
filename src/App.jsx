import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails";
import { TicketProvider } from "./context/TicketContext";

function App() {
  return (
    <TicketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tickets/:id" element={<TicketDetails />} />
        </Routes>
      </BrowserRouter>
    </TicketProvider>
  );
}

export default App;