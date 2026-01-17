
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './index.css';

function App() {
  const theme = useSelector((state: RootState) => state.theme.mode);

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
        <Navbar />
        <Sidebar />
        
        <main className="ml-0 md:ml-16 lg:ml-64 pt-16 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Home />} />
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </main>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: theme === 'dark' ? '#1f2937' : '#fff',
              color: theme === 'dark' ? '#fff' : '#333',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
