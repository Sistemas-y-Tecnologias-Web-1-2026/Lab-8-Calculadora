import Button from './Button'

export default function Line1Buttons({ onOp, onClear, changeSign }) {
  return (
    <div className="button-row">
      <Button label="C" className="btn-special" onClick={onClear} />
      <Button label="+/-" className="btn-operation" onClick={changeSign} />
      <Button label="%" className="btn-operation" onClick={() => onOp('%')} />
      <Button label="/" className="btn-operation" onClick={() => onOp('/')} />
    </div> 
  )
}