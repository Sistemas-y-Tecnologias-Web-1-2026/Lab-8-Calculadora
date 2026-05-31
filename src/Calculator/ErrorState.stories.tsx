import Display from './Display'
import Keypad from './Keypad'
import type { CalculatorControls } from './hooks/useCalculator'

const blockedControls: CalculatorControls = {
  inputNumber: () => undefined,
  inputDecimal: () => undefined,
  inputOperation: () => undefined,
  equals: () => undefined,
  clear: () => undefined,
  changeSign: () => undefined,
}

export default {
  title: 'Calculator/Estado ERROR',
}

export const OverflowError = {
  render: () => (
    <section className="calculator" aria-label="Calculadora en estado error">
      <Display value="ERROR" />
      <Keypad {...blockedControls} />
    </section>
  ),
}
