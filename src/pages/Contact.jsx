import { useState } from "react";

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("sending");
        setTimeout(() => {
            setFormStatus("sent");
            e.target.reset();
            setTimeout(() => setFormStatus(""), 3000);
        }, 1500);
    };

    return (
        <main className="bg-gray-50 py-16 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Get In Touch
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
                                >
                                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                                </button>
                                {formStatus === "sent" && (
                                    <p className="text-green-600 mt-4 text-center">
                                        Message sent successfully!
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    <strong>Address:</strong> 123 Foodie Lane, Culinary City,
                                    90210
                                </p>
                                <p>
                                    <strong>Phone:</strong> +1 (555) 123-4567
                                </p>
                                <p>
                                    <strong>Email:</strong> orders@uyaiglobal.com
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Order Updates & Support
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Reach us through your favorite platform.
                            </p>
                            <div className="flex justify-center space-x-6">
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-green-500 transition-colors"
                                >
                                    <svg
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.873 6.262l-1.097 4.023 4.144-1.085z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    <svg
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-pink-600 transition-colors"
                                >
                                    <svg
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;