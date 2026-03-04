import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckSquare, ShieldCheck, Users, Award, Heart, Microscope, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            {/* Hero Section with Overlay */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
                    }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-brand-navy/70"></div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-4">
                            <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Welcome to Micron Labs</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Empowering Healthcare <br /> Since <span className="text-primary-orange">2012</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
                            Leading PCD pharmaceutical company delivering high-quality, affordable medicines across India through our trusted franchise network.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/products"
                                className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                Explore Products <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Floating Value Cards */}
            <section className="relative -mt-20 z-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, title: 'Quality Assurance', desc: 'WHO-GMP certified products' },
                            { icon: Award, title: 'Trusted Brand', desc: '14+ years of excellence' },
                            { icon: Package, title: 'Wide Range', desc: '70+ pharmaceutical products' },
                            { icon: Heart, title: 'PCD Franchise', desc: 'Monopoly rights & support' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all p-6 text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-primary-orange/10 text-primary-orange rounded-full flex items-center justify-center mb-4">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                                alt="Pharmaceutical Lab"
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
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Leading PCD Pharmaceutical Company
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Micron Labs (P) Limited, established in 2012, is a premier PCD pharmaceutical company specializing in the distribution and marketing of high-quality pharmaceutical formulations. We have grown to become a trusted name in the industry with a commitment to quality, reliability, and accessible healthcare.
                            </p>
                            <ul className="space-y-3 mb-8">
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Our Range</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Product Categories</h2>
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
                                        alt={category.name}
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Our Commitment to Excellence</h2>
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
