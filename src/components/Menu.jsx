import React from 'react';
    
    const menuItems = [
    {
        name: 'Risotto Trufado al Tartufo',
        description: 'Arroz cremoso con azafrán y trufas italianas, acompañado de setas frescas y parmesano rallado. Un plato elegante para ocasiones especiales.',
        price: '$28',
        image: "/assets/Risotto-Trufado-al-Tartufo.jpg",
        alt: 'Plato de risotto cremoso con recubrimiento de trufas frescas, setas salteadas y queso parmesano en un cuenco blanco sobre fondo neutro',
    },
    {
        name: 'Wagyu Especial a la Parrilla',
        description: 'Filete de wagyu de Kobe jugoso y tierno, marinado en hierbas aromáticas, servido con puré de boniato y chimichurri casero.',
        price: '$42',
        image: "/assets/Wagyu-Especial-a-la-Parrilla.png",
        alt: 'Filete de wagyu a la parrilla con corte perfecto, puré cremoso de boniato y salsa verde a un lado, en plato de presentación elegante',
    },
    {
        name: 'Salmón al Vapor con Salsas Asiáticas',
        description: 'Salmón fresco de Atlántico al vapor con vegetales orgánicos, acompañado de salsas de soja y jengibre. Ligero y lleno de sabor.',
        price: '$32',
        image: "/assets/Salmón-al-Vapor-con-Salsas-Asiáticas.png",
        alt: 'Salmón rosado al vapor con piel crujiente, rodeado de verduras frescas y salsas orientales en una cazuela de cerámica',
    },
    ];

    export default function Menu() {
    return (
        <section className="py-16 px-6 md:px-12 bg-white text-carbon-black max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-wine-red">Platos Más Solicitados</h2>
        <div className="grid gap-8 md:grid-cols-3">
            {menuItems.map(({ name, description, price, image, alt }) => (
            <div key={name} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full">
                <img src={image} alt={alt} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-2xl font-bold text-gold-accent">{price}</span>
                        <button className="bg-wine-red hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition">
                        Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}