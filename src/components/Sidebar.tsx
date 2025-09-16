import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  User, 
  UserCheck, 
  Calendar, 
  Activity, 
  BarChart3, 
  Settings,
  Home,
  Users,
  Monitor,
  ClipboardList,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  role: 'patient' | 'doctor';
  isOpen: boolean;
  onToggle: () => void;
}

const patientNavItems = [
  { name: 'Dashboard', path: '/patient', icon: Home },
  { name: 'Schedule', path: '/patient/schedule', icon: Calendar },
  { name: 'Progress', path: '/patient/progress', icon: BarChart3 },
  { name: 'Profile', path: '/patient/profile', icon: User },
];

const doctorNavItems = [
  { name: 'Dashboard', path: '/doctor', icon: Home },
  { name: 'Patients', path: '/doctor/patients', icon: Users },
  { name: 'Live Tracking', path: '/doctor/tracking', icon: Monitor },
  { name: 'Schedule Manager', path: '/doctor/schedule', icon: ClipboardList },
  { name: 'Analytics', path: '/doctor/analytics', icon: BarChart3 },
];

export const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, onToggle }) => {
  const location = useLocation();
  const navItems = role === 'patient' ? patientNavItems : doctorNavItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-40",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-healing rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            {isOpen && (
              <div>
                <h2 className="font-semibold text-sm">Panchakarma Portal</h2>
                <p className="text-xs text-muted-foreground capitalize">{role} Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )
                  }
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {isOpen && <span>{item.name}</span>}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-3 text-muted-foreground"
          >
            <LogOut className="w-5 h-5" />
            {isOpen && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};