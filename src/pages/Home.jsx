import ProductCard from "../components/ProductCard";

const standardProducts = [
    {
        id: 1,
        name: "Uyai Zobo",
        price: 5.0,
        image: "https://placehold.co/600x400/F97316/FFFFFF?text=Uyai+Zobo",
        special: false,
    },
    {
        id: 2,
        name: "Shawarma Uyai",
        price: 12.5,
        image: "https://placehold.co/600x400/EA580C/FFFFFF?text=Shawarma",
        special: false,
    },
    {
        id: 3,
        name: "SFK Coconut Water",
        price: 7.0,
        image: "https://placehold.co/600x400/F97316/FFFFFF?text=Coconut+Water",
        special: false,
    },
    {
        id: 4,
        name: "Uyai Grilled Plantain",
        price: 10.0,
        image: "https://placehold.co/600x400/EA580C/FFFFFF?text=Grilled+Plantain",
        special: true,
    },
];

const soupBowls = [
    "Stew",
    "Oha",
    "Afang",
    "Egusi",
    "Okro",
    "Groundnut UYAI Signature Soup",
    "Bitter Leaf",
    "Ogbono",
    "White Soup",
    "Fisherman's Soup",
    "Vegetable",
    "Banga",
    "Kuka",
    "Eferiro",
];

const HomePage = () => {

    return (
        <main className="bg-gray-50">
            <section className="bg-orange-100 py-20 px-6 h-[50vh]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-orange-800 mb-4">
                        Authentic Flavors, Delivered Fast.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience the taste of UYAI. Freshly prepared meals and drinks,
                        perfect for any occasion.
                    </p>
                </div>
            </section>
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Popular Items
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {standardProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Soup Bowls
                    </h2>
                    <p className="text-center text-gray-500 mb-12">
                        (Available for Bulk Orders)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="list">
                        {soupBowls.map((soup) => (
                            <div
                                key={soup}
                                role="listitem"
                                className="bg-gray-50 border-2 border-orange-200 rounded-lg p-4 flex items-center justify-center h-24 md:h-28 text-center transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <h4 className="text-lg font-medium text-gray-700 truncate px-2">{soup}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors duration-300 text-lg">
                            Inquire About Bulk Orders
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;