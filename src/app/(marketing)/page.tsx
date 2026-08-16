import Container from "@/src/components/container"
import AnimatedCTA from "./_components/animated-button"

export default function Page() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col">
        <div className="mt-24">
          <div className="flex flex-col items-center justify-center gap-2 2xl:gap-12">
            <h2 className="display-sm-regular-tracking">Alexandra</h2>
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
              Hello there — I'm Katherine, an agile designer hopping across
              digital and physical worlds. Currently creating impactful visual
              experiences @ TGC EG
            </p>
          </div>

          <div></div>

          <div>
            <AnimatedCTA text="Work with me" />
          </div>
        </div>
      </div>
    </Container>
  )
}
