import * as DOM from 'DOM'

export default (
  <svg viewBox="0 0 100 100">
    <rect
      x={0}
      y={0}
      width={100}
      height={100}
      id="background"
      stroke-width={5}
      stroke="currentColor"
      fill="none"
    />
    <text
      x={95}
      y={90}
      id="text"
      font-size={50}
      text-anchor="end"
      font-weight="bold"
      fill="currentColor"
      font-family="NeutraText-Bold, Neutra Text"
    >
      BS
    </text>
  </svg>
)
