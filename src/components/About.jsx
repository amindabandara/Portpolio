import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                {/* About Image Section */}
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, type: "spring" }}
                >
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </motion.div>
                
                {/* About Text Section */}
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8 flex items-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, type: "spring" }}
                >
                    <p className="text-lg">{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

