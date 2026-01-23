"use client";
import { Card, CardBody, Button, Link, Chip } from "@heroui/react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 flex justify-center bg-default-50/50">
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
                    About Me
                </h2>
                
                <Card className="w-full p-2 md:p-6" shadow="sm">
                    <CardBody className="gap-8 text-center md:text-left">
                         
                         {/* Bio Text */}
                        <div className="space-y-4 text-lg text-default-600 leading-relaxed">
                            <p>
                                I am an active problem solver who thrives in a challenging environment. 
                                I enjoy having full ownership of projects and tackling <span className="text-foreground font-semibold">algorithm-related problems</span> that require unique solutions.
                            </p>
                            <p>
                                Beyond software engineering, I am passionate about sports: gym, tennis, bouldering, anything outdoors!
                            </p>
                        </div>

                        {/* LeetCode Feature Block */}
                        <div className="w-full bg-content2/50 rounded-xl p-6 border border-default-200 flex flex-col md:flex-row items-center justify-between gap-6">
                            
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <div className="flex items-center gap-2">
                                     <Chip color="warning" variant="flat" size="sm">Competitive Programming</Chip>
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    My LeetCode Journey
                                </h3>
                                <p className="text-sm text-default-500 max-w-md">
                                    I've recently started doing algorithm problems. Keen to share my progress as I'm trying to be consistent!
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                {/* <Button 
                                    as={Link}
                                    href="https://leetcode.com/dhineshponnappan"
                                    isExternal
                                    className="bg-[#ffa116] text-black font-bold shadow-lg w-full md:w-auto"
                                    variant="solid"
                                    size="lg"
                                    startContent={
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.423a1.398 1.398 0 0 0-.18 1.911l.299.381a1.38 1.38 0 0 0 1.954.218l3.15-2.784a.297.297 0 0 1 .398.006l.006.007a.295.295 0 0 1 .006.398l-6.402 7.026c-.34.372-.813.565-1.284.532a1.868 1.868 0 0 1-1.637-1.354l-.57-2.31c-.138-.56.12-1.144.605-1.458L6.4 6.22l.216-.192a.296.296 0 0 1 .398.007l.007.006a.296.296 0 0 1 .005.399l-2.43 2.688a.276.276 0 0 0-.03.273l.42 1.704c.125.503.774.55 1.01.077l6.635-7.27a1.383 1.383 0 0 0-.15-1.913zM2.87 15.658l.681-2.044.205-.278a.296.296 0 0 1 .42.047l.006.007a.296.296 0 0 1-.03.414l-1.303 1.382a.274.274 0 0 0 .1.46l2.193.541c.51.126.702.775.297 1.127l-2.454 2.124a1.383 1.383 0 0 0 .15 1.913l5.349-4.985a1.377 1.377 0 0 0 .96-1.55l-.298-.382a1.38 1.38 0 0 0-1.954-.218l-3.15 2.785a.297.297 0 0 1-.398-.007l-.006-.006a.296.296 0 0 1-.006-.399l6.402-7.026c.34-.372.812-.564 1.284-.531.62.043 1.157.483 1.355 1.09l.57 2.31c.138.56-.12 1.144-.606 1.458l-2.895 1.777-.215.192a.296.296 0 0 1-.399-.007l-.006-.006a.296.296 0 0 1-.006-.399l2.43-2.688a.276.276 0 0 0 .03-.272l-.42-1.705c-.125-.502-.773-.55-1.01-.077l-6.634 7.27a1.383 1.383 0 0 0 .15 1.913l-5.35 4.985a1.38 1.38 0 0 0-.52 1.955l.298.381a1.378 1.378 0 0 0 1.954.219l3.15-2.785a.296.296 0 0 1 .398.006l.006.007a.296.296 0 0 1 .006.398l-6.402 7.026c-.34.372-.813.565-1.284.532a1.868 1.868 0 0 1-1.637-1.354l-.57-2.31c-.138-.56.12-1.144.606-1.458l2.895-1.777.215-.192a.296.296 0 0 1 .399-.007l.007-.006a.295.295 0 0 1 .005.398l-2.43 2.688a.276.276 0 0 0-.03.272l.42 1.705c.125.502.774.55 1.01.076l6.635-7.269a1.383 1.383 0 0 0-.15-1.913z"/>
                                        </svg>
                                    }
                                >
                                    View Profile
                                </Button> */}
                                <span className="text-[10px] uppercase tracking-wider text-default-400 font-semibold">
                                    *No Public API Available Yet
                                </span>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>
        </section>
    );
}