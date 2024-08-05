import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/DTP06672.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                {/* Hero content section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <motion.h1 initial={{x: -100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:2}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Aminda Bandara</motion.h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>

                {/* Profile picture section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:pl-16 lg:pr-4">
                    <img
                        src={profilePic}
                        alt="Aminda Bandara"
                        className="w-72 h-72 object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

