import Display from './Display'
import Keypad from './Keypad'
import { useCalculator } from './hooks/useCalculator'

export default function Calculator() {
  const { display, inputNumber, inputOperation, equals, clear } = useCalculator()

  return (
    <div>
      <Display value={display} />
      <Keypad onNumber={inputNumber} onOp={inputOperation} onEquals={equals} onClear={clear} />
    </div>
  )
}