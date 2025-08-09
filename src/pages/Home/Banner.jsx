import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const bannerImages = [
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Online Language Tutoring',
    caption: 'Connect with Expert Tutors Worldwide',
  },
  {
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interactive Learning',
    caption: 'Interactive & Personalized Learning Experience',
  },
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Book Tutors Easily',
    caption: 'Book Your Favorite Tutor in Minutes',
  },
];

const Banner = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`w-full max-w-7xl mx-auto mt-6 mb-10 rounded-3xl overflow-hidden transition-all duration-500 ${
        isDark ? 'shadow-2xl shadow-slate-900/60 bg-gray-950' : 'shadow-xl bg-gray-100'
      }`}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        swipeable
        emulateTouch
        transitionTime={800}
        showIndicators
        className="banner-carousel"
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`inline-block mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
              isSelected
                ? 'bg-blue-500 scale-125'
                : isDark
                ? 'bg-gray-600 hover:bg-gray-400'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`${label} ${index + 1}`}
          />
        )}
      >
        {bannerImages.map((img, idx) => (
          <div
            key={idx}
            className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center banner-slide"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-2xl mb-4 animate-fadeInUp transition-transform duration-300 hover:scale-105 bg-clip-text text-transparent ${
                  isDark
                    ? 'bg-gradient-to-r from-white to-blue-200'
                    : 'bg-gradient-to-r from-white to-gray-300'
                }`}
              >
                {img.caption}
              </h2>
              <button
                type="button"
                className={`px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                } animate-fadeInUp delay-200 shadow-lg hover:shadow-xl`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;