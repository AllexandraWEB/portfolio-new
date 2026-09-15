"use client"

import TextAnimation from '@/src/components/(animations)/text-wrapper'
import Container from '@/src/components/(layout)/container'

const AboutSection = () => {
    return (
        <div className="min-h-screen mx-auto">
            <Container>
                <div className="grid-vars">
                    <div className="grid md:grid-4 items-center min-h-screen">
                        <div className="col-span-1">
                            <div className="flex items-start shrink-0 gap-2">
                                <p className="eyebrow-small uppercase">
                                    Chapter 1.1 About me
                                </p>
                            </div>
                        </div>

                        <div className="col-span-3">
                            <TextAnimation>
                                <h2 className="headline-h2 font-normal">
                                    I’m a frontend developer crafting thoughtful digital experiences that connect design, technology and interaction. I help ambitious teams turn ideas into fast, polished interfaces.
                                </h2>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutSection