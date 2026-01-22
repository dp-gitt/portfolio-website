"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/types";
import { Button, Chip, Image, Link } from "@heroui/react";
import { useEffect } from "react";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    const hasImages = project.imageUrl && project.imageUrl.length > 0;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content: Solid White Background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header Actions */}
                <div className="absolute top-4 right-4 z-50">
                     <Button isIconOnly variant="faded" radius="full" onPress={onClose}>
                        ✕
                    </Button>
                </div>

                {/* Scrollable Body */}
                <div className="overflow-y-auto p-6 md:p-10 h-full">
                    
                    <div className="mb-8">
                         <h2 className="text-3xl md:text-4xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                             {project.title}
                         </h2>
                         <p className="text-lg text-zinc-500 dark:text-zinc-400">
                             {project.description}
                         </p>
                    </div>

                    <div className={`grid grid-cols-1 ${hasImages ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-12`}>
                        
                        {/* LEFT COLUMN: Images */}
                        {hasImages && (
                            <div className="space-y-6">
                                {project.imageUrl?.map((url, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800">
                                        <Image 
                                            removeWrapper
                                            src={url} 
                                            alt={`Screenshot ${i + 1}`} 
                                            className="w-full h-auto object-cover block"
                                            radius="none"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* RIGHT COLUMN: Details */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                                    About the Project
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                                    {project.longDescription || project.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags?.map((tag) => (
                                        <Chip key={tag} color="default" variant="flat" size="lg">
                                            {tag}
                                        </Chip>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                {project.githubUrl ? (
                                    <Button 
                                        as={Link} 
                                        href={project.githubUrl} 
                                        isExternal
                                        color="primary" 
                                        size="lg"
                                        variant="shadow"
                                        className="w-full font-semibold text-white"
                                        showAnchorIcon
                                    >
                                        View Source Code
                                    </Button>
                                ) : (
                                    <Button disabled variant="flat" className="w-full opacity-50">
                                        Source Code Private
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}