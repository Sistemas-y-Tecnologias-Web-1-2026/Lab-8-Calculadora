import Button from './Button'

export default function Line2Buttons({ onNumber, onOp }) {
  return (
    <div>
      <Button label="7" onClick={() => onNumber('7')} />
      <Button label="8" onClick={() => onNumber('8')} />
      <Button label="9" onClick={() => onNumber('9')} />
      <Button label="*" onClick={() => onOp('*')} />
    </div>
  )
}