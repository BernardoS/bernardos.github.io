import * as React from "react"
import variables from "data/variables.json";

export function Favicon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
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
        fontFamily={variables.titleFontFamily}
      >
        BS
      </text>
    </svg>
  )
}
