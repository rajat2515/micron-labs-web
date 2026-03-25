import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
    Briefcase, Eye, BookOpen, CreditCard, Bell, Package,
    Gift, Pencil, Key, Shirt, Star, Send, CheckCircle,
    AlertCircle, Loader, ShoppingCart, X, Plus, Minus, ChevronRight
} from 'lucide-react';

const SERVICE_ID = 'service_z5tjtsb';
const TEMPLATE_ID = 'template_izq69xa';
const PUBLIC_KEY = 'wESttQgRZcq-061WG';

/* ─── MATERIALS DATA ──────────────────────────────────────── */
const materialCategories = [
    {
        id: 'visual-aids',
        label: 'Visual Aids & LBLs',
        icon: Eye,
        color: '#e05a00',
        items: [
            {
                id: 'product-range-lbl',
                name: 'Product Range LBL',
                desc: 'Comprehensive visual aid detailing the complete high-quality product range of Micron Labs.',
                image: '/materials/img_6.jpeg',
                tag: 'Essential',
            },
            {
                id: 'micort-50-lbl',
                name: 'Micort-50 Visual Aid',
                desc: 'Detailed product card for Micort-50 Dry Syrup with mechanism of action and indications.',
                image: '/materials/img_9.jpeg',
                tag: 'Pediatric',
            },
        ],
    },
    {
        id: 'mr-essentials',
        label: 'MR Essentials & Desk Items',
        icon: Briefcase,
        color: '#1e3a5f',
        items: [
            {
                id: 'branded-pen',
                name: 'Branded Yellow Pen',
                desc: 'Premium quality yellow ballpoint pens printed with the Micron Labs logo.',
                image: '/materials/img_3.jpeg',
                tag: 'Daily Use',
            },
            {
                id: 'reminder-diary',
                name: 'Reminder Diary',
                desc: 'Pocket-sized reminder diaries featuring prominent Micron Labs product branding.',
                image: '/materials/img_4.jpeg',
                tag: 'Handy',
            },
            {
                id: 'paperweight-rabichoice',
                name: 'Rabichoice-DSR Paperweight',
                desc: 'Tricolor acrylic paperweight featuring Rabichoice-DSR product branding.',
                image: '/materials/img_10.jpeg',
                tag: 'Premium',
            },
            {
                id: 'paperweight-microred',
                name: 'MicroRed-XT Paperweight',
                desc: 'Tricolor acrylic paperweight highlighting MicroRed-XT Tablets.',
                image: '/materials/img_12.jpeg',
                tag: 'Premium',
            },
            {
                id: 'wall-calendar-2026',
                name: '2026 Wall Calendar',
                desc: 'Beautifully designed 2026 wall calendar featuring the Micron Labs product portfolio.',
                image: '/materials/img_2.jpeg',
                tag: 'New Year',
            },
            {
                id: 'desk-calendar-2026',
                name: '2026 Desktop Calendar',
                desc: 'Fresh Picks 2026 spiral desktop calendar with vibrant fruit imagery and brand logos.',
                image: '/materials/img_11.jpeg',
                tag: 'Desk Utility',
            },
        ],
    },
    {
        id: 'festive-gifts',
        label: 'Festive Gifts',
        icon: Gift,
        color: '#6d28d9',
        items: [
            {
                id: 'holi-colors',
                name: 'Holi Colors Gift Set',
                desc: 'Happy Holi gift box containing three vibrant, skin-friendly colors in sealed jars.',
                image: '/materials/img_1.jpeg',
                tag: 'Holi',
            },
            {
                id: 'diwali-candles',
                name: 'Diwali Shubh Labh Set',
                desc: 'Happy Diwali gift box featuring a Shubh Labh Laxmi-Ganesha frame and 4 colorful diyas.',
                image: '/materials/img_7.jpeg',
                tag: 'Diwali',
            },
            {
                id: 'diwali-premium',
                name: 'Premium Diwali & Chhath Box',
                desc: 'Elegant festive set with an aroma diffuser, potpourri, ceramic flowers, and essential oil.',
                image: '/materials/img_8.jpeg',
                tag: 'Premium',
            },
        ],
    },
];

const allItems = materialCategories.flatMap(c => c.items);

