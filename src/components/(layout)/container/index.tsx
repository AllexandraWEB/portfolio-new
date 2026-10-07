import { cn } from "@/src/lib/utils"

type ContainerProps = {
  children: React.ReactNode
  className?: string
  outer?: string
  as?: React.ElementType
  id?: string
  global?: boolean
}

export default function Container({
  id,
  children,
  className,
  outer,
  as: Component = 'div',
  global,
}: ContainerProps) {
  return (
    <div 
      className={cn(
        'w-full px-7 md:px-10', 
        outer
      )} 
      id={id}
    >
      <Component
        className={cn(
          `w-full max-w-360 mx-auto grid-vars`,
          global ? 'flex flex-col gap-24' : '',
          className
        )}
      >
        {children}
      </Component>
    </div>
  )
}