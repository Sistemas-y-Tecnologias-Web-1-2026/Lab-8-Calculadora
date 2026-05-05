import Button from './Button'

export default function Line3Buttons({ onNumber, onOp }) {
  return (
    <div className="button-row">
      <Button label="4" className="btn" onClick={() => onNumber('4')} />
      <Button label="5" className="btn" onClick={() => onNumber('5')} />
      <Button label="6" className="btn" onClick={() => onNumber('6')} />
      <Button label="-" className="btn-operation" onClick={() => onOp('-')} />
    </div>
  )
}