/* ─── CART ITEM ─────────────────────────────────────────── */
const CartItem = ({ item, qty, onChange }) => (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={() => onChange(item.id, qty - 1)} className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-primary-orange transition-all">
                <Minus size={13} />
            </button>
            <span className="w-6 text-center text-sm font-bold text-gray-800">{qty}</span>
            <button onClick={() => onChange(item.id, qty + 1)} className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-primary-orange transition-all">
                <Plus size={13} />
            </button>
        </div>
    </div>
);

/* ─── MATERIAL CARD ─────────────────────────────────────── */
const MaterialCard = ({ item, qty, onAdd }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-sm shadow-md hover:shadow-2xl overflow-hidden flex flex-col cursor-pointer group transition-all"
        onClick={() => onAdd(item.id)}
    >
        {/* Full Image Area */}
        <div className="relative h-[320px] sm:h-[360px] w-full overflow-hidden bg-gray-50">
            <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Overlay for Add to Cart */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className={`px-5 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${qty > 0 ? 'bg-white text-primary-orange' : 'bg-primary-orange text-white'}`}>
                    <ShoppingCart size={18} />
                    {qty > 0 ? `Selected (${qty})` : 'Request Item'}
                </div>
            </div>
            
            {qty > 0 && (
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center shadow-md">
                    {qty}
                </span>
            )}
            
            {item.tag && qty === 0 && (
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-bold bg-white/95 text-primary-orange px-2.5 py-1 rounded-sm shadow-sm backdrop-blur-sm">
                    {item.tag}
                </span>
            )}
        </div>

        {/* Solid Color Bottom Bar (Matching Reference) */}
        <div className="bg-[#eea137] p-4 flex flex-col justify-center items-center text-center min-h-[70px]">
            <h3 className="font-bold text-white text-[15px] sm:text-base leading-tight w-full drop-shadow-sm">{item.name}</h3>
        </div>
    </motion.div>
);

