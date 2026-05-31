import Line1Buttons from './Keypad/Line1Buttons'
import Line2Buttons from './Keypad/Line2Buttons'
import Line3Buttons from './Keypad/Line3Buttons'
import Line4Buttons from './Keypad/Line4Buttons'
import Line5Buttons from './Keypad/Line5Buttons'
import type { CalculatorControls } from './hooks/useCalculator'

export default function Keypad(props: CalculatorControls) {
  return (
    <div className="keypad" aria-label="Teclado numérico">
      <Line1Buttons {...props} />
      <Line2Buttons {...props} />
      <Line3Buttons {...props} />
      <Line4Buttons {...props} />
      <Line5Buttons {...props} />
    </div>
  )
}
