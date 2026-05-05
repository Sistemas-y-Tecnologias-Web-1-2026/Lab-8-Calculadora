import Button from './Button'

export default function Line3Buttons({ onNumber, onOp }) {
  return (
    <div>
      <Button label="4" onClick={() => onNumber('4')} />
      <Button label="5" onClick={() => onNumber('5')} />
      <Button label="6" onClick={() => onNumber('6')} />
      <Button label="-" onClick={() => onOp('-')} />
    </div>
  )
}