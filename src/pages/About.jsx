import React from 'react';
import { CheckSquare, Award, Target, Eye } from 'lucide-react';

const About = () => {
    const checkpoints = [
        {
            title: 'Reliability',
            desc: 'Excellent customer service, dedicated account management, and the best product packaging on the market at a very competitive price.',
        },
        {
            title: 'Purity',
            desc: 'Our medications are manufactured in a technologically advanced and innovative infrastructure facility that meets both Indian and international medical standards.',
        },
        {
            title: 'Monopoly Rights',
            desc: 'We offer exclusive monopoly-based distribution rights for our franchise partners, ensuring a competitive edge in your territory.',
        },
        {
            title: 'Promotional Support',
            desc: 'Complete marketing and promotional material support including visual aids, sample kits, and brand-building tools to grow your business.',
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&h=600&fit=crop')"
                    }}
                ></div>
                <div className="absolute inset-0 bg-brand-navy/70"></div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="mb-4">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">About Us</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold">Micron Labs Pvt Ltd</h1>
                </div>
            </section>

            {/* Company Profile — Reference image style */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Headline + Body + Checkpoints */}
                        <div>
                            <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">About Us</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                                We Offer PCD Pharma &amp; Third-Party Manufacturing with 14+ Years of Proven Industry Experience
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                                Micron Labs (P) Limited, established in <strong>2012</strong>, is one of the leading organisations
                                involved in the distribution, marketing, and third-party manufacturing of precisely formulated
                                pharmaceutical products. We have a growing portfolio of <strong>70+ products</strong> across several
                                therapeutic segments including Gynae, Paediatric, Ortho, Cardiac-Diabetic, Derma, and General
                                Medicine. Our manufacturing partners are <strong>WHO-GMP certified</strong> and equipped with
                                cutting-edge technology. With franchise partners spread across India, we are successfully meeting
                                our clients' demands by offering unique product portfolios that include tablets, capsules, syrups,
                                injectables, ointments, and drops.
                            </p>

                            <div className="space-y-6">
                                {checkpoints.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-primary-orange rounded flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckSquare size={18} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: '14+', label: 'Years of Excellence' },
                                { number: '70+', label: 'Products in Portfolio' },
                                { number: '10+', label: 'Therapeutic Segments' },
                                { number: 'PAN', label: 'India Presence' },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-all">
                                    <div className="text-4xl font-bold text-primary-orange mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}

                            {/* Image below stats */}
                            <div className="col-span-2 rounded-xl overflow-hidden shadow-card h-56">
                                <img
                                    src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=400&fit=crop"
                                    alt="Pharmaceutical manufacturing facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-card">
                            <div className="w-16 h-16 bg-primary-orange/10 text-primary-orange rounded-lg flex items-center justify-center mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver high-quality, affordable pharmaceutical products through our PCD franchise network that improve healthcare accessibility and enhance the well-being of communities across India.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-card">
                            <div className="w-16 h-16 bg-primary-orange/10 text-primary-orange rounded-lg flex items-center justify-center mb-6">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a leading PCD pharmaceutical company recognized for quality products, strong franchise partnerships, and customer-centric distribution solutions across India.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-card">
                            <div className="w-16 h-16 bg-primary-orange/10 text-primary-orange rounded-lg flex items-center justify-center mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Integrity, excellence, innovation, and customer satisfaction are at the core of everything we do. We are committed to ethical practices and continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">What Sets Us Apart</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            'WHO-GMP Certified Products',
                            'Comprehensive Product Portfolio',
                            'Quality Assured Formulations',
                            'Monopoly Rights for Franchise',
                            'Competitive Pricing',
                            'Pan-India Distribution Network',
                            'Marketing & Promotional Support',
                            'Dedicated Account Management',
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                <div className="w-7 h-7 bg-primary-orange rounded flex items-center justify-center flex-shrink-0">
                                    <CheckSquare size={16} className="text-white" />
                                </div>
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
