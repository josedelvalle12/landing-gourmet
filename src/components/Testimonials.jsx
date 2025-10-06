import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'María López',
        feedback: 'La calidad y presentación de los platos superó mis expectativas. El servicio de entrega fue puntual y amable.',
    },
    {
        name: 'Carlos Méndez',
        feedback: 'Cada bocado es una experiencia única. Recomiendo especialmente el menú degustación para ocasiones especiales.',
    },
    {
        name: 'Ana Torres',
        feedback: 'Me encanta que usen ingredientes frescos y locales. El sabor auténtico y la atención al detalle son inigualables.',
    },
];

export default function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-950 to-gray-900 text-white max-w-7xl mx-auto">
            <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gold-accent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Lo que dicen nuestros clientes
            </motion.h2>
            <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {testimonials.map(({ name, feedback }, index) => (
                    <motion.blockquote
                        key={name}
                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 relative overflow-hidden"
                        variants={cardVariants}
                        whileHover={{ 
                            scale: 1.02, 
                            y: -5,
                            boxShadow: '0 20px 40px rgba(251, 191, 36, 0.3)' // Gold glow on hover
                        }}
                        transition={{ duration: 0.3 }}
                        role="blockquote"
                    >
                        {/* Subtle quote icon */}
                        <div className="absolute top-4 left-4 text-2xl text-gold-accent opacity-70">“</div>
                        <p className="italic text-lg leading-relaxed mb-6 relative z-10 pl-8">"{feedback}"</p>
                        <footer className="text-right font-semibold text-wine-red relative z-10">
                            — {name}
                        </footer>
                        {/* Optional: Add a gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/20 pointer-events-none"></div>
                    </motion.blockquote>
                ))}
            </motion.div>
        </section>
    );
}