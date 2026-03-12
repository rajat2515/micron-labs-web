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
            { name: 'Anashot-P', composition: 'Aceclofenac 100mg + Paracetamol 325mg', form: 'Tablet', use: 'Pain & fever, musculoskeletal pain', price: '₹56 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Anashot-SP', composition: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg', form: 'Tablet', use: 'Post-surgical pain, dental pain, sports injuries', price: '₹84 / strip of 10', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Anashot-TC', composition: 'Aceclofenac 100mg + Paracetamol 325mg + Trypsin & Chymotrypsin 150000 Units', form: 'Tablet', use: 'Post-surgical inflammation, soft tissue injuries', price: '₹126.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Anashot-XT', composition: 'Trypsin 48mg + Chymotrypsin 8mg + Gingerol 100mg + Curcumin 100mg + Bromelain 90mg + Rutoside Trihydrate 100mg', form: 'Tablet', use: 'Musculoskeletal pain, back pain, arthritis', price: '₹178 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Arrowmin-Spas', composition: 'Mefenamic Acid 250mg + Dicyclomine HCl 10mg', form: 'Tablet', use: 'Abdominal cramps, dysmenorrhoea, spasmodic pain', price: '₹42 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Dicodase-MR', composition: 'Diclofenac Potassium 50mg + Chlorzoxazone 250mg + Paracetamol 325mg', form: 'Tablet', use: 'Muscle spasm, back pain, musculoskeletal disorders', price: '₹46.50 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Dicodase-SN', composition: 'Serratiopeptidase 10mg + Diclofenac Potassium 50mg', form: 'Tablet', use: 'Inflammation, post-operative swelling, arthritis', price: '₹65 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Dicodase-SR', composition: 'Diclofenac Potassium 50mg + Serratiopeptidase 10mg + Paracetamol 325mg', form: 'Tablet', use: 'Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis', price: '₹70 / strip of 10', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Drota Care', composition: 'Drotaverine HCl 80mg + Mefenamic Acid 250mg', form: 'Tablet', use: 'Smooth muscle spasms, uterine cramps, renal colic', price: '₹65 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Drota Care-A', composition: 'Drotaverine HCl 80mg + Aceclofenac 100mg', form: 'Tablet', use: 'Spasmodic pain with inflammation, biliary colic', price: '₹93.50 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'ED-60', composition: 'Etoricoxib 60mg', form: 'Tablet', use: 'Acute pain, osteoarthritis, rheumatoid arthritis', price: '₹93.50 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'ED-90', composition: 'Etoricoxib 90mg', form: 'Tablet', use: 'Acute gout, osteoarthritis, rheumatoid arthritis', price: '₹112.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Microket-DT', composition: 'Ketorolac Tromethamine 10mg', form: 'Tablet', use: 'Acute short-term pain, post-operative pain', price: '₹46.50 / strip of 15', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Run Gel', composition: 'Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol', form: 'Gel', use: 'Topical pain relief, sports injuries, joint pain', price: '₹79.65 / 30g tube', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Bepred-4', composition: 'Methylprednisolone 4mg', form: 'Tablet', use: 'Inflammatory conditions, allergic disorders, rheumatic disorders', price: '₹46.80 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Filpcort', composition: 'Deflazacort 6mg', form: 'Tablet', use: 'Inflammatory & allergic conditions, autoimmune disorders', price: '₹93.50 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'antibiotics',
        name: 'Antibiotics',
        desc: 'Broad-spectrum antibacterial medications',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=300&fit=crop',
        products: [
            { name: 'Cefbond-LB', composition: 'Cefixime 200mg + Lactic Acid Bacillus Spores', form: 'Tablet', use: 'Bacterial infections with gut protection', price: '₹140 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Cefbond-O', composition: 'Cefixime 200mg + Ofloxacin 200mg', form: 'Tablet', use: 'Respiratory, urinary tract & skin infections', price: '₹168 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Micort-CV', composition: 'Cefpodoxime 200mg + Clavulanic Acid 125mg', form: 'Tablet', use: 'Severe respiratory & skin infections', price: '₹300 / strip of 10', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Micort-50', composition: 'Cefpodoxime 50mg', form: 'Dry Syrup', use: 'Paediatric bacterial infections, ENT & respiratory infections', price: '₹75 / 30ml bottle', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Moxychoice-500', composition: 'Amoxycillin 500mg', form: 'Tablet', use: 'ENT, respiratory, dental & urinary infections', price: '₹78.50 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Moxychoice-CL375', composition: 'Amoxycillin 250mg + Clavulanic Acid 125mg', form: 'Tablet', use: 'Mixed bacterial infections, ENT & respiratory', price: '₹150 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Moxychoice-CL625', composition: 'Amoxycillin 500mg + Clavulanic Acid 125mg + Lactic Acid Bacillus 60M Spores', form: 'Tablet', use: 'Severe bacterial infections with gut protection', price: '₹215 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Moxychoice-DS', composition: 'Amoxycillin 400mg + Clavulanic Acid 57mg', form: 'Dry Syrup', use: 'Paediatric bacterial infections', price: '₹175 / 30ml bottle', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop' },
            { name: 'Livorim-500', composition: 'Levofloxacin 500mg', form: 'Tablet', use: 'Community-acquired pneumonia, UTI, sinusitis', price: '₹84 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Livorim-OZ', composition: 'Levofloxacin 250mg + Ornidazole 500mg', form: 'Tablet', use: 'Mixed aerobic-anaerobic infections, GI infections', price: '₹93.50 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Microxyl-500', composition: 'Ciprofloxacin 500mg', form: 'Tablet', use: 'UTI, respiratory, GI & skin infections', price: '₹44 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Microcin-100', composition: 'Amikacin Sulphate 100mg/ml', form: 'Injection (1ml)', use: 'Serious gram-negative infections, septicemia', price: '₹37.50 / vial', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'cough',
        name: 'Cough & Cold',
        desc: 'Respiratory care and allergy relief',
        image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=300&fit=crop',
        products: [
            { name: 'Brocox-DM', composition: 'Dextromethorphan 10mg + Chlorpheniramine 2mg + Phenylephrine 5mg', form: 'Syrup (per 5ml)', use: 'Dry cough, nasal congestion, allergic rhinitis', price: '₹92.80 / 100ml bottle', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Leecare-M', composition: 'Levocetirizine Di-HCl 5mg + Montelukast 5mg', form: 'Tablet', use: 'Allergic rhinitis, urticaria, bronchospasm', price: '₹79.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Leecare-CF', composition: 'Phenylephrine HCl 5mg + Paracetamol 500mg + Caffeine 30mg + Diphenhydramine HCl 25mg', form: 'Tablet', use: 'Cold, flu, fever with congestion & runny nose', price: '₹51.50 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Leecare-CF Syrup', composition: 'Phenylephrine HCl 5mg + Paracetamol 125mg + Sodium Citrate 60mg + Chlorpheniramine Maleate 0.5mg + Menthol 1mg', form: 'Syrup (60ml)', use: 'Paediatric cold, cough & fever with congestion', price: '₹70.30 / 60ml bottle', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Mixoline-P', composition: 'Xylometazoline HCl 0.05% + Benzalkonium Chloride 0.12%', form: 'Nasal Drops (10ml)', use: 'Nasal congestion, sinusitis, rhinitis', price: '₹39.35 / 10ml bottle', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'vitamins',
        name: 'Vitamins & Supplements',
        desc: 'Nutritional support and wellness',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=300&fit=crop',
        products: [
            { name: 'Calonate-D', composition: 'Calcium Carbonate 1250mg (Elemental Calcium 500mg) + Vitamin D3 250 IU', form: 'Tablet', use: 'Calcium deficiency, osteoporosis, pregnancy supplementation', price: '₹37.50 / strip of 15', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Calonate-K27', composition: 'Calcium Carbonate 500mg + Calcitriol 0.25mcg + Vitamin K2-7 45mcg + Methylcobalamin 1500mcg + Magnesium Hydroxide 50mg + Zinc Sulphate 7.5mg + L-Methyl Folate 800mcg', form: 'Tablet', use: 'Bone health, calcium absorption, osteoporosis prevention', price: '₹133.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Calonate', composition: 'Cholecalciferol 60,000 IU', form: 'Sachet (1g)', use: 'Vitamin D3 deficiency, bone health, immunity', price: '₹23.40 / sachet', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Microred-XT', composition: 'Ferrous Bisglycinate 60mg + Zinc Bisglycinate 15mg + Folic Acid 1mg + Methylcobalamin 500mcg', form: 'Tablet', use: 'Iron deficiency anemia, pregnancy, fatigue', price: '₹112.50 / strip of 15', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Microred-F', composition: 'Ferric Ammonium Citrate 160mg (Elemental Iron 32mg) + Cyanocobalamin 15mcg + Folic Acid 1.5mg', form: 'Syrup (200ml)', use: 'Nutritional anemia, malnutrition, post-operative recovery', price: '₹117.15 / 200ml bottle', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Oxychoice (Multivitamin)', composition: 'Lycopene 2mg + Ascorbic Acid 25mg + Nicotinamide 15mg + Vitamins A, B1, B2, B6, B12, D, E + Folic Acid + Zinc + Iron + Magnesium + Selenium + Chromium + Iodine', form: 'Tablet', use: 'General wellness, immunity boost, nutritional gaps', price: '₹80 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Oxychoice (Paediatric)', composition: 'Vitamin A 2000 IU + Vitamin E 10 IU + Vitamins B1, B2, B3, C + Cyanocobalamin + Folic Acid + Zinc + Calcium + Chromium + Selenium', form: 'Tablet', use: 'Paediatric nutrition, growth support, immunity', price: '₹42 / strip of 10', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Oxychoice (Protein)', composition: 'Protein Hydrolysate 20% + Calcium + DHA + GLA + Vitamins B6, B12, D3 + Niacinamide + Folic Acid + Zinc + Iron + Magnesium + Selenium + Iodine', form: 'Powder (200g)', use: 'Nutritional supplement, post-illness recovery, growth', price: '₹222.46 / 200g jar', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Get Start-Plus', composition: 'Methylcobalamin 1500mcg + Vitamin B1 1.5mg + Vitamin B2 1mg + Vitamin B6 0.5mg + Zinc 2mg + Niacinamide 15mg + L-Lysine 25mg', form: 'Syrup (200ml)', use: 'Nerve health, appetite stimulation, nutritional deficiency', price: '₹131.25 / 200ml bottle', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Get Start-1500', composition: 'Mecobalamin 1500mcg', form: 'Injection (2ml)', use: 'Vitamin B12 deficiency, neuropathy, anaemia', price: '₹17.30 / vial', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'LAMF', composition: 'L-Arginine 3mg + Proanthocyanidine 75mg', form: 'Sachet (5g)', use: 'Cardiovascular health, antioxidant support', price: '₹51.55 / sachet', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Get Charge-D', composition: 'Dextrose 17.5g + Sucrose 14mg + Glutamic Acid 20mg + Ascorbic Acid 50mg + Zinc Sulphate 32.5mg', form: 'Energy Powder (105g)', use: 'Quick energy replenishment, electrolyte support', price: '₹62.30 / pack', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'gastro',
        name: 'Gastroenterology',
        desc: 'Digestive health and probiotics',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop',
        products: [
            { name: 'Frolac', composition: 'Fructooligosaccharide 100mg + L-Glutamine 50mg + Bifidobacterium Bifidum 75M + Bifidobacterium Longum 75M + Lactobacillus Acidophilus 150M Spores', form: 'Tablet', use: 'Diarrhea, antibiotic-associated dysbiosis, IBS', price: '₹84 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Rabichoice-DSR', composition: 'Rabeprazole Sodium 20mg + Domperidone 30mg SR', form: 'Capsule', use: 'GERD, peptic ulcer, gastritis, nausea & vomiting', price: '₹84 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Panashot-40', composition: 'Pantoprazole Sodium 40mg', form: 'Tablet', use: 'Acid reflux, peptic ulcer disease, GERD', price: '₹75 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Panashot-DSR', composition: 'Pantoprazole Sodium 40mg + Domperidone 30mg SR', form: 'Capsule', use: 'GERD, dyspepsia, nausea with acid suppression', price: '₹89 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Okzyme (Tablet)', composition: 'Pancreatin 175mg + Simethicone 50mg + Activated Charcoal 50mg', form: 'Tablet', use: 'Flatulence, bloating, indigestion, malabsorption', price: '₹60.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Okzyme (Syrup)', composition: 'Fungal Diastase 50mg + Pepsin 10mg per 5ml', form: 'Syrup (200ml)', use: 'Digestive enzyme deficiency, dyspepsia, appetite stimulation', price: '₹126.55 / 200ml bottle', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Microdom-C', composition: 'Cinnarizine 20mg + Domperidone 15mg', form: 'Tablet', use: 'Nausea, vomiting, motion sickness, vertigo', price: '₹37.50 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Microraft', composition: 'Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate', form: 'Suspension (150ml)', use: 'Acid reflux, heartburn, GERD', price: '₹145.30 / 150ml bottle', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Yocid', composition: 'Magaldrate 400mg + Simethicone 20mg', form: 'Suspension (170ml)', use: 'Hyperacidity, peptic ulcer, flatulence', price: '₹79.65 / 170ml bottle', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Ondly', composition: 'Ondansetron 2mg/ml', form: 'Injection (2ml)', use: 'Chemotherapy-induced nausea, post-surgical nausea', price: '₹12.15 / vial', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Heptalife-Plus', composition: 'L-Ornithine L-Aspartate 150mg + Pancreatin 100mg', form: 'Tablet', use: 'Liver disorders, hepatic encephalopathy, fatty liver', price: '₹93.50 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Heptalife-DS (Tablet)', composition: 'Kalmegha 40mg + Bhringraj 40mg + Pitapapad 30mg + Bhuamala 30mg + Makoy 40mg + Kutaj 40mg + Kutki 10mg + Sarpunkha 10mg + Kasni 30mg + Punarava 40mg + Kumari 30mg + Kauohini 25mg + Arogya Vardhani Rasa 80mg + Navayas Lauha 20mg + Shankh Bhasam 20mg', form: 'Tablet (60s)', use: 'Liver tonic, hepatoprotective, jaundice, liver detox', price: '₹23 / bottle of 60', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Heptalife-DS (Drops)', composition: 'Punernava 100mg + Kasni 25mg + Kasundi 25mg + Saunf 50mg + Hauber 50mg + Makoy 15mg + Bhringraj 50mg + Kalmegh 15mg + Kutki 15mg + Arjun Twak 50mg + Guduchi 100mg + Nisotha 30mg + Baibidang 30mg + Daru Harida 30mg', form: 'Drops (30ml)', use: 'Paediatric liver tonic, jaundice, digestive health', price: '₹65.60 / 30ml bottle', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Heptalife-DS (Syrup)', composition: 'Andrographis Paniculata 200mg + Cassia Acutifolia 250mg + Cichorium Intybus 500mg + Eclipta Alba 500mg + Phyllanthus Niruri 500mg + Boerhaavia Diffusa 250mg + Terminalia Chebula 300mg + Picrorhiza Kurroa 50mg + Fumaria Indica 300mg + Solanum Nigrum 100mg + Silymarin 140mg', form: 'Syrup (200ml)', use: 'Liver protection, hepatitis, fatty liver, liver detox', price: '₹121.85 / 200ml bottle', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Heptalife-UD300', composition: 'Ursodeoxycholic Acid 300mg', form: 'Tablet', use: 'Primary biliary cholangitis, gallstones, liver disorders', price: '₹346.50 / strip of 10', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
            { name: 'Heptalife (Injection)', composition: 'L-Ornithine L-Aspartate 5mg/10ml', form: 'Injection (10ml)', use: 'Hepatic encephalopathy, liver failure support', price: '₹260 / vial', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'gynae',
        name: 'Gynecology',
        desc: "Women's health and hormonal care",
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=300&fit=crop',
        products: [
            { name: 'Femnicare (Tablet)', composition: 'Ashoka Chhal 50mg + Lodhra 50mg + Majju Phal 25mg + Supari 50mg + Nagkesar 50mg + Ashwagandha 12.5mg + Pipal 12.5mg + Kaunch Beej 25mg + Manjistha 50mg + Nagarmotha 30mg + Mochras 50mg + Kukutandtvak Bhasam 20mg + Sfutika Bhasam 20mg', form: 'Tablet', use: 'Menstrual health, uterine toning, hormonal balance', price: '₹65 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Femnicare (Syrup)', composition: 'Saraca Indica 600mg + Ashwagandha 300mg + Shatavari 150mg + Lodhra 300mg + Punica Granatum 300mg + Terminalia Chebula 150mg + Sida Cordifolia 300mg + Berberis Aristata 300mg + Cyperus Rotundus 300mg', form: 'Syrup (200ml)', use: 'Women\'s uterine health, menstrual irregularities, leucorrhoea', price: '₹121.85 / 200ml bottle', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Fetalife (Tablet)', composition: 'Allylestrenol 5mg', form: 'Tablet', use: 'Threatened miscarriage, recurrent abortion, IVF support', price: '₹117 / strip of 10', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Fetalife-500', composition: 'Hydroxyprogesterone 500mg/2ml', form: 'Injection (2ml)', use: 'Prevention of preterm birth, recurrent miscarriage', price: '₹210.90 / vial', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Deuron', composition: 'Norethisterone 5mg', form: 'Tablet', use: 'Menstrual irregularities, endometriosis, PCOS management', price: '₹56 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Morefresh-F', composition: 'Doxylamine Succinate 10mg + Pyridoxine HCl 10mg + Folic Acid 2.5mg', form: 'Tablet', use: 'Morning sickness, pregnancy-induced nausea & vomiting', price: '₹51.50 / strip of 10', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Iro-40 SR', composition: 'Isoxsuprine Hydrochloride 40mg SR', form: 'Tablet', use: 'Preterm labour, threatened abortion, uterine relaxation', price: '₹107.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop' },
            { name: 'Get Charge-P', composition: 'Carica Papaya 1100mg + Goat Milk Powder 50mg + Tinospora Cordifolia 150mg + Ocimum Sanctum 50mg', form: 'Tablet', use: 'Platelet enhancement, dengue fever support, immunity', price: '₹280 / pack of 30', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
            { name: 'Uristrong-KM', composition: 'Potassium Citrate 714.9mg + Magnesium Citrate 263.10mg + D-Mannose 300mg + Cranberry Extract 200mg', form: 'Sachet (10g)', use: 'UTI management, kidney stones, burning micturition', price: '₹311.50 / pack of 10 sachets', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
            { name: 'Uristrong', composition: 'Shuddha Shilajeet 200mg + Shwet Parpati 150mg + Gokshru 450mg + Punernava 500mg + Pashan Bhed 200mg + Potassium Nitrate 85mg + Green Tea Extract 50mg', form: 'Syrup (100ml)', use: 'UTI, burning micturition, renal calculi, impaired renal function', price: '₹119 / 100ml bottle', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'derma',
        name: 'Dermatology',
        desc: 'Skin care and antifungal treatments',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=300&fit=crop',
        products: [
            { name: 'Noich-100', composition: 'Itraconazole 100mg', form: 'Capsule', use: 'Fungal infections: onychomycosis, tinea, candidiasis', price: '₹121.50 / strip of 10', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop' },
            { name: 'Noich-LZ', composition: 'Luliconazole 1% + Beclomethasone 0.025% + Neomycin 0.05%', form: 'Cream (15g)', use: 'Fungal infections with inflammation & secondary bacterial infection', price: '₹93.75 / 15g tube', image: 'https://images.unsplash.com/photo-1608459683633-f85793f8e5b1?w=400&h=300&fit=crop' },
            { name: 'Noich Malham', composition: 'Neem Patra + Madhyantrika + Ghrit Kumari + Daru Haldi + Gandhak 500mg + Kapoor 500mg + Salicylic Acid 500mg + Neem Oil + Karanj Oil', form: 'Ointment (100g)', use: 'Fungal skin infections, scabies, eczema, psoriasis', price: '₹234.35 / 100g jar', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Microdec-25', composition: 'Nandrolone Decanoate 25mg/ml', form: 'Injection (1ml)', use: 'Anemia, muscle wasting, post-surgical recovery', price: '₹65.60 / vial', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'dental',
        name: 'Dental Care',
        desc: 'Oral health and hygiene',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=300&fit=crop',
        products: [
            { name: 'Cavifree Dental Gel', composition: 'Potassium Nitrate 5% + Sodium Monofluorophosphate 0.7% + Triclosan 0.3%', form: 'Gel (50g)', use: 'Cavity prevention, sensitive teeth, gum protection', price: '₹70.30 / 50g tube', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop' },
            { name: 'Cavifree Gumpaint', composition: 'Tannic Acid Glycerin 20% + Iodine 0.3% + Potassium Iodide 0.05% + Menthol 0.5% + Thymol 0.033% + Glycerine 79%', form: 'Gel (15ml)', use: 'Gingivitis, periodontitis, oral ulcers, toothache', price: '₹65.60 / 15ml tube', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'cardiovascular',
        name: 'Cardiovascular',
        desc: 'Heart health and blood pressure management',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop',
        products: [
            { name: 'Nobp-T', composition: 'Amlodipine 5mg + Telmisartan 40mg', form: 'Tablet', use: 'Hypertension, heart failure, cardiovascular risk reduction', price: '₹46.50 / strip of 10', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Nobp-AT', composition: 'Amlodipine 5mg + Atenolol 50mg', form: 'Tablet', use: 'Hypertension, angina, cardiac arrhythmias', price: '₹32.50 / strip of 10', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
            { name: 'Microred', composition: 'Ferric Hydroxide Sucrose Complex (Elemental Iron 20mg/ml)', form: 'Injection (5ml)', use: 'Iron deficiency anemia, pre-dialysis anemia', price: '₹234.30 / vial', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'diabetes',
        name: 'Diabetes Care',
        desc: 'Blood sugar management',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop',
        products: [
            { name: 'Glifort-M1', composition: 'Glimepiride 1mg + Metformin Hydrochloride 500mg SR', form: 'Tablet', use: 'Type 2 diabetes mellitus, blood glucose control', price: '₹51.50 / strip of 15', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' },
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
