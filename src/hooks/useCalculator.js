import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState(null)
  const [operation, setOperation] = useState(null)
  const [reset, setReset] = useState(false)

  const calculate = (a, b, op) => {
    if (op === '+') return a + b
    if (op === '-') return a - b
    if (op === '*') return a * b
    if (op === '/') return b === 0 ? 'ERROR' : a / b
    if (op === '%') return b === 0 ? 'ERROR' : a % b
  }

  const handleResult = (result) => {
    if (result === 'ERROR' || result < 0 || result > 999999999) {
      setDisplay('ERROR')
      return false
    }

    setDisplay(String(result).slice(0, 9))
    return true
  }

  const inputNumber = (num) => {
    if (display === 'ERROR') return

    if (reset) {
      setDisplay(num)
      setReset(false)
      return
    }

    if (display.length >= 9) return

    setDisplay(display === '0' ? num : display + num)
  }

  const inputOperation = (op) => {
    if (display === 'ERROR') return

    const current = Number(display)

    // 🔥 operaciones encadenadas
    if (operation && prev !== null && !reset) {
      const result = calculate(prev, current, operation)

      const ok = handleResult(result)
      if (!ok) return

      setPrev(result)
    } else {
      setPrev(current)
    }

    setOperation(op)
    setReset(true)
  }

  const equals = () => {
    if (!operation || prev === null) return

    const current = Number(display)
    const result = calculate(prev, current, operation)

    const ok = handleResult(result)
    if (!ok) return

    setPrev(null)
    setOperation(null)
    setReset(true) // 🔥 importante
  }

  const clear = () => {
    setDisplay('0')
    setPrev(null)
    setOperation(null)
    setReset(false)
  }

  const changeSign = () => {
    if (display === 'ERROR') return

    // si ya es negativo → quitar el signo
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
      return
    }

    // agregar signo si hay espacio
    if (display.length < 9) {
      setDisplay('-' + display)
    }
  }

  return {
    display,
    inputNumber,
    inputOperation,
    equals,
    clear,
    changeSign
  }
}