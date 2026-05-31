import Button from './Button'
import type { CalculatorControls } from '../hooks/useCalculator'

export default function Line1Buttons({ inputOperation, clear, changeSign }: CalculatorControls) {
  return (
    <div className="button-row">
      <Button label="C" className="btn-special" onClick={clear} />
      <Button label="+/-" className="btn-operation" onClick={changeSign} />
      <Button label="%" className="btn-operation" onClick={() => inputOperation('%')} />
      <Button label="/" className="btn-operation" onClick={() => inputOperation('/')} />
    </div>
  )
}
