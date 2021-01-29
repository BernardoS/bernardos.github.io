import * as React from "react"

export function Favicon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        strokeWidth={5}
        stroke="currentColor"
        fill="none"
        d="M0 0h100v100H0z"
      />
      <text
        x={95}
        y={90}
        fontSize={50}
        textAnchor="end"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="NeutraText-Bold, Neutra Text"
      >
        {"BS"}
      </text>
    </svg>
  )
}
