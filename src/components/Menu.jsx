import React from 'react';
import { motion } from 'framer-motion';
import RisottoImg from '/public/assets/Risotto-Trufado-al-Tartufo.jpg';
import SalmonImg from '/public/assets/Salmón-al-Vapor-con-Salsas-Asiáticas.png';
import BifeImg from '/public/assets/Wagyu-Especial-a-la-Parrilla.png';

const menuItems = [
    {
        name: 'Risotto Trufado al Tartufo',
        description: 'Arroz cremoso con azafrán y trufas italianas, acompañado de setas frescas y parmesano rallado. Un plato elegante para ocasiones especiales.',
        price: '$28',
        image: RisottoImg, // Fixed: String path directo
        alt: 'Plato de risotto cremoso con recubrimiento de trufas frescas, setas salteadas y queso parmesano en un cuenco blanco sobre fondo neutro',
    },
    {
        name: 'Wagyu Especial a la Parrilla',
        description: 'Filete de wagyu de Kobe jugoso y tierno, marinado en hierbas aromáticas, servido con puré de boniato y chimichurri casero.',
        price: '$42',
        image: BifeImg, // Corregido: Imagen correcta para Wagyu
        alt: 'Filete de wagyu a la parrilla con corte perfecto, puré cremoso de boniato y salsa verde a un lado, en plato de presentación elegante',
    },
    {
        name: 'Salmón al Vapor con Salsas Asiáticas',
        description: 'Salmón fresco de Atlántico al vapor con vegetales orgánicos, acompañado de salsas de soja y jengibre. Ligero y lleno de sabor.',
        price: '$32',
        image: SalmonImg, // Corregido: Imagen correcta para Salmón
        alt: 'Salmón rosado al vapor con piel crujiente, rodeado de verduras frescas y salsas orientales en una cazuela de cerámica',
    },
];

export default function Menu() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
            },
        },
    };

    const cardVariants = {
        hidden: { x: -30, opacity: 0, scale: 0.95 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 },
        },
    };

    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white text-carbon-black max-w-7xl mx-auto">
            <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-12 text-center text-wine-red"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Platos Más Solicitados
            </motion.h2>
            <motion.div
                className="grid gap-8 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {menuItems.map(({ name, description, price, image, alt }) => (
                    <motion.div
                        key={name}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-white"
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, y: -5 }} // Lift on hover
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="relative w-full h-48"
                            variants={imageVariants}
                        >
                            <img
                                src={image}
                                alt={alt}
                                className="w-full h-full object-cover"
                                loading="lazy" // Para mejor performance (lazy loading)
                            />
                        </motion.div>
                        <div className="p-6 flex flex-col justify-between h-full">
                            <motion.h3
                                className="text-xl font-semibold mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {name}
                            </motion.h3>
                            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{description}</p>
                            <div className="flex justify-between items-center mt-auto">
                                {/* <span className="text-2xl font-bold text-gold-accent">{price}</span>
                                <motion.button
                                    className="bg-red-900 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Agregar al Carrito
                                </motion.button> */}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}