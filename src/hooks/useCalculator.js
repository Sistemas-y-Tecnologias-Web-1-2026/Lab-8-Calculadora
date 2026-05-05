import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState(null)
  const [operation, setOperation] = useState(null)
  const [reset, setReset] = useState(false)

  const inputNumber = (num) => {
    if (reset) {
      setDisplay(num)
      setReset(false)
      return
    }

    if (display.length >= 9) return

    setDisplay(display === '0' ? num : display + num)
  }

  const inputOperation = (op) => {
    setPrev(Number(display))
    setOperation(op)
    setReset(true)
  }

  const equals = () => {
    if (!operation || prev === null) return

    let result

    if (operation === '+') result = prev + Number(display)
    if (operation === '-') result = prev - Number(display)
    if (operation === '*') result = prev * Number(display)
    if (operation === '/') {
      if (Number(display) === 0) {
        setDisplay('ERROR')
        return
      }
      result = prev / Number(display)
    }
    if (operation === '%') {
      if (Number(display) === 0) {
        setDisplay('ERROR')
        return
      }
      result = prev % Number(display)
    }

    if (operation === 'C') {
      setDisplay('0')
      setPrev(null)
      setOperation(null)
      return
    }

    if (result < 0 || result > 999999999) {
      setDisplay('ERROR')
      return
    }

    setDisplay(String(result).slice(0, 9))
    setPrev(null)
    setOperation(null)
  }

  return { display, inputNumber, inputOperation, equals }
}