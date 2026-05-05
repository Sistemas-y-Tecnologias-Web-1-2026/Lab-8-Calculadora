import Button from './Button'

export default function Line5Buttons({ onNumber, onEquals }) {
  return (
    <div>
      <Button label="0" onClick={() => onNumber('0')} />
      <Button label="." onClick={() => {}} />
      <Button label="=" onClick={onEquals} />
    </div>
  )
}