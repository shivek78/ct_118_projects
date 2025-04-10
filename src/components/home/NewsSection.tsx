
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample news data
const newsItems = [
  {
    id: "news-1",
    title: "Annual Fundraising Gala Raises Record $1.2 Million for Veterans",
    excerpt: "The annual ValorFund Gala brought together celebrities, military officials, and generous donors to raise funds for veteran support programs.",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    date: "April 5, 2025",
    category: "Events"
  },
  {
    id: "news-2",
    title: "New Rehabilitation Center Opens with Support from Donors",
    excerpt: "The state-of-the-art rehabilitation center will serve veterans with physical injuries and PTSD, funded entirely by ValorFund donors.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    date: "March 22, 2025",
    category: "Facilities"
  },
  {
    id: "news-3",
    title: "ValorFund Partners with National Retailers for Memorial Day Campaign",
    excerpt: "Major retailers will donate a percentage of Memorial Day weekend sales to support military families through the ValorFund.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    date: "March 15, 2025",
    category: "Partnerships"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="section-title">Latest News</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest news, events, and stories about our mission and impact.
            </p>
          </div>
          <Link to="/news" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-army-DEFAULT text-army-DEFAULT hover:bg-army-DEFAULT hover:text-white">
              View All News
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-army-DEFAULT font-medium">{item.category}</span>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                
                <Link to={`/news/${item.id}`} className="flex items-center text-army-DEFAULT font-medium hover:underline">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
