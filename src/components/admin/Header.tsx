
import React from 'react';
import { Bell, Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header = ({ onOpenSidebar }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6">
      <div className="flex items-center justify-between">
        {/* Left: Menu button & Search */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={onOpenSidebar}
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 py-2 pr-4 rounded-lg bg-gray-100 w-64 focus:outline-none focus:ring-2 focus:ring-army-DEFAULT"
            />
          </div>
        </div>
        
        {/* Right: Notifications & Profile */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
            <div className="h-8 w-8 bg-army-DEFAULT rounded-full flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
