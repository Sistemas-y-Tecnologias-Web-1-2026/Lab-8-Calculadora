import Button from './Button'
import image0 from './Images/Zero.png'
import type { CalculatorControls } from '../hooks/useCalculator'

export default function Line5Buttons({ inputNumber, inputDecimal, equals }: CalculatorControls) {
  return (
    <div className="button-row row-5">
      <Button label="0" imageSrc={image0} className="btn" onClick={() => inputNumber('0')} wide />
      <Button label="." className="btn-operation" onClick={inputDecimal} />
      <Button label="=" className="btn-equals" onClick={equals} />
    </div>
  )
}
