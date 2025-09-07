import React from 'react';

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
    return (
        <section className="py-16 px-6 md:px-12 bg-white text-carbon-black max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">¿Por qué elegirnos?</h2>
            <div className="grid gap-10 md:grid-cols-3">
                {services.map(({ title, description }) => (
                <div key={title} className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-wine-red">{title}</h3>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
                ))}
            </div>
        </section>
    );
}