import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-charcoal text-white pt-16 pb-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                {/* Company Info */}
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="text-white">MICRON</span>
                        <span className="text-primary-orange ml-1">LABS</span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Leading PCD pharmaceutical company committed to providing high-quality, affordable medicines through our trusted franchise network since 2012.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary-orange uppercase tracking-wide">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-primary-orange transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary-orange transition-colors">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-primary-orange transition-colors">Our Products</Link></li>
                        <li><Link to="/contact" className="hover:text-primary-orange transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Product Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary-orange uppercase tracking-wide">Our Range</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/products" className="hover:text-primary-orange transition-colors">Antibiotics</Link></li>
                        <li><Link to="/products" className="hover:text-primary-orange transition-colors">Pain Management</Link></li>
                        <li><Link to="/products" className="hover:text-primary-orange transition-colors">Vitamins & Supplements</Link></li>
                        <li><Link to="/products" className="hover:text-primary-orange transition-colors">Dermatology</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary-orange uppercase tracking-wide">Contact Us</h3>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-start">
                            <MapPin className="mr-3 text-primary-orange flex-shrink-0 mt-1" size={18} />
                            <span>B-1202, BPTP Park Life, Sector 57, Gurugram, Haryana - 122002, India</span>
                        </li>
                        <li className="flex items-start">
                            <Phone className="mr-3 text-primary-orange flex-shrink-0 mt-0.5" size={18} />
                            <span>+91-9319275474<br />+91-9319275478</span>
                        </li>
                        <li className="flex items-center">
                            <Mail className="mr-3 text-primary-orange flex-shrink-0" size={18} />
                            <span>micronlabspltd@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Micron Labs Pvt Ltd. All Rights Reserved. | Designed with care for better healthcare.</p>
            </div>
        </footer>
    );
};

export default Footer;
