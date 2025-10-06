import React from 'react';
import { motion } from 'framer-motion';
import bgHero from '/public/assets/bg-hero.jpg';

export default function Hero() {
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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section
            className="relative bg-carbon-black text-white h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Adds subtle parallax feel
            }}
        >
            <motion.div
                className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center space-y-6 backdrop-blur-sm" // Added backdrop blur for modern glassmorphism
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    Experiencia Gourmet a tu Puerta
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Disfruta de platos exclusivos preparados por chefs reconocidos, entregados con la máxima calidad y cuidado.
                </motion.p>
                <motion.button
                    className="bg-yellow-600 hover:bg-yellow-500 text-carbon-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }} // Subtle button hover animation
                    whileTap={{ scale: 0.95 }}
                >
                    Ordena Ahora
                </motion.button>
            </motion.div>
        </section>
    );
}