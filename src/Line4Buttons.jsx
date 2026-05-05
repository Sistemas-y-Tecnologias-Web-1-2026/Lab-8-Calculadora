import Button from "./Button"

export default function Line4Buttons({ onNumber, onOp }) {
  return (
    <div>
      <Button label="1" onClick={() => onNumber('1')} />
      <Button label="2" onClick={() => onNumber('2')} />
      <Button label="3" onClick={() => onNumber('3')} />
      <Button label="+" onClick={() => onOp('+')} />
    </div>
  )
}