
import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Users, Calendar } from 'lucide-react';

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  target: number;
  raised: number;
  donors: number;
  daysLeft: number;
}

const CampaignCard = ({
  id,
  title,
  description,
  image,
  target,
  raised,
  donors,
  daysLeft
}: CampaignCardProps) => {
  const progress = Math.round((raised / target) * 100);
  
  return (
    <div className="campaign-card group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-army-gold text-black text-sm font-bold rounded-full px-3 py-1">
          {daysLeft} days left
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        
        {/* Progress */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="font-semibold">${raised.toLocaleString()}</span>
            <span className="text-gray-500">of ${target.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{donors} donors</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{daysLeft} days left</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          <Link to={`/campaigns/${id}`} className="flex-1">
            <Button variant="outline" className="w-full border-army-DEFAULT text-army-DEFAULT hover:bg-army-DEFAULT hover:text-white">
              Details
            </Button>
          </Link>
          <Link to={`/donate?campaign=${id}`} className="flex-1">
            <Button className="w-full bg-army-gold hover:bg-yellow-600 text-black">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
