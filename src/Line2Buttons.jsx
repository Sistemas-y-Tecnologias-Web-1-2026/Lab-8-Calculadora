import Button from './Button'

export default function Line2Buttons({ onNumber, onOp }) {
  return (
    <div className="button-row">
      <Button label="7" className="btn" onClick={() => onNumber('7')} />
      <Button label="8" className="btn" onClick={() => onNumber('8')} />
      <Button label="9" className="btn" onClick={() => onNumber('9')} />
      <Button label="*" className="btn-operation" onClick={() => onOp('*')} />
    </div>
  )
}