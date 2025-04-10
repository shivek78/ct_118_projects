
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, change, className }: StatCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-600">{title}</h3>
        <div className="bg-army-light p-2 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      {change && (
        <div className="flex items-center text-sm">
          <span className={change.positive ? 'text-green-600' : 'text-red-600'}>
            {change.positive ? '+' : ''}{change.value}%
          </span>
          <span className="text-gray-500 ml-1">
            {change.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
