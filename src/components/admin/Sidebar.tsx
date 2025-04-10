
import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Home, 
  BarChart, 
  Clock, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isMobile, onClose }: SidebarProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', icon: Home, href: '/admin/dashboard' },
    { name: 'Analytics', icon: BarChart, href: '/admin/analytics' },
    { name: 'Transactions', icon: Clock, href: '/admin/transactions' },
    { name: 'Campaigns', icon: FileText, href: '/admin/campaigns' },
    { name: 'Users', icon: Users, href: '/admin/users' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div 
      className={cn(
        "bg-army-DEFAULT text-white flex flex-col h-full", 
        isMobile ? "fixed inset-y-0 left-0 z-50 w-64" : "w-64"
      )}
    >
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-army-gray">
          <Link to="/admin/dashboard" className="flex items-center">
            <Shield className="h-8 w-8 text-army-gold" />
            <span className="ml-2 text-xl font-bold">ValorFund</span>
          </Link>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
      
      <div className={cn("p-4", !isMobile && "border-b border-army-gray")}>
        {!isMobile && (
          <Link to="/admin/dashboard" className="flex items-center">
            <Shield className="h-8 w-8 text-army-gold" />
            <span className="ml-2 text-xl font-bold">ValorFund</span>
          </Link>
        )}
        <div className="mt-4 text-sm text-gray-300">Admin Panel</div>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={isMobile ? onClose : undefined}
            className={({ isActive }) => cn(
              "flex items-center px-4 py-3 rounded-lg transition-colors",
              isActive 
                ? "bg-army-gray text-white" 
                : "text-gray-300 hover:bg-army-gray hover:text-white"
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.name}</span>
            <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-army-gray">
        <Link 
          to="/login" 
          onClick={isMobile ? onClose : undefined}
          className="flex items-center px-4 py-3 text-gray-300 hover:bg-army-gray hover:text-white rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
