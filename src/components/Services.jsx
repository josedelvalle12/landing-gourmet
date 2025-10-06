import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Ingredientes Premium',
        description: 'Solo utilizamos productos frescos y seleccionados para garantizar sabor y calidad en cada plato.',
    },
    {
        title: 'Entrega Rápida y Segura',
        description: 'Tu pedido llega caliente y en perfectas condiciones, justo a tiempo para tu momento especial.',
    },
    {
        title: 'Menú Exclusivo',
        description: 'Platos únicos y creativos que no encontrarás en ningún otro lugar, diseñados para paladares exigentes.',
    },
];

export default function Services() {
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
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 text-carbon-black max-w-7xl mx-auto">
            <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-12 text-center text-wine-red"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                ¿Por qué elegirnos?
            </motion.h2>
            <motion.div
                className="grid gap-10 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {services.map(({ title, description }, index) => (
                    <motion.div
                        key={title}
                        className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }} // Lift on hover
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-wine-red" aria-label={`${title} service`}>
                            {title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}