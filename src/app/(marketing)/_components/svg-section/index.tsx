"use client";

import { ReactLenis } from "lenis/react"
import VariableFontCursorProximity from "@/src/components/originkit/ui/dynamic-weight";
import { Circle } from "lucide-react";
import Container from "@/src/components/(layout)/container";
import TextAnimation from "@/src/components/(animations)/text-wrapper";
import useIsMobile from "@/src/hooks/use-mobile";

const SVGSection = () => {
    const isMobile = useIsMobile();
    return (
        <>
            <ReactLenis root>
                <div className="bg-black pt-3">
                    {isMobile && (
                        <div>
                            <div>
                                <img src="/assets/svg/WhiteShape.svg" alt="White Shape" className="w-full h-auto" />
                            </div>
                        </div>

                    )}

                    <div className="hidden xl:block relative bg-[url('/assets/svg/WhiteShape.svg')] h-[1860px] bg-no-repeat bg-cover">
                        <Container>
                            <div className="pt-40 flex items-center justify-center h-full gap-4">
                                <div className="w-103.75"></div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 pl-2">
                                        <Circle fill="#000000" className="size-4" /><p className="uppercase">Chapter 1.2 How it began</p>
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
                            <div className="ml-60 w-60 h-60 flex items-center justify-center bg-black p-4 rounded-full">
                                <img src="/assets/logos/pu-logo.png" className="w-32.5 h-auto invert" />
                            </div>
                            <div className="flex items-end justify-end h-full">
                                <div className="mr-30 mt-63.5 w-60 h-60 flex items-center justify-center bg-black p-4 rounded-full">
                                    <img src="/assets/logos/softuni-logo.png" className="w-32.5 h-auto" />
                                </div>
                            </div>
                            <div className="flex items-start justify-start h-full">
                                <div className="ml-10 mt-75.5 max-w-120 border-b border-black pb-6">
                                    <TextAnimation><p className="headline-h5 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis exercitationem distinctio numquam in quos sunt officiis illo aut sequi commodi.</p></TextAnimation>
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
