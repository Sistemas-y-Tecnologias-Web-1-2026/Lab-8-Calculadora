export type Operation = '+' | '-' | '*' | '/' | '%'

export const ERROR_DISPLAY = 'ERROR'
export const MAX_DISPLAY_LENGTH = 9
export const MAX_VALUE = 999999999

export const appendDigit = (display: string, digit: string, reset: boolean) => {
  if (display === ERROR_DISPLAY) return display
  if (reset) return digit
  if (display.length >= MAX_DISPLAY_LENGTH) return display
  if (display === '0') return digit

  return `${display}${digit}`
}

export const appendDecimal = (display: string, reset: boolean) => {
  if (display === ERROR_DISPLAY) return display
  if (reset) return '0.'
  if (display.includes('.') || display.length >= MAX_DISPLAY_LENGTH) return display

  return `${display}.`
}

export const toggleSign = (display: string) => {
  if (display === ERROR_DISPLAY || display === '0') return display
  if (display.startsWith('-')) return display.slice(1)
  if (display.length >= MAX_DISPLAY_LENGTH) return display

  return `-${display}`
}

export const calculate = (left: number, right: number, operation: Operation) => {
  if (operation === '+') return left + right
  if (operation === '-') return left - right
  if (operation === '*') return left * right
  if (operation === '/') return right === 0 ? ERROR_DISPLAY : left / right

  return right === 0 ? ERROR_DISPLAY : left % right
}

export const formatResult = (result: number | typeof ERROR_DISPLAY) => {
  if (result === ERROR_DISPLAY || !Number.isFinite(result)) return ERROR_DISPLAY
  if (result < 0 || result > MAX_VALUE) return ERROR_DISPLAY

  const raw = Number.isInteger(result)
    ? String(result)
    : result.toFixed(MAX_DISPLAY_LENGTH).replace(/0+$/, '').replace(/\.$/, '')

  return raw.length <= MAX_DISPLAY_LENGTH ? raw : raw.slice(0, MAX_DISPLAY_LENGTH).replace(/\.$/, '')
}
