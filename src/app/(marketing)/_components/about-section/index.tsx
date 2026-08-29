"use client"

import TextAnimation from '@/src/components/(animations)/text-wrapper'
import Container from '@/src/components/(layout)/container'

const AboutSection = () => {
    return (
        <div className="h-screen flex items-center justify-center mx-auto">
            <Container className="">
                <div className="flex flex-col items-start justify-start text-start">
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap-39">
                        <div className="flex items-start shrink-0 gap-2">
                            <p className="eyebrow-small uppercase">Chapter 1.1 About me</p>
                        </div>
                        <div className="">
                            {/* <TextAnimation> */}
                                <h2 className="headline-h1 font-normal">
                                    I’m a frontend developer crafting thoughtful digital experiences that connect design, technology and interaction. I help ambitious teams turn ideas into fast, polished interfaces.
                                </h2>
                            {/* </TextAnimation> */}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutSection