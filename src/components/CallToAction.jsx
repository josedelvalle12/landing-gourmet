import React from 'react';

export default function CallToAction() {
    return (
        <section className="py-16 px-6 md:px-12 bg-white text-carbon-black text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">¿Listo para deleitar tu paladar?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
            Ordena ahora y recibe una experiencia gourmet directamente en la comodidad de tu hogar.
        </p>
        <button className="bg-wine-red hover:bg-red-700 text-white font-semibold px-10 py-4 rounded transition">
            Haz tu pedido
        </button>
        </section>
    );
}