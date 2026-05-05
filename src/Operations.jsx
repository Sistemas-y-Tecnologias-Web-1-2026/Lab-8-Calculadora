import Button from './Button'

export default function Operations({ onOp, onEquals, onClear }) {
  return (
    <div>
      <Button label="+" onClick={() => onOp('+')} />
      <Button label="-" onClick={() => onOp('-')} />
      <Button label="*" onClick={() => onOp('*')} />
      <Button label="/" onClick={() => onOp('/')} />
      <Button label="MOD" onClick={() => onOp('%')} />
      <Button label="=" onClick={onEquals} />
      <Button label="C" onClick={onClear} />
    </div>
  )
}