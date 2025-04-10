
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', amount: 25000 },
  { name: 'Feb', amount: 32000 },
  { name: 'Mar', amount: 28000 },
  { name: 'Apr', amount: 43000 },
  { name: 'May', amount: 38000 },
  { name: 'Jun', amount: 50000 },
  { name: 'Jul', amount: 56000 },
];

const DonationChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md h-96">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold">Donation Trends</h3>
        <p className="text-sm text-gray-500">Monthly donation amounts for 2025</p>
      </div>
      
      <div className="p-6 h-[calc(100%-84px)]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              tickLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `$${value/1000}k`}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
              contentStyle={{ 
                borderRadius: '8px', 
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                border: 'none',
              }}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#2D3142" 
              fill="rgba(45, 49, 66, 0.1)" 
              activeDot={{ r: 6, stroke: '#2D3142', strokeWidth: 2, fill: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonationChart;
