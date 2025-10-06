import { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// Custom Hook untuk menggunakan AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log('🔄 Checking authentication status...');
      
      // Coba dulu dari localStorage (fallback)
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        console.log('📦 Found user in localStorage:', userData.username);
        setUser(userData);
        setLoading(false);
        return;
      }
      
      // Jika tidak ada di localStorage, cek ke server
      const res = await fetch('https://8619d4a4cd35.ngrok-free.app/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });
      
      console.log('🔍 Auth check response status:', res.status);
      
      if (res.ok) {
        const data = await res.json();
        console.log('✅ User authenticated:', data.user?.username);
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        console.log('❌ User not authenticated');
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('🔴 Auth check error:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      await fetch('https://8619d4a4cd35.ngrok-free.app/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Export default untuk komponen, dan named export untuk hook
export default AuthContext;