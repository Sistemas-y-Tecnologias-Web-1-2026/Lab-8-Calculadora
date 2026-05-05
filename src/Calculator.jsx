import Display from './Display'
import Numbers from './Numbers'
import Operations from './Operations'
import { useCalculator } from '../hooks/useCalculator'

export default function Calculator() {
  const { display, inputNumber, inputOperation, equals } = useCalculator()

  return (
    <div>
      <Display value={display} />
      <Numbers onNumber={inputNumber} />
      <Operations onOp={inputOperation} onEquals={equals} />
    </div>
  )
}