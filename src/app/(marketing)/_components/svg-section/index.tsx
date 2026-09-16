"use client";

import { Circle } from "lucide-react";

import Container from "@/src/components/(layout)/container";
import TextAnimation from "@/src/components/(animations)/text-wrapper";
import { useIsMobile } from "@/src/hooks/use-mobile";
import VariableFontCursorProximity from "@/src/components/originkit/ui/dynamic-weight";
import WhiteShape from "./svg";

const SVGSection = () => {
    const isMobile = useIsMobile();

    return (
        <div className="bg-black pt-3">
            {/* Mobile View */}
            {isMobile && (
                <div className="py-8 text-white">
                    <div className="space-y-10">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <h1 className="display-sm-regular-tracking">
                                Education.
                            </h1>

                            <h1 className="display-sm-regular-tracking">
                                Education.
                            </h1>

                            <h1 className="display-sm-regular-tracking">
                                Education.
                            </h1>
                        </div>

                        <div>
                            <img
                                src="/assets/svg/WhiteShape.svg"
                                alt="White Shape"
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="px-4">
                            <p className="headline-h5 font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nostrum perspiciatis
                                exercitationem distinctio numquam in quos sunt
                                officiis illo aut sequi commodi.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop View */}
            <div className="hidden xl:block relative overflow-hidden">
                {/* SVG background */}
                <WhiteShape className="absolute top-0 left-0 w-full h-auto" />

                <Container className="relative z-10">
                    <div className="grid-vars">
                        <div className="grid grid-12 min-h-[calc(100vw*1.17286)] grid-rows-[30%_20%_25%_25%]">
                            {/* Education */}
                            <div className="col-start-7 col-span-8 row-start-1 self-center pl-2">
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center">
                                        <p className="uppercase pl-2">
                                            Chapter 1.2 How it began
                                        </p>
                                    </div>

                                    <TextAnimation>
                                        <VariableFontCursorProximity
                                            label="Education."
                                            fontSize={110}
                                            color="#000000"
                                            fromWeight={300}
                                            toWeight={900}
                                            strength={45}
                                            transition={{
                                                type: "tween",
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        />

                                        <VariableFontCursorProximity
                                            label="Education."
                                            fontSize={110}
                                            color="#000000"
                                            fromWeight={300}
                                            toWeight={900}
                                            strength={45}
                                            transition={{
                                                type: "tween",
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        />

                                        <VariableFontCursorProximity
                                            label="Education."
                                            fontSize={110}
                                            color="#000000"
                                            fromWeight={300}
                                            toWeight={900}
                                            strength={45}
                                            transition={{
                                                type: "tween",
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </TextAnimation>
                                </div>
                            </div>

                            {/* Plovdiv University */}
                            <div className="col-start-3 col-span-3 row-start-2 self-end">
                                <div className="flex justify-start">
                                    <div className="size-60 flex items-center justify-center rounded-full bg-black p-4">
                                        <img
                                            src="/assets/logos/pu-logo.png"
                                            className="w-32.5 h-auto invert"
                                            alt="Plovdiv University"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SoftUni */}
                            <div className="col-start-9 col-span-3 row-start-4 self-start">
                                <div className="flex justify-start">
                                    <div className="size-60 flex items-center justify-center rounded-full bg-black p-4">
                                        <img
                                            src="/assets/logos/softuni-logo.png"
                                            className="w-32.5 h-auto"
                                            alt="SoftUni"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="col-start-1 col-span-9 row-start-4 self-end">
                                <div className="max-w-120 pb-6">
                                    <TextAnimation>
                                        <p className="headline-h5 font-normal">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Nostrum perspiciatis exercitationem
                                            distinctio numquam in quos sunt
                                            officiis illo aut sequi commodi.
                                        </p>
                                    </TextAnimation>

                                    <div className="text-sm uppercase pt-4">
                                        <div className="w-full grid grid-cols-2 border-b border-black py-2">
                                            <span>Untill now</span>
                                            <span>
                                                JavaScript qualification
                                            </span>
                                        </div>

                                        <div className="w-full grid grid-cols-2 border-b border-black py-2">
                                            <span>Incoming</span>
                                            <span>Bachelor degree</span>
                                        </div>

                                        <div className="w-full grid grid-cols-2 border-b border-black py-2">
                                            <span>Future</span>
                                            <span>Masters degree</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SVGSection;