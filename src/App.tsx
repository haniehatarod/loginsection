import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import Posts from "./pages/Posts";
import AppLayout from "./AppLayout";
import Protected from "./components/Protected";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <Protected>
                  <Posts />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
