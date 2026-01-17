
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { setTheme } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  // Aplica o tema quando o componente monta ou o tema muda
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  // Detecta mudanças no tema do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  return { theme, setTheme: (mode: 'light' | 'dark') => dispatch(setTheme(mode)) };
};
