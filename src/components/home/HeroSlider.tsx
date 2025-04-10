
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "Support Our Troops",
    description: "Your donation directly helps soldiers who protect our freedom. Join us in making a difference today.",
    image: "https://images.unsplash.com/photo-1605477371717-2ea6ddcfbb00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    buttonText: "Donate Now",
    buttonLink: "/donate"
  },
  {
    id: 2,
    title: "Helping Military Families",
    description: "When you donate, you're supporting not just soldiers, but their families at home. Every contribution matters.",
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    buttonText: "Learn More",
    buttonLink: "/about"
  },
  {
    id: 3,
    title: "Medical Support for Veterans",
    description: "Help provide essential medical care for veterans who have served our country with honor and courage.",
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    buttonText: "Support Now",
    buttonLink: "/campaigns/medical-support"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[500px] md:h-[600px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(45, 49, 66, 0.7), rgba(45, 49, 66, 0.7)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <Link to={slide.buttonLink}>
                <Button size="lg" className="bg-army-gold hover:bg-yellow-600 text-black text-lg">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-army-gold' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
