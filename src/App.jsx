import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/countries" />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:name" element={<Country />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
