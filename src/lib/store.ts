import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  // UI State
  isSidebarOpen: boolean;
  currentTheme: 'light' | 'dark' | 'system';
  currentLocale: string;
  
  // User State
  user: {
    id?: string;
    name?: string;
    email?: string;
    isAuthenticated: boolean;
  } | null;
  
  // Actions
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLocale: (locale: string) => void;
  setUser: (user: AppState['user']) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial State
      isSidebarOpen: false,
      currentTheme: 'system',
      currentLocale: 'en',
      user: null,
      
      // Actions
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      
      setTheme: (theme) => set({ currentTheme: theme }),
      
      setLocale: (locale) => set({ currentLocale: locale }),
      
      setUser: (user) => set({ user }),
      
      logout: () => set({ user: null }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        currentTheme: state.currentTheme,
        currentLocale: state.currentLocale,
        user: state.user,
      }),
    }
  )
); 