"use client";

import { Card, CardBody, CardFooter, Image, Chip } from "@heroui/react";
import { Project } from "@/data/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    onClick: (p: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    const thumbnail = (project.imageUrl && project.imageUrl.length > 0)
        ? project.imageUrl[0] 
        : "https://placehold.co/600x400?text=No+Image";

    return (
        <motion.div 
            whileHover={{ y: -5 }} 
            whileTap={{ scale: 0.98 }}
            className="h-full"
        >
            <Card 
                isPressable 
                onPress={() => onClick(project)}
                className="w-full h-full border-none hover:bg-content2 transition-colors duration-300"
                shadow="sm"
            >
                <CardBody className="p-0 overflow-hidden">
                    <Image
                        removeWrapper
                        radius="none"
                        alt={project.title}
                        className="w-full h-[220px] object-cover z-0"
                        src={thumbnail}
                    />
                </CardBody>
                
                <CardFooter className="flex-col items-start gap-2 p-5">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-default-500 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-3">
                        {project.tags?.slice(0, 3).map((tag) => (
                            <Chip key={tag} size="sm" variant="flat" color="secondary" className="text-xs">
                                {tag}
                            </Chip>
                        ))}
                        {project.tags && project.tags.length > 3 && (
                             <span className="text-xs text-default-400 self-center">+{project.tags.length - 3}</span>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}