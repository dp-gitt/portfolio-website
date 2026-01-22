"use client";
import { Button, Link } from "@heroui/react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-[100vh] px-6 text-center gap-6">
            <div className="max-w-2xl space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter ">
                    Hey! Im Dhinesh.
                </h1>
                <p className="text-xl font-bold  text-gray-500">
                    A USYD Software Engineering/Finance Student <br/>
                    with a passion for algorithms & full-stack development.
                </p>
            </div>
            
            <div className="flex gap-4">
                <Button as={Link} href="#projects" color="success" size="lg" variant="solid">
                    My Projects
                </Button>
                <Button as={Link} href="#experience" color="success" size="lg" variant="solid">
                    My Experience
                </Button>
            </div>
        </section>
    );
}