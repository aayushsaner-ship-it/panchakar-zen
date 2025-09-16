import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import RoleSelection from "./pages/RoleSelection";
import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          
          {/* Patient Routes */}
          <Route 
            path="/patient" 
            element={
              <Layout role="patient">
                <PatientDashboard />
              </Layout>
            } 
          />
          <Route 
            path="/patient/schedule" 
            element={
              <Layout role="patient">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Schedule Management</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />
          <Route 
            path="/patient/progress" 
            element={
              <Layout role="patient">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Progress Tracking</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />
          <Route 
            path="/patient/profile" 
            element={
              <Layout role="patient">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Patient Profile</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />

          {/* Doctor Routes */}
          <Route 
            path="/doctor" 
            element={
              <Layout role="doctor">
                <DoctorDashboard />
              </Layout>
            } 
          />
          <Route 
            path="/doctor/patients" 
            element={
              <Layout role="doctor">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Patient Management</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />
          <Route 
            path="/doctor/tracking" 
            element={
              <Layout role="doctor">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Live Therapy Tracking</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />
          <Route 
            path="/doctor/schedule" 
            element={
              <Layout role="doctor">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Schedule Manager</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />
          <Route 
            path="/doctor/analytics" 
            element={
              <Layout role="doctor">
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
                  <p className="text-muted-foreground">Coming soon...</p>
                </div>
              </Layout>
            } 
          />

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
