import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ToolPage } from './pages/ToolPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useAuth } from './contexts/AuthContext';
import { initializeAnalytics } from './services/analytics/tracking';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/welcome" />;
}

export function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-black -z-10" />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <main className="flex-grow pt-20">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tools/:toolId" element={<ToolPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}