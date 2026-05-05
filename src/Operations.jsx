import Button from './Button'

export default function Operations({ onOp, onEquals }) {
  return (
    <div>
      <Button label="+" onClick={() => onOp('+')} />
      <Button label="-" onClick={() => onOp('-')} />
      <Button label="*" onClick={() => onOp('*')} />
      <Button label="=" onClick={onEquals} />
    </div>
  )
}