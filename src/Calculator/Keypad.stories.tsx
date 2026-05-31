import Keypad from './Keypad'
import type { CalculatorControls } from './hooks/useCalculator'

const controls: CalculatorControls = {
  inputNumber: (digit) => {
    void digit
  },
  inputDecimal: () => undefined,
  inputOperation: (operation) => {
    void operation
  },
  equals: () => undefined,
  clear: () => undefined,
  changeSign: () => undefined,
}

export default {
  title: 'Calculator/Keyboard',
  component: Keypad,
}

export const DefaultKeyboard = {
  args: controls,
}

export const CompactPreview = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <Keypad {...controls} />
    </div>
  ),
}
