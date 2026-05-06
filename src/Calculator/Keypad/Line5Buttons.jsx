import Button from './Button'
import image0 from './Images/Zero.png'

export default function Line5Buttons({ onNumber, onEquals }) {
  return (
    <div className="button-row row-5">
      <Button label="0" imageSrc={image0} className="btn" onClick={() => onNumber('0')} />
      <Button label="." className="btn-operation" onClick={() => {}} />
      <Button label="=" className="btn-equals" onClick={onEquals} />
    </div>
  )
}