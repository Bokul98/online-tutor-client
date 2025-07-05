import React from 'react';
import Banner from './Banner';
import FAQSection from './FAQSection';
import FeaturedTutors from './FeaturedTutors';
import StatsSection from './StatsSection';
import LanguageCategorySection from './LanguageCategorySection';
import AnimatedFeatures from './AnimatedFeatures';
import TestimonialsSection from './TestimonialsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <StatsSection />
            <LanguageCategorySection />
            <AnimatedFeatures />
            <FeaturedTutors />
            <TestimonialsSection />
            <FAQSection />
        </div>
    );
};

export default Home;