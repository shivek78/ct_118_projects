
import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import FeaturedCampaigns from '@/components/home/FeaturedCampaigns';
import NewsSection from '@/components/home/NewsSection';
import ImpactStats from '@/components/home/ImpactStats';
import DonateCallout from '@/components/common/DonateCallout';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <ImpactStats />
        <FeaturedCampaigns />
        <DonateCallout />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
