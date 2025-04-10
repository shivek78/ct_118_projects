
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DonateCallout = () => {
  return (
    <section className="py-16 bg-army-DEFAULT text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a Difference Today</h2>
            <p className="text-lg">
              Your contribution, no matter how small, can have a significant impact on the lives of soldiers and their families. Join us in supporting these brave individuals who protect our freedom.
            </p>
          </div>
          <div>
            <Link to="/donate">
              <Button size="lg" className="bg-army-gold hover:bg-yellow-600 text-black text-lg px-8 py-6">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCallout;
