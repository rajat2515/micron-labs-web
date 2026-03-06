import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm md:bg-transparent md:shadow-none'
            }`}>
            {/* Top Bar */}
            <div className={`${isScrolled ? 'hidden' : 'block'} bg-primary-orange text-white py-2 text-xs sm:text-sm transition-all`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center"><Phone size={14} className="mr-1" /> +91-9319275474 / 9319275478</span>
                        <span className="hidden sm:flex items-center"><Mail size={14} className="mr-1" /> micronlabspltd@gmail.com</span>
                    </div>

                </div>
            </div>

            {/* Main Header */}
            <div className={`${isScrolled ? 'bg-white' : 'bg-white md:bg-transparent'} transition-all`}>
                <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="Micron Labs Logo" className="h-16 w-auto" />
                        <div className="flex flex-col leading-tight">
                            <span className={`text-2xl md:text-3xl font-bold font-futura transition-colors ${isScrolled ? 'text-brand-navy' : 'text-brand-navy md:text-white'
                                }`}>Micron Labs (P) Limited</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-semibold transition-colors duration-200 uppercase tracking-wide relative pb-1
                  ${isActive(item.href)
                                        ? 'text-primary-orange'
                                        : isScrolled ? 'text-gray-700 hover:text-primary-orange' : 'text-white hover:text-primary-orange'
                                    }
                  ${isActive(item.href) ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-orange' : ''}
                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden focus:outline-none transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white'
                            }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium py-2 border-b border-gray-50
                    ${isActive(item.href) ? 'text-primary-orange' : 'text-gray-700'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