/* ─── MAIN PAGE ─────────────────────────────────────────── */
const PromotionalMaterials = () => {
    const [cart, setCart] = useState({}); // { itemId: qty }
    const [cartOpen, setCartOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [formData, setFormData] = useState({
        from_name: '',
        phone: '',
        from_email: '',
        territory: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');

    const handleQtyChange = (id, qty) => {
        setCart(prev => {
            const next = { ...prev };
            if (qty <= 0) delete next[id];
            else next[id] = qty;
            return next;
        });
    };

    const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
    const cartItems = allItems.filter(i => cart[i.id]);

    const displayedCategories = activeTab === 'all'
        ? materialCategories
        : materialCategories.filter(c => c.id === activeTab);

    const buildItemList = () =>
        cartItems.map(i => `- ${i.name} (Qty: ${cart[i.id]})`).join('\n');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cartCount === 0) { alert('Please select at least one material.'); return; }
        setStatus('loading');
        const payload = {
            ...formData,
            subject: `Promotional Material Request – ${formData.from_name}`,
            message: `Territory / Area: ${formData.territory}\n\nRequested Materials:\n${buildItemList()}\n\nAdditional Notes:\n${formData.message}`,
        };
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
            setStatus('success');
            setCart({});
            setFormData({ from_name: '', phone: '', from_email: '', territory: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* ── Hero ── */}
            <section className="relative h-[50vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1920&h=600&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-brand-navy/75" />
                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="mb-4">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">For Field Teams</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Promotional Materials</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">
                        Request MR bags, visual aids, gifting items and more — everything your team needs to make a lasting impression.
                    </p>
                </div>
            </section>

            {/* ── Sticky Toolbar ── */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === 'all' ? 'bg-primary-orange text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >All</button>
                        {materialCategories.map(c => (
                            <button
                                key={c.id}
                                onClick={() => setActiveTab(c.id)}
                                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === c.id ? 'bg-primary-orange text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >{c.label}</button>
                        ))}
                    </div>
                    {/* Cart Button */}
                    <button
                        onClick={() => setCartOpen(true)}
                        className="relative flex-shrink-0 flex items-center gap-2 bg-primary-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow"
                    >
                        <ShoppingCart size={16} />
                        My Request List
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-primary-orange text-[10px] font-bold flex items-center justify-center shadow">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </section>

            {/* ── Material Sections ── */}
            <section className="py-10">
                <div className="container mx-auto px-4 space-y-12">
                    {displayedCategories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                {/* Section Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cat.color }}>
                                        <Icon size={20} color="white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800">{cat.label}</h2>
                                        <p className="text-xs text-gray-500">{cat.items.length} items available</p>
                                    </div>
                                </div>
                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {cat.items.map(item => (
                                        <MaterialCard
                                            key={item.id}
                                            item={item}
                                            qty={cart[item.id] || 0}
                                            onAdd={id => handleQtyChange(id, (cart[id] || 0) + 1)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── Request Form ── */}
            <section id="request-form" className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Submit Your Request</span>
                        <h2 className="text-3xl font-bold text-gray-800 mt-2">Request Promotional Materials</h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Add items to your list above, fill in your details, and we'll arrange the materials for your territory.
                        </p>
                    </div>

                    {/* Selected Items Summary */}
                    {cartCount > 0 && (
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8">
                            <p className="text-sm font-bold text-primary-orange mb-3 flex items-center gap-2">
                                <ShoppingCart size={16} /> Selected Items ({cartCount})
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 text-xs border border-orange-100">
                                        <span className="font-medium text-gray-700">{item.name}</span>
                                        <div className="flex items-center gap-1 ml-2">
                                            <button onClick={() => handleQtyChange(item.id, cart[item.id] - 1)} className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100"><Minus size={10} /></button>
                                            <span className="font-bold text-primary-orange w-4 text-center">{cart[item.id]}</span>
                                            <button onClick={() => handleQtyChange(item.id, cart[item.id] + 1)} className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100"><Plus size={10} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-6">
                            <CheckCircle size={20} className="flex-shrink-0" />
                            <p className="text-sm font-medium">Request sent! Our team will contact you soon to arrange the materials.</p>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6">
                            <AlertCircle size={20} className="flex-shrink-0" />
                            <p className="text-sm font-medium">Something went wrong. Please try again or email us directly at micronlabspltd@gmail.com.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-8 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                <input type="text" name="from_name" required value={formData.from_name}
                                    onChange={e => setFormData(p => ({ ...p, from_name: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="Your full name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                <input type="tel" name="phone" required value={formData.phone}
                                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="+91 XXXXX XXXXX" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input type="email" name="from_email" required value={formData.from_email}
                                    onChange={e => setFormData(p => ({ ...p, from_email: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Territory / Area *</label>
                                <input type="text" name="territory" required value={formData.territory}
                                    onChange={e => setFormData(p => ({ ...p, territory: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Gurgaon, Delhi NCR" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                            <textarea rows="4" name="message" value={formData.message}
                                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Specify quantity details, preferred delivery date, or any special requirements..." />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading' || cartCount === 0}
                            className="w-full bg-primary-orange hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg"
                        >
                            {status === 'loading' ? (
                                <><Loader size={20} className="mr-2 animate-spin" /> Sending Request...</>
                            ) : (
                                <><Send size={20} className="mr-2" /> Submit Material Request</>
                            )}
                        </button>
                        {cartCount === 0 && (
                            <p className="text-center text-xs text-gray-400">👆 Select at least one item from the catalogue above to enable submission.</p>
                        )}
                    </form>
                </div>
            </section>

            {/* ── Cart Slide-over ── */}
            <AnimatePresence>
                {cartOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setCartOpen(false)}
                    >
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                        <motion.div
                            className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-5 border-b border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <ShoppingCart size={20} className="text-primary-orange" />
                                    My Request List
                                    {cartCount > 0 && <span className="text-sm font-normal text-gray-500">({cartCount} items)</span>}
                                </h3>
                                <button onClick={() => setCartOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-all"><X size={20} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-5">
                                {cartCount === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                                        <ShoppingCart size={48} className="mb-3 opacity-30" />
                                        <p className="font-medium">No items selected yet</p>
                                        <p className="text-sm mt-1">Browse the catalogue and click "Request This" to add items.</p>
                                    </div>
                                ) : (
                                    cartItems.map(item => (
                                        <CartItem key={item.id} item={item} qty={cart[item.id]} onChange={handleQtyChange} />
                                    ))
                                )}
                            </div>
                            {cartCount > 0 && (
                                <div className="p-5 border-t border-gray-100">
                                    <button
                                        onClick={() => { setCartOpen(false); document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="w-full bg-primary-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                                    >
                                        Proceed to Request Form <ChevronRight size={18} />
                                    </button>
                                    <button onClick={() => setCart({})} className="w-full text-xs text-gray-400 hover:text-red-500 mt-3 transition-all">Clear all items</button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PromotionalMaterials;
