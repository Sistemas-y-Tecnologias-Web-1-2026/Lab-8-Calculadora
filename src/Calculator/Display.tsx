type DisplayProps = {
  value: string
}

export default function Display({ value }: DisplayProps) {
  return (
    <output className="display" aria-label="Pantalla de la calculadora" aria-live="polite">
      <span>{value}</span>
    </output>
  )
}
