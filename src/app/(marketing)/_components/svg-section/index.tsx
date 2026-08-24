"use client";

import { ReactLenis } from "lenis/react"
import WhiteShape from './svg'
import VariableFontCursorProximity from "@/src/components/originkit/ui/dynamic-weight";
import { Circle } from "lucide-react";
import Container from "@/src/components/container";

const SVGSection = () => {
    return (
        <>
            <ReactLenis root>
                <div className="bg-black pt-3">
                    <div className="relative bg-[url('/assets/svg/WhiteShape.svg')] h-[1860px] bg-no-repeat bg-cover">
                        <Container>
                            <div className="pt-40 flex items-center justify-center h-full gap-4">
                                <div className="w-103.75"></div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 pl-4">
                                        <Circle fill="#000000" className="size-4" /><p className="uppercase">Chapter 1.1 How it began</p>
                                    </div>
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
                                </div>
                            </div>
                            <div className="ml-60 w-60 h-60 flex items-center justify-center bg-black p-4 rounded-full">
                                <img src="/assets/logos/pu-logo.png" className="w-32.5 h-auto invert" />
                            </div>
                            <div className="flex items-end justify-end h-full">
                                <div className="mr-30 mt-63.5 w-60 h-60 flex items-center justify-center bg-black p-4 rounded-full">
                                    <img src="/assets/logos/softuni-logo.png" className="w-32.5 h-auto invert" />
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </ReactLenis>
        </>

    )
}

export default SVGSection
