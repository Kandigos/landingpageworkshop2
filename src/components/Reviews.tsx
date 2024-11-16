import React from 'react';
import { Star, Phone } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function Reviews() {
  const { content } = useContent();

  const scrollToCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    const calendarSection = document.getElementById('calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-container">
      <h2 className="section-title">חוות דעת משתתפים</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {content.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="flex mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg mb-6 leading-relaxed">{review.text}</p>
            <div className="font-medium text-lg">
              <span>{review.name}</span>
              <span className="text-gray-600"> | {review.role}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          מספר המקומות מוגבל! הצטרפו למסע של אדמה וצליל במרחב אבאדמה, וחוו חיבור מחודש לעצמכם דרך צלילים מדויקים ואווירה עוטפת.
        </p>
        <button
          onClick={scrollToCalendar}
          className="primary-button mb-16"
        >
          שריינו מקום עכשיו &gt;&gt;
        </button>
        
        {/* Contact Information */}
        <div className="mt-24 pt-12 border-t border-primary-light/20">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl font-medium mb-2">נתנאל קול</h3>
            <a
              href="tel:0523313435"
              className="flex items-center gap-3 bg-primary-light text-white px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">052-331-3435</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}