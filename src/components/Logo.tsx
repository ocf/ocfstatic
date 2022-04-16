import { useId } from "@reach/auto-id"

import "~/components/Logo.css"

export type LogoProps = {
  height?: number
  width?: number
  animated?: boolean
}

const Logo = ({ height, width, animated }: LogoProps) => {
  const id = useId("logo-gradient")

  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 630 285"
      className="logo"
    >
      <path
        fill={`url(#${id})`}
        className={animated ? "o" : ""}
        stroke="black"
        strokeWidth="2"
        d="M182.84,5h-100a7,7,0,0,0-6.34,5L64.4,55.17l-2.59,9.66L20.19,220.17l-2.59,9.66L5.45,275.17A3.65,3.65,0,0,0,9.16,280h140a6.88,6.88,0,0,0,6.29-4.83l12.15-45.34,2.59-9.66L211.81,64.83l2.59-9.66L226.5,10c.74-2.76-.9-5-3.66-5ZM120.19,220.17a6.89,6.89,0,0,1-6.3,4.83h-40a3.65,3.65,0,0,1-3.7-4.83L111.81,64.83a6.89,6.89,0,0,1,6.3-4.83h40a3.65,3.65,0,0,1,3.7,4.83Z"
      />
      <path
        fill={`url(#${id})`}
        className={animated ? "c" : ""}
        stroke="black"
        strokeWidth="2"
        d="M408.11,60a6.88,6.88,0,0,0,6.29-4.83L426.55,9.83A3.65,3.65,0,0,0,422.84,5h-140a6.88,6.88,0,0,0-6.29,4.83L264.4,55.17l-2.59,9.66L220.19,220.17l-2.59,9.66-12.15,45.34a3.65,3.65,0,0,0,3.71,4.83h140a6.88,6.88,0,0,0,6.29-4.83l12.15-45.34a3.65,3.65,0,0,0-3.71-4.83h-90a3.65,3.65,0,0,1-3.7-4.83L311.81,64.83a6.89,6.89,0,0,1,6.3-4.83Z"
      />
      <path
        fill={`url(#${id})`}
        className={animated ? "f" : ""}
        stroke="black"
        strokeWidth="2"
        d="M608.11,60a6.88,6.88,0,0,0,6.29-4.83L626.55,9.83A3.65,3.65,0,0,0,622.84,5h-140a6.88,6.88,0,0,0-6.29,4.83L464.4,55.17l-2.59,9.66-12.15,45.34-2.59,9.66-12.14,45.34-2.59,9.66L405.45,275.17a3.65,3.65,0,0,0,3.71,4.83h40a6.88,6.88,0,0,0,6.29-4.83l26.89-100.34a6.88,6.88,0,0,1,6.29-4.83h40a6.91,6.91,0,0,0,6.3-4.83l12.14-45.34a3.64,3.64,0,0,0-3.7-4.83h-40a3.65,3.65,0,0,1-3.71-4.83l12.15-45.34a6.89,6.89,0,0,1,6.3-4.83Z"
      />
      <defs>
        <linearGradient id={id} gradientTransform="rotate(315)">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="74%" stopColor="#414141" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
