interface FadeCircleProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}


export function FadeCircle(position: FadeCircleProps) {

  let { 
    top = 'auto',
    right = 'auto',
    bottom = 'auto',
    left = 'auto' } = position

  return (
    <div
      className={`aspect-square w-full max-w-[350px] rounded-full absolute 
    bg-secondary filter blur-[200px] opacity-50
     top-[${top}] right-[${right}] bottom-[${bottom}] left-[${left}] -z-50 `}
    ></div>

  )
}
