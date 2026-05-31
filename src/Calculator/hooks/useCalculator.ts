import { useState } from 'react'
import { appendDecimal, appendDigit, calculate, ERROR_DISPLAY, formatResult, toggleSign } from '../calculatorLogic'
import type { Operation } from '../calculatorLogic'

export type CalculatorControls = {
  inputNumber: (digit: string) => void
  inputDecimal: () => void
  inputOperation: (operation: Operation) => void
  equals: () => void
  clear: () => void
  changeSign: () => void
}

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [previous, setPrevious] = useState<number | null>(null)
  const [operation, setOperation] = useState<Operation | null>(null)
  const [reset, setReset] = useState(false)

  const commitResult = (result: number | typeof ERROR_DISPLAY) => {
    const nextDisplay = formatResult(result)

    setDisplay(nextDisplay)
    return nextDisplay
  }

  const inputNumber = (digit: string) => {
    setDisplay((current) => appendDigit(current, digit, reset))
    setReset(false)
  }

  const inputDecimal = () => {
    setDisplay((current) => appendDecimal(current, reset))
    setReset(false)
  }

  const inputOperation = (nextOperation: Operation) => {
    if (display === ERROR_DISPLAY) return

    if (operation && previous !== null && !reset) {
      const nextDisplay = commitResult(calculate(previous, Number(display), operation))

      if (nextDisplay === ERROR_DISPLAY) return
      setPrevious(Number(nextDisplay))
    } else {
      setPrevious(Number(display))
    }

    setOperation(nextOperation)
    setReset(true)
  }

  const equals = () => {
    if (!operation || previous === null || display === ERROR_DISPLAY) return

    commitResult(calculate(previous, Number(display), operation))
    setPrevious(null)
    setOperation(null)
    setReset(true)
  }

  return {
    display,
    inputNumber,
    inputDecimal,
    inputOperation,
    equals,
    clear: () => {
      setDisplay('0')
      setPrevious(null)
      setOperation(null)
      setReset(false)
    },
    changeSign: () => setDisplay(toggleSign),
  }
}
