import Button from "./Button"

export default function Line4Buttons({ onNumber, onOp }) {
  return (
    <div className="button-row">
      <Button label="1" className="btn" onClick={() => onNumber('1')} />
      <Button label="2" className="btn" onClick={() => onNumber('2')} />
      <Button label="3" className="btn" onClick={() => onNumber('3')} />
      <Button label="+" className="btn-operation" onClick={() => onOp('+')} />
    </div>
  )
}