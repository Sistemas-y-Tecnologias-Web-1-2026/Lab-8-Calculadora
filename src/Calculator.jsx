import Display from './Display'
import Keypad from './Keypad'
import { useCalculator } from './hooks/useCalculator'
import './Calculator.css'

export default function Calculator() {
  const { display, inputNumber, inputOperation, equals, clear, changeSign } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onNumber={inputNumber} onOp={inputOperation} onEquals={equals} onClear={clear} changeSign={changeSign} />
    </div>
  )
}