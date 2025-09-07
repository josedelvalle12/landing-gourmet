import React from 'react';


export default function Hero() {
    return (
        <section
        className="relative bg-carbon-black text-white h-screen flex items-center justify-center px-6 md:px-12"
        style={{
            backgroundImage: "url('/assets/bg-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
        <div className="bg-black bg-opacity-60 p-8 rounded max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Experiencia Gourmet a tu Puerta
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto">
            Disfruta de platos exclusivos preparados por chefs reconocidos, entregados con la máxima calidad y cuidado.
            </p>
            <button className="bg-gold-accent hover:bg-yellow-500 text-carbon-black font-semibold px-8 py-3 rounded transition">
            Ordena Ahora
            </button>
        </div>
        </section>
    );
}