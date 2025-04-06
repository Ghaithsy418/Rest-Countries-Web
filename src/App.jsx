import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  },
});

function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <ReactQueryDevtools />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Navigate replace to="/countries" />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:name" element={<Country />} />
          </Routes>
        </AnimatePresence>
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
