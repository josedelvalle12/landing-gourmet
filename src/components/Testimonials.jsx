import React from 'react';

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
    return (
        <section className="py-16 px-6 md:px-12 bg-carbon-black text-white max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center text-gold-accent">Lo que dicen nuestros clientes</h2>
            <div className="space-y-10 max-w-4xl mx-auto">
                {testimonials.map(({ name, feedback }) => (
                <blockquote key={name} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <p className="italic text-lg leading-relaxed mb-4">"{feedback}"</p>
                    <footer className="text-right font-semibold text-wine-red">— {name}</footer>
                </blockquote>
                ))}
            </div>
        </section>
    );
}