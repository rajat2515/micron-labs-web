import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send, Clock, Building2, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const SERVICE_ID = 'service_z5tjtsb';
const TEMPLATE_ID = 'template_izq69xa';
const PUBLIC_KEY = 'wESttQgRZcq-061WG';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        phone: '',
        from_email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
            setStatus('success');
            setFormData({ from_name: '', phone: '', from_email: '', subject: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop')"
                    }}
                ></div>
                <div className="absolute inset-0 bg-brand-navy/70"></div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="mb-4">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Get in Touch</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Offices</h2>


                            {/* Corporate Office */}
                            <div className="bg-white rounded-xl p-6 shadow-card">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-primary-orange/10 text-primary-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-1">Corporate Office</h3>
                                        <p className="text-sm text-gray-500">Gurugram, Haryana</p>
                                    </div>
                                </div>
                                <div className="space-y-3 ml-16">
                                    <div className="flex items-start">
                                        <MapPin className="text-primary-orange mt-1 mr-3 flex-shrink-0" size={18} />
                                        <p className="text-gray-600 text-sm">B-1202, BPTP Park Life, Sector 57, Gurugram, Haryana - 122002, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-white rounded-xl p-6 shadow-card">
                                <h3 className="font-bold text-xl text-gray-900 mb-4">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Phone className="text-primary-orange mr-3 flex-shrink-0 mt-0.5" size={20} />
                                        <div>
                                            <div className="text-sm text-gray-500">Phone</div>
                                            <div className="text-gray-800 font-medium">+91-9319275474</div>
                                            <div className="text-gray-800 font-medium">+91-9319275478</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="text-primary-orange mr-3 flex-shrink-0" size={20} />
                                        <div>
                                            <div className="text-sm text-gray-500">Email</div>
                                            <div className="text-gray-800 font-medium">micronlabspltd@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="text-primary-orange mr-3 flex-shrink-0" size={20} />
                                        <div>
                                            <div className="text-sm text-gray-500">Business Hours</div>
                                            <div className="text-gray-800 font-medium">Mon - Sat: 9:00 AM - 6:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl p-8 shadow-card">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-6">
                                    <CheckCircle size={20} className="flex-shrink-0" />
                                    <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6">
                                    <AlertCircle size={20} className="flex-shrink-0" />
                                    <p className="text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-primary-orange hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader size={20} className="mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send size={20} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
