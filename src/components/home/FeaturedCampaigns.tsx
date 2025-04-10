
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CampaignCard from '@/components/campaigns/CampaignCard';

// Sample campaign data
const campaigns = [
  {
    id: "medical-support",
    title: "Medical Support for Wounded Warriors",
    description: "Help provide essential medical care and rehabilitation for soldiers wounded in the line of duty.",
    image: "https://images.unsplash.com/photo-1612776577212-91c55d1d8f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    target: 50000,
    raised: 32450,
    donors: 285,
    daysLeft: 14
  },
  {
    id: "family-assistance",
    title: "Military Family Assistance Program",
    description: "Support families of deployed soldiers with essential resources and financial assistance.",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    target: 75000,
    raised: 45720,
    donors: 412,
    daysLeft: 21
  },
  {
    id: "education",
    title: "Education Fund for Military Children",
    description: "Provide educational opportunities for children of military personnel through scholarships and grants.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    target: 100000,
    raised: 67800,
    donors: 534,
    daysLeft: 45
  }
];

const FeaturedCampaigns = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="section-title">Featured Campaigns</h2>
            <p className="text-gray-600 max-w-2xl">
              These campaigns need immediate attention. Your contribution can make a significant impact in the lives of our brave soldiers.
            </p>
          </div>
          <Link to="/campaigns" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-army-DEFAULT text-army-DEFAULT hover:bg-army-DEFAULT hover:text-white">
              View All Campaigns
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              {...campaign}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
