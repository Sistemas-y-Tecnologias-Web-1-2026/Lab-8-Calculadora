import Display from './Calculator/Display'
import Keypad from './Calculator/Keypad'
import { useCalculator } from './Calculator/hooks/useCalculator'
import './Calculator.css'

export default function Calculator() {
  const calculator = useCalculator()

  return (
    <main className="app-shell">
      <p className="eyebrow">Lab 8 React</p>
      <section className="calculator" aria-label="Calculadora con teclado de botones">
        <Display value={calculator.display} />
        <Keypad {...calculator} />
      </section>
    </main>
  )
}
