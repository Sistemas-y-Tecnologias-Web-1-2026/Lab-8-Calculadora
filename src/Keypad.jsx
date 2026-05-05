import Line1Buttons from './Line1Buttons'
import Line2Buttons from './Line2Buttons'
import Line3Buttons from './Line3Buttons'
import Line4Buttons from './Line4Buttons'
import Line5Buttons from './Line5Buttons'

export default function Keypad() {
  return (
    <div>
        <Line1Buttons onOp={inputOperation} onClear={clear} />
        <Line2Buttons onNumber={inputNumber} onOp={inputOperation} />
        <Line3Buttons onNumber={inputNumber} onOp={inputOperation} />
        <Line4Buttons onNumber={inputNumber} onOp={inputOperation} />
        <Line5Buttons onNumber={inputNumber} onEquals={equals} />
    </div>
  )
}