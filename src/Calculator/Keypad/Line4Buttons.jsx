import Button from "./Button"
import esfera1 from "./Images/Esfera1.png"
import esfera2 from "./Images/Esfera2.png"
import esfera3 from "./Images/Esfera3.png"

export default function Line4Buttons({ onNumber, onOp }) {
  return (
    <div className="button-row">
      <Button label="1" imageSrc={esfera1} className="btn" onClick={() => onNumber('1')} />
      <Button label="2" imageSrc={esfera2} className="btn" onClick={() => onNumber('2')} />
      <Button label="3" imageSrc={esfera3} className="btn" onClick={() => onNumber('3')} />
      <Button label="+" className="btn-operation" onClick={() => onOp('+')} />
    </div>
  )
}