import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const bannerImages = [
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
    alt: 'Online Language Tutoring',
    caption: 'Connect with Expert Tutors Worldwide',
  },
  {
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
    alt: 'Interactive Learning',
    caption: 'Interactive & Personalized Learning Experience',
  },
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    alt: 'Book Tutors Easily',
    caption: 'Book Your Favorite Tutor in Minutes',
  },
];

const Banner = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`w-full max-w-7xl mx-auto mt-4 mb-8 rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? 'shadow-2xl shadow-slate-900/50' : 'shadow-xl'}`}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        swipeable
        emulateTouch
        className="banner-carousel"
      >
        {bannerImages.map((img, idx) => (
          <div key={idx} className="relative h-[220px] md:h-[350px] lg:h-[420px] flex items-center justify-center">
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            {/* Stronger overlay for better text visibility */}
            <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/60 md:bg-black/50'} flex items-center justify-center transition-all duration-300`}>
              <h2 className={`text-white text-center text-2xl md:text-4xl font-extrabold drop-shadow-2xl px-4 py-2 rounded-lg ${isDark ? 'bg-slate-900/60' : 'bg-black/40'} backdrop-blur-sm animate-fadeInUp transition-all duration-300`}>
                {img.caption}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;