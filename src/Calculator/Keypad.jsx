import Line1Buttons from './Keypad/Line1Buttons'
import Line2Buttons from './Keypad/Line2Buttons'
import Line3Buttons from './Keypad/Line3Buttons'
import Line4Buttons from './Keypad/Line4Buttons'
import Line5Buttons from './Keypad/Line5Buttons'

export default function Keypad({ onNumber, onOp, onEquals, onClear, changeSign }) {
  return (
    <div className="keypad">
      <Line1Buttons onOp={onOp} onClear={onClear} changeSign={changeSign} />
      <Line2Buttons onNumber={onNumber} onOp={onOp} />
      <Line3Buttons onNumber={onNumber} onOp={onOp} />
      <Line4Buttons onNumber={onNumber} onOp={onOp} />
      <Line5Buttons onNumber={onNumber} onEquals={onEquals} />
    </div>
  )
}