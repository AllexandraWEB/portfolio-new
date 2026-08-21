"use client";

import { ReactLenis } from "lenis/react"
import WhiteShape from './svg'

const SVGSection = () => {
    return (
        <>
            <ReactLenis root>
                <div className="bg-black">
                    <div className="relative pt-3">
                        <WhiteShape className="w-full h-auto" />
                        <div className="absolute top-1/16 left-3/5">
                            <div className="flex flex-col">
                                <h3 className="text-[110px] font-regular leading-[100%] tracking-[-4%]">Education</h3>
                                <h3 className="text-[110px] font-regular leading-[100%] tracking-[-4%]">Education</h3>
                                <h3 className="text-[110px] font-regular leading-[100%] tracking-[-4%]">Education</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactLenis>
        </>

    )
}

export default SVGSection
