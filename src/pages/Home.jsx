import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckSquare, ShieldCheck, Users, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── SLIDE DATA ─────────────────────────────────────────────── */
const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=900&fit=crop&q=80',
        eyebrow: 'Welcome to Micron Labs',
        heading: 'Touching Lives,\nEnriching Health...',
        sub: 'Leading PCD pharmaceutical company delivering high-quality, affordable medicines across India since 2012.',
        cta: { label: 'Explore Products', to: '/products' },
        cta2: { label: 'Contact Us', to: '/contact' },
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=900&fit=crop&q=80',
        eyebrow: 'WHO-GMP Certified',
        heading: 'Quality You Can\nTrust',
        sub: 'Every product manufactured under strict WHO-GMP standards — delivering purity, safety, and efficacy in every dose.',
        cta: { label: 'About Us', to: '/about' },
        cta2: null,
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&h=900&fit=crop&q=80',
        eyebrow: 'PCD Pharma Franchise',
        heading: 'Grow With\nMicron Labs',
        sub: 'Join our trusted franchise network and build a thriving pharmaceutical business with monopoly rights and full promotional support.',
        cta: { label: 'Become a Partner', to: '/contact' },
        cta2: null,
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&h=900&fit=crop&q=80',
        eyebrow: '8 Therapeutic Segments',
        heading: '70+ Products\nFor Every Need',
        sub: 'Analgesics, Antibiotics, Vitamins, Gynecology, Gastroenterology, Dermatology, Cough & Cold, and Dental Care — all under one trusted brand.',
        cta: { label: 'View Products', to: '/products' },
        cta2: null,
    },
];

/* ─── HERO CAROUSEL ──────────────────────────────────────────── */
const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const total = slides.length;

    const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
    const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next, paused]);

    const slide = slides[current];

    return (
        <div
            className="relative min-h-screen flex items-center overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Background crossfade */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={slide.id + '-bg'}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${slide.image}')` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-brand-navy/65" />

            {/* Text Content */}
            <div className="container mx-auto px-4 relative z-10 text-white py-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id + '-content'}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        {/* Eyebrow label */}
                        <p className="text-primary-orange font-bold text-sm tracking-widest uppercase mb-3">
                            {slide.eyebrow}
                        </p>

                        {/* Heading — h1 only on first slide for SEO */}
                        {current === 0 ? (
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight whitespace-pre-line">
                                {slide.heading}
                            </h1>
                        ) : (
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight whitespace-pre-line">
                                {slide.heading}
                            </h2>
                        )}

                        {/* Description */}
                        <p className="text-base md:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
                            {slide.sub}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={slide.cta.to}
                                className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                {slide.cta.label} <ArrowRight size={20} className="ml-2" />
                            </Link>
                            {slide.cta2 && (
                                <Link
                                    to={slide.cta2.to}
                                    className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                                >
                                    {slide.cta2.label}
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Prev Arrow */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-primary-orange text-white flex items-center justify-center transition-all backdrop-blur-sm"
            >
                <ChevronLeft size={22} />
            </button>

            {/* Next Arrow */}
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-primary-orange text-white flex items-center justify-center transition-all backdrop-blur-sm"
            >
                <ChevronRight size={22} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${i === current
                            ? 'w-8 h-3 bg-primary-orange'
                            : 'w-3 h-3 bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>

            {/* Progress bar at very bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                <motion.div
                    key={current + '-progress'}
                    className="h-full bg-primary-orange"
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? '0%' : '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                />
            </div>
        </div>
    );
};

/* ─── HOME PAGE ──────────────────────────────────────────────── */
const Home = () => {
    const productCategories = [
        { name: 'Antibiotics', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=300&fit=crop' },
        { name: 'Pain & Fever Management', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop' },
        { name: 'Vitamins & Supplements', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop' },
        { name: 'Dermatology', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=300&fit=crop' },
        { name: 'Gynecology', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&h=300&fit=crop' },
        { name: 'Dental Care', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop' },
    ];

    return (
        <div className="bg-white">
            {/* ── HERO CAROUSEL ── */}
            <section aria-label="Micron Labs – Hero Slideshow">
                <HeroCarousel />
            </section>

            {/* About Section */}
            <section className="py-20 bg-white" aria-labelledby="about-heading">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                                alt="Pharmaceutical Lab – Micron Labs"
                                className="rounded-2xl shadow-lg w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-primary-orange text-white p-6 rounded-xl shadow-lg">
                                <div className="text-4xl font-bold">14+</div>
                                <div className="text-sm">Years of Excellence</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="mb-4">
                                <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">About Us</span>
                            </div>
                            <h2 id="about-heading" className="text-4xl font-bold text-gray-800 mb-6">
                                Leading PCD Pharmaceutical Company
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Micron Labs (P) Limited, established in 2012, is a premier PCD pharmaceutical company specializing in the distribution and marketing of high-quality pharmaceutical formulations. We have grown to become a trusted name in the industry with a commitment to quality, reliability, and accessible healthcare.
                            </p>
                            <ul className="space-y-3 mb-8" aria-label="Key benefits">
                                {['Quality Certified Products', 'Monopoly Rights for Partners', 'Marketing Support', 'Pan-India Distribution'].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <div className="w-7 h-7 bg-primary-orange rounded flex items-center justify-center mr-3 flex-shrink-0">
                                            <CheckSquare size={16} className="text-white" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-primary-orange font-semibold hover:underline"
                            >
                                Learn More About Us <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 bg-white" aria-labelledby="products-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Our Range</span>
                        <h2 id="products-heading" className="text-4xl font-bold text-gray-800 mt-2 mb-4">Product Categories</h2>
                        <div className="w-20 h-1 bg-primary-orange mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={`${category.name} – Micron Labs product category`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-primary-orange text-white p-4">
                                    <h3 className="text-lg font-bold">{category.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/products"
                            className="inline-flex items-center bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            View All Products <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50" aria-labelledby="why-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
                        <h2 id="why-heading" className="text-4xl font-bold text-gray-800 mt-2 mb-4">Our Commitment to Excellence</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Microscope, title: 'Quality Products', desc: 'Comprehensive range of WHO-GMP certified pharmaceutical formulations across multiple therapeutic segments.' },
                            { icon: ShieldCheck, title: 'Franchise Support', desc: 'Complete marketing and promotional support with monopoly rights for our PCD franchise partners.' },
                            { icon: Users, title: 'Customer Focus', desc: 'Dedicated to improving healthcare accessibility with affordable, effective medicines through our distribution network.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all">
                                <div className="w-16 h-16 bg-primary-orange/10 text-primary-orange rounded-lg flex items-center justify-center mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
