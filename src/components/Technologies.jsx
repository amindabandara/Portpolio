import { useState } from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className="border-b border-neutral-800 pb-24">
            {/* Animated Header */}
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                Technologies
            </motion.h1>
            
            {/* Animated Icons Container */}
            <motion.div
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                {[
                    { Icon: RiReactjsLine, color: "text-cyan-400" },
                    { Icon: TbBrandNextjs, color: "text-black-400" },
                    { Icon: SiMongodb, color: "text-green-400" },
                    { Icon: DiRedis, color: "text-red-400" },
                    { Icon: FaNodeJs, color: "text-green-600" },
                    { Icon: BiLogoPostgresql, color: "text-blue-400" }
                ].map(({ Icon, color }, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-full border-4 border-neutral-800 p-4 cursor-pointer ${selectedIndex === index ? 'bg-gray-100' : ''}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: selectedIndex === index ? 1.2 : 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        whileInView={{ opacity: 1, scale: 1.1 }}
                        onClick={() => handleClick(index)}
                    >
                        <Icon className={`text-7xl ${color}`} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;


