import Button from './Button'

export default function Numbers({ onNumber }) {
  return (
    <div>
      {[1,2,3,4,5,6,7,8,9,0].map(n => (
        <Button key={n} label={n} onClick={() => onNumber(String(n))} />
      ))}
    </div>
  )
}