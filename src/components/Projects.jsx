import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            {/* Animated Header */}
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                Projects
            </motion.h1>
            
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, type: "spring", delay: index * 0.2 }}
                    >
                        <div className="w-full lg:w-1/2">
                            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg mb-4 lg:mb-0" />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-8">
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-black-500 mb-4">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;

