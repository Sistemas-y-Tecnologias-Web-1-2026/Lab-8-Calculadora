import Button from './Button'
import esfera1 from './Images/Esfera1.png'
import esfera2 from './Images/Esfera2.png'
import esfera3 from './Images/Esfera3.png'
import type { CalculatorControls } from '../hooks/useCalculator'

export default function Line4Buttons({ inputNumber, inputOperation }: CalculatorControls) {
  return (
    <div className="button-row">
      <Button label="1" imageSrc={esfera1} className="btn" onClick={() => inputNumber('1')} />
      <Button label="2" imageSrc={esfera2} className="btn" onClick={() => inputNumber('2')} />
      <Button label="3" imageSrc={esfera3} className="btn" onClick={() => inputNumber('3')} />
      <Button label="+" className="btn-operation" onClick={() => inputOperation('+')} />
    </div>
  )
}
