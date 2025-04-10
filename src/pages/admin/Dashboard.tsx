
import React, { useState } from 'react';
import { DollarSign, Users, FileText, TrendingUp } from 'lucide-react';
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import StatCard from '@/components/admin/dashboard/StatCard';
import RecentDonations from '@/components/admin/dashboard/RecentDonations';
import DonationChart from '@/components/admin/dashboard/DonationChart';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black opacity-30" onClick={() => setSidebarOpen(false)}></div>
          <Sidebar isMobile onClose={() => setSidebarOpen(false)} />
        </div>
      )}
      
      <div className="flex-1 flex flex-col">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Dashboard title */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome back, John. Here's an overview of recent activity.</p>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard 
              title="Total Donations" 
              value="$245,762" 
              icon={<DollarSign className="h-6 w-6 text-army-DEFAULT" />}
              change={{ value: 12.5, label: "from last month", positive: true }}
            />
            <StatCard 
              title="Total Donors" 
              value="1,842" 
              icon={<Users className="h-6 w-6 text-army-DEFAULT" />}
              change={{ value: 8.3, label: "from last month", positive: true }}
            />
            <StatCard 
              title="Active Campaigns" 
              value="12" 
              icon={<FileText className="h-6 w-6 text-army-DEFAULT" />}
              change={{ value: 2, label: "new this month", positive: true }}
            />
            <StatCard 
              title="Success Rate" 
              value="87%" 
              icon={<TrendingUp className="h-6 w-6 text-army-DEFAULT" />}
              change={{ value: 3.2, label: "from last month", positive: true }}
            />
          </div>
          
          {/* Chart and donations table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DonationChart />
            <RecentDonations />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
