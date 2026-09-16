import AnimatedFooter from "../../ui/animated-footer";

export function AnimatedFooterDemo() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
      <AnimatedFooter
        headingLines={["Alexandra"]}
        leftImage="/animated-footer/hand-left.jpg"
        rightImage="/animated-footer/hand-right.jpg"
      />
    </div>
  )
}