"use client";
import { Tabs, Tab, Card, CardBody, Button, ScrollShadow } from "@heroui/react";
import { useState } from "react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  const [selected, setSelected] = useState("hub24");
  const [isJsonView, setIsJsonView] = useState(false);

  return (
    <section id="experience" className="flex flex-col items-center justify-center w-full py-20 px-4">
      
      {/* Section Header */}
      <div className="text-center mb-10 relative">
        <h2 className="text-4xl font-bold tracking-tight">
          Experience
        </h2>
        <p className="text-sm text-default-500 mt-2 mb-4 font-bold">
            2 Years of Industry Experience in Tech
        </p>
        
        {/* The Toggle Button */}
        <Button 
            size="md" 
            variant={isJsonView ? "solid" : "bordered"} 
            color={isJsonView ? "success" : "default"}
            onPress={() => setIsJsonView(!isJsonView)}
            className="font-mono text-xs"
        >
            {isJsonView ? "{ Press to View as UI }" : "{ Press to View as JSON } "}
        </Button>
      </div>

      {/* Conditional Rendering */}
      {isJsonView ? (
        // ide view
        <Card className="w-full max-w-4xl bg-[#1e1e1e] text-[#d4d4d4] shadow-2xl font-mono text-sm md:text-base overflow-hidden border border-[#333]">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs text-gray-400">dhinesh-portfolio — experience.json</div>
              <div className="w-10" />
            </div>

            <CardBody className="p-0">
                <ScrollShadow className="h-[500px] w-full p-4 md:p-6 overflow-auto">
                  <div className="flex">
                    {/* Line Numbers */}
                    <div className="flex flex-col text-right pr-4 text-[#858585] select-none border-r border-[#333] mr-4 min-w-[2rem] font-mono text-xs md:text-sm leading-6">
                      {Array.from({ length: 45 }).map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>

                    {/* Code Content */}
                    <div className="flex-1 leading-6 whitespace-pre-wrap font-mono text-xs md:text-sm">
                      <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">experience</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#da70d6]">[</span>
                      
                      {experiences.map((exp, index) => (
                        <div key={index} className="ml-4 hover:bg-[#2c2c2d] rounded px-1 -mx-1 transition-colors">
                          <span className="text-[#da70d6]">{`{`}</span>
                          <br />
                          <span className="ml-4 text-[#9cdcfe]">"company"</span>: <span className="text-[#ce9178]">"{exp.company}"</span>,
                          <br />
                          <span className="ml-4 text-[#9cdcfe]">"role"</span>: <span className="text-[#ce9178]">"{exp.role}"</span>,
                          <br />
                          <span className="ml-4 text-[#9cdcfe]">"period"</span>: <span className="text-[#ce9178]">"{exp.date}"</span>,
                          <br />
                          <span className="ml-4 text-[#9cdcfe]">"details"</span>: <span className="text-[#ffd700]">[</span>
                          {exp.details.map((h, i) => (
                             <div key={i} className="ml-8">
                                 <span className="text-[#ce9178]">"{h}"</span>{i < exp.details.length - 1 ? "," : ""}
                             </div>
                          ))}
                          <span className="ml-4 text-[#ffd700]">]</span>
                          <br />
                          <span className="text-[#da70d6]">{`}`}{index < experiences.length - 1 ? "," : ""}</span>
                        </div>
                      ))}
                      
                      <span className="text-[#da70d6]">]</span>;
                      <span className="animate-pulse inline-block w-2 h-4 bg-green-500 align-middle ml-1"></span>
                    </div>
                  </div>
                </ScrollShadow>
            </CardBody>
        </Card>

      ) : (
        /* ---------------- STANDARD / TAB VIEW ---------------- */
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-6">
            <div className="w-full md:w-1/3">
            <Tabs 
                aria-label="Experience Options"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key as string)}
                variant="underlined"
                color="primary"
                classNames={{
                tabList: "flex-row md:flex-col gap-0 md:gap-2 relative p-0 border-b md:border-b-0 md:border-l border-default-200",
                cursor: "w-full bg-primary h-[2px] md:h-full md:w-[2px] md:left-0 top-auto md:top-0 absolute",
                tab: "justify-start h-12 px-4 text-left data-[selected=true]:text-primary text-default-500 text-lg transition-colors",
                tabContent: "group-data-[selected=true]:font-semibold"
                }}
            >
                {experiences.map((exp) => (
                <Tab 
                    key={exp.id} 
                    title={exp.company} 
                />
                ))}
            </Tabs>
            </div>

            <div className="w-full md:w-2/3 min-h-[300px]">
            {experiences.map((exp) => (
                selected === exp.id && (
                    <Card key={exp.id} className="w-full h-full border-none shadow-none bg-transparent" radius="none">
                    <CardBody className="p-0 animate-appearance-in">
                        <div className="flex flex-col gap-1 mb-4">
                            <h3 className="text-2xl font-bold text-foreground">
                                {exp.role} <span className="text-primary">@ {exp.company}</span>
                            </h3>
                            <p className="text-sm font-mono text-default-500 mb-2">
                                {exp.date}
                            </p>
                        </div>

                        <ul className="list-none space-y-4">
                            {exp.details.map((detail, i) => (
                                <li key={i} className="relative pl-6 text-default-600 leading-relaxed text-base">
                                    <span className="absolute left-0 top-2.5 w-2 h-2 bg-primary rounded-full transform -translate-y-1/2"></span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                    </Card>
                )
            ))}
            </div>
        </div>
      )}
    </section>
  );
}