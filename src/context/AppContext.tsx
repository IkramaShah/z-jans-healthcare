import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  activeIngredient: string;
  dosage: string;
  packaging: string;
  efficacy: string;
  storage: string;
}

interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  textSize: 'normal' | 'large';
  toggleTextSize: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  distributorOpen: boolean;
  setDistributorOpen: (open: boolean) => void;
  comparisonItems: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  comparisonBarOpen: boolean;
  setComparisonBarOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true); // default to dark premium theme
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [distributorOpen, setDistributorOpen] = useState<boolean>(false);
  const [comparisonItems, setComparisonItems] = useState<Product[]>([]);
  const [comparisonBarOpen, setComparisonBarOpen] = useState<boolean>(false);

  // Sync theme, text size, and contrast classes on body
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const body = document.body;
    if (textSize === 'large') {
      body.classList.add('text-large');
    } else {
      body.classList.remove('text-large');
    }
  }, [textSize]);

  useEffect(() => {
    const body = document.body;
    if (highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleTextSize = () => setTextSize(prev => prev === 'normal' ? 'large' : 'normal');
  const toggleHighContrast = () => setHighContrast(!highContrast);

  const addToComparison = (product: Product) => {
    if (comparisonItems.some(item => item.id === product.id)) return;
    if (comparisonItems.length >= 3) {
      alert("You can compare up to 3 products at a time.");
      return;
    }
    setComparisonItems([...comparisonItems, product]);
    setComparisonBarOpen(true);
  };

  const removeFromComparison = (productId: string) => {
    setComparisonItems(comparisonItems.filter(item => item.id !== productId));
  };

  const clearComparison = () => {
    setComparisonItems([]);
    setComparisonBarOpen(false);
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      toggleDarkMode,
      textSize,
      toggleTextSize,
      highContrast,
      toggleHighContrast,
      searchOpen,
      setSearchOpen,
      distributorOpen,
      setDistributorOpen,
      comparisonItems,
      addToComparison,
      removeFromComparison,
      clearComparison,
      comparisonBarOpen,
      setComparisonBarOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
