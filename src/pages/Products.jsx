import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, X, ChevronDown, ChevronUp, Tag, FlaskConical, Stethoscope, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── PRODUCT DATA ──────────────────────────────────────────── */
const categories = [
    {
        id: 'analgesics',
        name: 'Analgesics & NSAIDs',
        desc: 'Pain relief and anti-inflammatory formulations',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=300&fit=crop',
        products: [
            { name: 'Anashot-XT', composition: 'Aceclofenac 100mg + Paracetamol 325mg + Tizanidine 2mg', form: 'Tablet', use: 'Musculoskeletal pain, back pain, arthritis', price: '₹85 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Anashot-SP', composition: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg', form: 'Tablet', use: 'Post-surgical pain, dental pain, sports injuries', price: '₹90 / strip of 10', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Dicodase-SR', composition: 'Diclofenac Sodium 100mg (SR)', form: 'SR Tablet', use: 'Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis', price: '₹72 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'ED-60', composition: 'Etodolac 400mg', form: 'Tablet', use: 'Acute pain, osteoarthritis, rheumatoid arthritis', price: '₹78 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'ED-90', composition: 'Etoricoxib 90mg', form: 'Tablet', use: 'Acute gout, osteoarthritis, rheumatoid arthritis', price: '₹95 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'antibiotics',
        name: 'Antibiotics',
        desc: 'Broad-spectrum antibacterial medications',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=300&fit=crop',
        products: [
            { name: 'Cefbond-O', composition: 'Cefpodoxime Proxetil 200mg', form: 'Tablet', use: 'Respiratory, urinary tract & skin infections', price: '₹120 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Cefbond-LB', composition: 'Cefpodoxime Proxetil 200mg + Lactic Acid Bacillus 60M Spores', form: 'Tablet', use: 'Bacterial infections with gut protection', price: '₹135 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Microdoxime-CL', composition: 'Cefuroxime Axetil 500mg + Clavulanic Acid 125mg', form: 'Tablet', use: 'Severe respiratory & skin infections', price: '₹190 / strip of 6', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Amobond-CV', composition: 'Amoxicillin 500mg + Clavulanic Acid 125mg', form: 'Tablet', use: 'ENT, respiratory, dental & urinary infections', price: '₹110 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Azibond-500', composition: 'Azithromycin 500mg', form: 'Tablet', use: 'Community-acquired pneumonia, sinusitis, pharyngitis', price: '₹98 / strip of 5', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'cough',
        name: 'Cough & Cold',
        desc: 'Respiratory care and allergy relief',
        image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=300&fit=crop',
        products: [
            { name: 'Brocox-DM', composition: 'Dextromethorphan 10mg + Phenylephrine 5mg + Chlorpheniramine 2mg', form: 'Syrup (per 5ml)', use: 'Dry cough, nasal congestion, allergic rhinitis', price: '₹65 / 100ml bottle', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Levospright-M', composition: 'Levocetirizine 2.5mg + Montelukast 4mg', form: 'Tablet / Syrup', use: 'Allergic rhinitis, urticaria, bronchospasm', price: '₹88 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Colfree-D', composition: 'Ambroxol 15mg + Guaifenesin 50mg + Terbutaline 1.25mg', form: 'Syrup (per 5ml)', use: 'Productive cough, bronchitis, COPD', price: '₹58 / 100ml bottle', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Nasospright', composition: 'Xylometazoline 0.1% + Benzalkonium Chloride', form: 'Nasal Drops', use: 'Nasal congestion, sinusitis, rhinitis', price: '₹45 / 10ml bottle', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'vitamins',
        name: 'Vitamins & Supplements',
        desc: 'Nutritional support and wellness',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=300&fit=crop',
        products: [
            { name: 'Calonate', composition: 'Calcium Carbonate 500mg + Vitamin D3 250 IU', form: 'Tablet', use: 'Calcium deficiency, osteoporosis, pregnancy supplementation', price: '₹75 / strip of 15', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Calonate-K27', composition: 'Calcium 500mg + Vitamin D3 400 IU + Vitamin K27 45mcg + Magnesium', form: 'Tablet', use: 'Bone health, calcium absorption, osteoporosis prevention', price: '₹110 / strip of 15', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'HB Shot-Z', composition: 'Ferrous Ascorbate 100mg + Folic Acid 1.5mg + Zinc 22.5mg', form: 'Tablet', use: 'Iron deficiency anemia, pregnancy, fatigue', price: '₹95 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Microred-F', composition: 'Iron (as Ferric Ammonium Citrate) + Folic Acid + Vitamin B12', form: 'Syrup', use: 'Nutritional anemia, malnutrition, post-operative recovery', price: '₹82 / 200ml bottle', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Microvit-M', composition: 'Multivitamin + Multimineral + Antioxidants', form: 'Capsule', use: 'General wellness, immunity boost, nutritional gaps', price: '₹120 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Omega-Spright', composition: 'Omega-3 Fatty Acids 1000mg (EPA 180mg + DHA 120mg)', form: 'Softgel', use: 'Cardiovascular health, triglyceride reduction', price: '₹145 / strip of 10', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'gastro',
        name: 'Gastroenterology',
        desc: 'Digestive health and probiotics',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop',
        products: [
            { name: 'Frolac', composition: 'Lactobacillus Rhamnosus + Lactobacillus Acidophilus + Bifidobacterium + Fructooligosaccharides', form: 'Sachet', use: 'Diarrhea, antibiotic-associated dysbiosis, IBS', price: '₹55 / sachet (pack of 10)', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Rabichoice-DSR', composition: 'Rabeprazole 20mg + Domperidone 30mg (SR)', form: 'Capsule', use: 'GERD, peptic ulcer, gastritis, nausea & vomiting', price: '₹98 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Panspright-D', composition: 'Pantoprazole 40mg + Domperidone 10mg', form: 'Tablet', use: 'Acid reflux, peptic ulcer disease, dyspepsia', price: '₹85 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Ondaspright-4', composition: 'Ondansetron 4mg', form: 'Tablet / Injection', use: 'Chemotherapy-induced nausea, post-surgical nausea', price: '₹62 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'gynae',
        name: 'Gynecology',
        desc: "Women's health and hormonal care",
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=300&fit=crop',
        products: [
            { name: 'Femnicare', composition: 'Ferrous Fumarate + Folic Acid + Vitamin B12 + Zinc', form: 'Tablet', use: 'Pregnancy supplementation, anemia, nutritional support', price: '₹88 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Gest Micron', composition: 'Micronized Progesterone 200mg', form: 'Capsule (Vaginal/Oral)', use: 'Luteal phase support, recurrent miscarriage, IVF support', price: '₹175 / strip of 10', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Fetalife', composition: 'DHA 200mg + Methylcobalamin + Folic Acid + Pyridoxine', form: 'Softgel', use: 'Fetal brain development, neural tube defect prevention', price: '₹130 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Dueron', composition: 'Dydrogesterone 10mg', form: 'Tablet', use: 'Threatened miscarriage, endometriosis, dysmenorrhoea', price: '₹145 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Norchoice', composition: 'Norethisterone 5mg', form: 'Tablet', use: 'Menstrual irregularities, endometriosis, PCOS management', price: '₹68 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Trineocal', composition: 'Calcium + Vitamin D3 + Vitamin K2 + Magnesium + Zinc', form: 'Tablet', use: 'Maternal bone health, calcium supplementation in pregnancy', price: '₹115 / strip of 15', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'derma',
        name: 'Dermatology',
        desc: 'Skin care and antifungal treatments',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=300&fit=crop',
        products: [
            { name: 'Itralife-100', composition: 'Itraconazole 100mg', form: 'Capsule', use: 'Fungal infections: onychomycosis, tinea, candidiasis', price: '₹145 / strip of 10', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop' },
            { name: 'Lulimic Cream', composition: 'Luliconazole 1% w/w', form: 'Cream', use: 'Tinea corporis, tinea cruris, tinea pedis', price: '₹92 / 15g tube', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Noich Cream', composition: 'Clobetasol 0.05% + Neomycin 0.5% + Miconazole 2%', form: 'Cream', use: 'Mixed dermatitis, eczema with secondary infection', price: '₹78 / 15g tube', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Terbispright', composition: 'Terbinafine 250mg', form: 'Tablet', use: 'Onychomycosis, ringworm, chronic fungal infections', price: '₹165 / strip of 7', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Acnespright Gel', composition: 'Clindamycin 1% + Nicotinamide 4% + Aloe Vera', form: 'Gel', use: 'Acne vulgaris, comedones, inflammatory acne', price: '₹110 / 20g tube', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'dental',
        name: 'Dental Care',
        desc: 'Oral health and hygiene',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=300&fit=crop',
        products: [
            { name: 'Cavifree Dental Gel', composition: 'Sodium Fluoride 0.5% + Triclosan 0.05% + Potassium Nitrate', form: 'Gel', use: 'Cavity prevention, sensitive teeth, gum protection', price: '₹58 / 50g tube', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop' },
            { name: 'Cavifree Gumpaint', composition: 'Metronidazole 1% + Chlorhexidine 0.2% + Lidocaine 0.1%', form: 'Gel', use: 'Gingivitis, periodontitis, oral ulcers, toothache', price: '₹72 / 20g tube', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Oraspright Mouthwash', composition: 'Chlorhexidine Gluconate 0.2% + Benzydamine HCl', form: 'Mouthwash', use: 'Oral hygiene, post-extraction care, aphthous ulcers', price: '₹85 / 150ml bottle', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
        ],
    },
];

/* ─── PRODUCT DETAIL MODAL ──────────────────────────────────── */
const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                {/* Blurred translucent overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                {/* Modal Card */}
                <motion.div
                    className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.3)' }}
                    initial={{ scale: 0.7, opacity: 0, y: 60 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.7, opacity: 0, y: 60 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all"
                    >
                        <X size={18} />
                    </button>

                    {/* Product Image */}
                    <div className="relative h-52 overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-5 text-white">
                            <h3 className="text-2xl font-bold drop-shadow">{product.name}</h3>
                            <span className="text-xs bg-primary-orange px-2 py-0.5 rounded-full font-semibold mt-1 inline-block">{product.form}</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-5 space-y-4 text-white">
                        {/* Price */}
                        <div className="flex items-center gap-2 bg-primary-orange/80 rounded-xl px-4 py-3">
                            <IndianRupee size={18} className="flex-shrink-0" />
                            <div>
                                <p className="text-[10px] uppercase tracking-widest opacity-80 font-semibold">MRP</p>
                                <p className="font-bold text-lg leading-tight">{product.price}</p>
                            </div>
                        </div>

                        {/* Composition / Salt */}
                        <div className="bg-white/15 rounded-xl px-4 py-3">
                            <div className="flex items-center gap-2 mb-1">
                                <FlaskConical size={15} className="text-orange-300 flex-shrink-0" />
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Composition / Salt</p>
                            </div>
                            <p className="text-sm leading-relaxed">{product.composition}</p>
                        </div>

                        {/* Indications */}
                        <div className="bg-white/15 rounded-xl px-4 py-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Stethoscope size={15} className="text-orange-300 flex-shrink-0" />
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Indicated For</p>
                            </div>
                            <p className="text-sm leading-relaxed">{product.use}</p>
                        </div>

                        {/* Form */}
                        <div className="bg-white/15 rounded-xl px-4 py-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Tag size={15} className="text-orange-300 flex-shrink-0" />
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Dosage Form</p>
                            </div>
                            <p className="text-sm">{product.form}</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

/* ─── PRODUCT CARD ──────────────────────────────────────────── */
const ProductCard = ({ product, onSelect }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-xl overflow-hidden shadow-md cursor-pointer bg-white group"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onSelect(product)}
        >
            {/* Product image */}
            <div className="relative h-36 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Form badge */}
                <span className="absolute top-2 right-2 text-[10px] font-bold bg-primary-orange text-white px-2 py-0.5 rounded-full">
                    {product.form}
                </span>
            </div>

            {/* Info */}
            <div className="p-3">
                <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">{product.name}</h4>

                {/* Animated composition reveal on hover */}
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: hovered ? '60px' : '0px', opacity: hovered ? 1 : 0 }}>
                    <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-3">{product.composition}</p>
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                    <span className="text-primary-orange font-bold text-xs">{product.price}</span>
                    <span className="text-[10px] text-gray-400 font-medium">Click for details →</span>
                </div>
            </div>
        </motion.div>
    );
};

/* ─── CATEGORY SECTION ──────────────────────────────────────── */
const CategorySection = ({ cat, index, onSelect }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white rounded-2xl shadow-card overflow-hidden"
        >
            {/* Category Header */}
            <div className="relative h-36 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-navy/65 flex items-end p-5">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-white">{cat.name}</h2>
                        <p className="text-xs text-gray-300 mt-0.5">{cat.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs bg-primary-orange text-white px-2 py-1 rounded-full font-semibold">
                            {cat.products.length} Products
                        </span>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-white opacity-80 hover:opacity-100 transition"
                        >
                            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {cat.products.map((product, pidx) => (
                                <ProductCard key={pidx} product={product} onSelect={onSelect} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ─── MAIN PAGE ─────────────────────────────────────────────── */
const Products = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filtered = activeFilter === 'all'
        ? categories
        : categories.filter(c => c.id === activeFilter);

    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/micron-labs-catalogue.pdf';
        link.download = 'Micron-Labs-Product-Catalogue.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                )}
            </AnimatePresence>

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=600&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-brand-navy/70" />
                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="mb-4">
                        <span className="text-primary-orange font-bold text-sm tracking-widest uppercase">Our Products</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Product Range</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">
                        Comprehensive pharmaceutical solutions across multiple therapeutic segments
                    </p>
                </div>
            </section>

            {/* Sticky Toolbar */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeFilter === 'all' ? 'bg-primary-orange text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            All
                        </button>
                        {categories.map(c => (
                            <button
                                key={c.id}
                                onClick={() => setActiveFilter(c.id)}
                                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeFilter === c.id ? 'bg-primary-orange text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {c.name}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleDownloadPDF}
                        className="flex-shrink-0 flex items-center gap-2 bg-primary-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 shadow"
                    >
                        <Download size={16} />
                        Download Catalogue
                    </button>
                </div>
            </section>

            {/* Product Sections */}
            <section className="py-10">
                <div className="container mx-auto px-4 space-y-8">
                    <AnimatePresence mode="wait">
                        {filtered.map((cat, idx) => (
                            <CategorySection key={cat.id} cat={cat} index={idx} onSelect={setSelectedProduct} />
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Need More Information?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to learn more about our products, request samples, or discuss partnership opportunities.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center bg-primary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                        Contact Us <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Products;
