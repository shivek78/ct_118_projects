
import React from 'react';
import { Users, Heart, DollarSign, Home } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat = ({ icon, value, label }: StatProps) => (
  <div className="text-center p-6">
    <div className="inline-flex items-center justify-center bg-army-DEFAULT p-4 rounded-full mb-4">
      {icon}
    </div>
    <div className="text-3xl font-bold text-army-DEFAULT mb-1">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const ImpactStats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through the generosity of our donors, we've been able to make a significant impact in the lives of military personnel and their families.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat 
            icon={<Users className="h-8 w-8 text-white" />} 
            value="5,280+" 
            label="Soldiers Supported" 
          />
          <Stat 
            icon={<Heart className="h-8 w-8 text-white" />} 
            value="120+" 
            label="Medical Treatments" 
          />
          <Stat 
            icon={<DollarSign className="h-8 w-8 text-white" />} 
            value="$2.8M" 
            label="Funds Raised" 
          />
          <Stat 
            icon={<Home className="h-8 w-8 text-white" />} 
            value="450+" 
            label="Families Assisted" 
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
