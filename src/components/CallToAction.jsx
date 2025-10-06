import React from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-amber-50/50 text-carbon-black text-center max-w-7xl mx-auto relative overflow-hidden">
            {/* Subtle background pattern or wave for modernity (optional Tailwind classes) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] opacity-50"></div>
            
            <motion.div
                className="relative z-10 space-y-6 max-w-2xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6 bg-red-900 bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    ¿Listo para deleitar<br></br> tu paladar?
                </motion.h2>
                <motion.p
                    className="mb-8 text-lg leading-relaxed text-gray-700"
                    variants={itemVariants}
                >
                    Ordena ahora y recibe una experiencia gourmet directamente en la comodidad de tu hogar.
                </motion.p>
                <motion.button
                    className="bg-red-900 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                        scale: [1, 1.02, 1], // Gentle pulse on load
                    }}
                    transition={{ 
                        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    aria-label="Haz tu pedido ahora"
                >
                    <span className="relative z-10">Haz tu pedido</span>
                    {/* Subtle shine effect on hover (optional) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
            </motion.div>
        </section>
    );
}