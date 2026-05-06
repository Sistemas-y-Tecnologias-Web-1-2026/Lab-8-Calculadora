import Button from './Button'
import esfera4 from './Images/Esfera4.png'
import esfera5 from './Images/Esfera5.png'
import esfera6 from './Images/Esfera6.png'

export default function Line3Buttons({ onNumber, onOp }) {
  return (
    <div className="button-row">
      <Button label="4" imageSrc={esfera4} className="btn" onClick={() => onNumber('4')} />
      <Button label="5" imageSrc={esfera5} className="btn" onClick={() => onNumber('5')} />
      <Button label="6" imageSrc={esfera6} className="btn" onClick={() => onNumber('6')} />
      <Button label="-" className="btn-operation" onClick={() => onOp('-')} />
    </div>
  )
}