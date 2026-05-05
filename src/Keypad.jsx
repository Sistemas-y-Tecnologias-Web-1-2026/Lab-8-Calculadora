import Line1Buttons from './Line1Buttons'
import Line2Buttons from './Line2Buttons'
import Line3Buttons from './Line3Buttons'
import Line4Buttons from './Line4Buttons'
import Line5Buttons from './Line5Buttons'

export default function Keypad({ onNumber, onOp, onEquals, onClear, changeSign }) {
  return (
    <div>
      <Line1Buttons onOp={onOp} onClear={onClear} changeSign={changeSign} />
      <Line2Buttons onNumber={onNumber} onOp={onOp} />
      <Line3Buttons onNumber={onNumber} onOp={onOp} />
      <Line4Buttons onNumber={onNumber} onOp={onOp} />
      <Line5Buttons onNumber={onNumber} onEquals={onEquals} />
    </div>
  )
}