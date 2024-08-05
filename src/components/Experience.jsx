import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="w-full lg:w-1/4">
                            <motion.p
                                className="mb-2 text-sm text-neutral-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.2 }}
                            >
                                {experience.year}
                            </motion.p>
                        </div>
                        <div className="w-full lg:w-3/4">
                            <motion.h6
                                className="mb-2 font-semibold"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                            >
                                {experience.role} - 
                                <span className="text-sm text-purple-100">{experience.company}</span>
                            </motion.h6>
                            <motion.p
                                className="mb-4 text-neutral-400"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                            >
                                {experience.description}
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                            >
                                {experience.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;




