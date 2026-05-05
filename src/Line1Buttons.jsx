import Button from './Button'

export default function Line1Buttons({ onOp, onClear, changeSign }) {
  return (
    <div>
      <Button label="C" onClick={onClear} />
      <Button label="+/-" onClick={changeSign} />
      <Button label="%" onClick={() => onOp('%')} />
      <Button label="/" onClick={() => onOp('/')} />
    </div> 
  )
}