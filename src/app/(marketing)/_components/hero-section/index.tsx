import Container from '@/src/components/container'
import React from 'react'
import AnimatedCTA from '../animated-button'

const HeroSection = () => {
    return (
        <Container>
            <div className="min-h-screen flex flex-col">
                <div className="mt-10">
                    <div className="flex flex-col items-start justify-center 2xl:gap-12">
                        <div className="flex gap-2 items-center justify-center mt-5">
                            <h2 className="display-sm-regular-tracking">Aleksandra</h2></div>
                        <h2 className="display-sm-regular-no-tracking font-sloop">
                            <span className="text-red-700">T</span>simentarova
                        </h2>
                    </div>
                </div>

                <div className="mt-auto pb-10 grid grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <h3 className="uppercase text-sm-regular">
                            Front-end Engineer
                        </h3>

                        <p className="uppercase text-sm-regular">
                            Hello - I'm Aleksandra, a developer with passion for clean code, minimalistic design, yet emotionally rich experiences.
                        </p>
                    </div>

                    <div></div>

                    <div>
                        <AnimatedCTA text="See my work" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HeroSection
