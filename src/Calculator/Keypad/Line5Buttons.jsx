import Button from './Button'

export default function Line5Buttons({ onNumber, onEquals }) {
  return (
    <div className="button-row row-5">
      <Button label="0" className="btn" onClick={() => onNumber('0')} />
      <Button label="." className="btn" onClick={() => {}} />
      <Button label="=" className="btn-equals" onClick={onEquals} />
    </div>
  )
}