
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { Toaster } from 'react-hot-toast';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SignInSignUp from './components/auth/SignInSignUp';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Routes>
          {/* Rotas Públicas de Autenticação */}
          <Route path="/sign-in" element={<SignInSignUp type="sign-in" />} />
          <Route path="/sign-up" element={<SignInSignUp type="sign-up" />} />
          
          {/* Rotas Protegidas */}
          <Route path="/" element={
            <>
              <SignedIn>
                <Navbar />
                <Sidebar />
                <main className={`
                  pt-16 md:pt-16 
                  ${!isMobile ? 'md:ml-16 lg:ml-64' : ''}
                  transition-all duration-300
                  min-h-screen
                `}>
                  <div className="max-w-7xl mx-auto">
                    <Home />
                  </div>
                </main>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          
          <Route path="/dashboard" element={
            <>
              <SignedIn>
                <Navbar />
                <Sidebar />
                <main className={`
                  pt-16 md:pt-16 
                  ${!isMobile ? 'md:ml-16 lg:ml-64' : ''}
                  transition-all duration-300
                  min-h-screen
                `}>
                  <div className="max-w-7xl mx-auto">
                    <Dashboard />
                  </div>
                </main>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          
          {/* Rota para páginas não encontradas */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">404</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Página não encontrada</p>
              </div>
            </div>
          } />
        </Routes>

        <Toaster
          position={isMobile ? "top-center" : "top-right"}
          toastOptions={{
            duration: 4000,
            style: {
              background: theme === 'dark' ? '#1f2937' : '#fff',
              color: theme === 'dark' ? '#fff' : '#333',
              fontSize: isMobile ? '14px' : '16px',
              padding: isMobile ? '12px' : '16px',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
