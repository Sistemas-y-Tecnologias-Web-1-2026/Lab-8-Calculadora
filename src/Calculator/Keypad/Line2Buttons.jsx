import Button from './Button'
import esfera7 from './Images/Esfera7.png'
import image8 from './Images/Liquir.webp'
import image9 from './Images/Bergamo.webp'

export default function Line2Buttons({ onNumber, onOp }) {
  return (
    <div className="button-row">
      <Button label="7" imageSrc={esfera7} className="btn" onClick={() => onNumber('7')} />
      <Button label="8" imageSrc={image8} className="btn" onClick={() => onNumber('8')} />
      <Button label="9" imageSrc={image9} className="btn" onClick={() => onNumber('9')} />
      <Button label="*" className="btn-operation" onClick={() => onOp('*')} />
    </div>
  )
}