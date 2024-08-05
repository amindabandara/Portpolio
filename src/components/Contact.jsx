import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Contact</h2>
            <div className="flex justify-center">
                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <form
                        action="mailto:amindachandi@gmail.com" // Replace with your email or form handling URL
                        method="POST"
                        encType="multipart/form-data"
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <motion.button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
