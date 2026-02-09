import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Sales } from './pages/Sales';
import { Purchase } from './pages/Purchase';
import { Expense } from './pages/Expense';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { BarcodePrinter } from './pages/BarcodePrinter';
import { Tailoring } from './pages/Tailoring';
import { UserRole } from './types';

// Wrapper to handle conditional rendering based on auth
const AppContent = () => {
  const { user, isLoading } = useAuth();
  const [currentTab, setCurrentTab] = useState('dashboard');

  if (isLoading) return <div className="h-screen flex items-center justify-center bg-gray-50"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;

  if (!user) {
    return <Login />;
  }

  // Handle Tab Navigation and Rendering
  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return user.role === UserRole.STAFF ? <div className="text-center p-10 text-gray-500">Access Restricted</div> : <Dashboard />;
      case 'sales':
        return <Sales />;
      case 'tailoring':
        return <Tailoring />;
      case 'purchase':
        return user.role === UserRole.STAFF ? <div className="text-center p-10 text-gray-500">Access Restricted</div> : <Purchase onNavigate={(tab) => setCurrentTab(tab)} />;
      case 'barcode-printer':
        return <BarcodePrinter />;
      case 'expenses':
        return <Expense />;
      case 'settings':
        // Owner and Admin can access settings
        return (user.role === UserRole.OWNER || user.role === UserRole.ADMIN) ? <Settings /> : <div className="text-center p-10 text-gray-500">Access Restricted</div>;
      case 'reports':
        return user.role === UserRole.STAFF ? <div className="text-center p-10 text-gray-500">Access Restricted</div> : <Reports />;
      default:
        return <Dashboard />;
    }
  };

  // If a user logs in and their role doesn't support the current tab (e.g. staff on dashboard), reset
  if (user.role === UserRole.STAFF && (currentTab === 'dashboard' || currentTab === 'purchase' || currentTab === 'reports' || currentTab === 'settings')) {
    setCurrentTab('sales');
  }

  // Map tab IDs to titles
  const titles: Record<string, string> = {
    dashboard: 'Dashboard',
    sales: 'Sales Billing',
    tailoring: 'Tailoring Service',
    purchase: 'Purchase Entry',
    expenses: 'Expense Entry',
    reports: 'Financial Reports',
    settings: 'Settings'
  };

  return (
    <Layout
      title={titles[currentTab] || 'Day Book'}
      activeTab={currentTab}
      onNavigate={setCurrentTab}
    >
      {renderContent()}
    </Layout>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}