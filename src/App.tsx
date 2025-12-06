import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTPVerification from "./pages/OTPVerification";
import CustomerDashboard from "./pages/CustomerDashboard";
import NotFound from "./pages/NotFound";

import AdminLoginPage from "./pages/admin/Login";
import AdminDashboardPage from "./pages/admin/Dashboard";
import AdminUsersListPage from "./pages/admin/UsersList";
import AdminShopsListPage from "./pages/admin/ShopsList";
import AdminRechargesListPage from "./pages/admin/RechargesList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<AdminUsersListPage />} />
          <Route path="/admin/shops" element={<AdminShopsListPage />} />
          <Route path="/admin/recharges" element={<AdminRechargesListPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
