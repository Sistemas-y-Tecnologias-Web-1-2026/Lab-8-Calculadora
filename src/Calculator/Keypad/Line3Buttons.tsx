import Button from './Button'
import esfera4 from './Images/Esfera4.png'
import esfera5 from './Images/Esfera5.png'
import esfera6 from './Images/Esfera6.png'
import type { CalculatorControls } from '../hooks/useCalculator'

export default function Line3Buttons({ inputNumber, inputOperation }: CalculatorControls) {
  return (
    <div className="button-row">
      <Button label="4" imageSrc={esfera4} className="btn" onClick={() => inputNumber('4')} />
      <Button label="5" imageSrc={esfera5} className="btn" onClick={() => inputNumber('5')} />
      <Button label="6" imageSrc={esfera6} className="btn" onClick={() => inputNumber('6')} />
      <Button label="-" className="btn-operation" onClick={() => inputOperation('-')} />
    </div>
  )
}
