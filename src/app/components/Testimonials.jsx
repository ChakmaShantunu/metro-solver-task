"use client";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Placeholder testimonials with online profile images
const testimonials = [
  {
    id: 1,
    title: "Amazing product! Really improved my posture in just a few weeks.",
    name: "John Doe",
    role: "Designer",
    company: "XYZ Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Highly recommend! Great customer service and easy to use.",
    name: "Jane Smith",
    role: "Developer",
    company: "ABC Inc",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    title: "The best posture improvement tool I've tried so far.",
    name: "Michael Lee",
    role: "Manager",
    company: "DEF Ltd",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    title: "The best posture improvement tool I've tried so far.",
    name: "Michael Lee",
    role: "Manager",
    company: "DEF Ltd",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 5,
    title: "The best posture improvement tool I've tried so far.",
    name: "Michael Lee",
    role: "Manager",
    company: "DEF Ltd",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 relative">
      

      {/* Title & description */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-5xl font-bold">What People Say</h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Swiper Testimonials */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3.8}
        centeredSlides={true}
        initialSlide={Math.floor(testimonials.length / 2)}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 3.8 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-base-100 p-6 rounded-2xl shadow-md transition-all duration-300 relative my-16">
              <FaQuoteLeft className="text-4xl text-primary mb-4" />
              <p className="text-base text-gray-700 mb-6">{item.title}</p>
              <div className="border border-gray-300 border-dashed my-4"></div>
              <div className="flex items-center gap-4">
                {/* Profile image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.role} @ {item.company}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
