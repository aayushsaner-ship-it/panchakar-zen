import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  role: 'patient' | 'doctor';
}

export const Layout: React.FC<LayoutProps> = ({ children, role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <div className={cn(
        "transition-all duration-300",
        sidebarOpen ? "ml-64" : "ml-16"
      )}>
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex-1">
            <h1 className="text-lg font-semibold capitalize">
              {role} Dashboard
            </h1>
          </div>
        </header>

        {/* Main content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};