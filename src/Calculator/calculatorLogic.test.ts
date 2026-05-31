import { describe, expect, it } from 'vitest'
import { appendDecimal, appendDigit, calculate, formatResult, toggleSign } from './calculatorLogic'

describe('calculatorLogic', () => {
  it('concatenates digits and ignores digits after the ninth display character', () => {
    const nineDigits = '123456789'

    expect(appendDigit('12', '3', false)).toBe('123')
    expect(appendDigit(nineDigits, '0', false)).toBe(nineDigits)
  })

  it('counts the decimal point toward the limit and prevents repeated decimals', () => {
    expect(appendDecimal('12', false)).toBe('12.')
    expect(appendDecimal('12.3', false)).toBe('12.3')
    expect(appendDigit('12345678.', '9', false)).toBe('12345678.')
  })

  it('formats long division results to fit the nine character display', () => {
    expect(formatResult(calculate(22, 7, '/'))).toBe('3.1428571')
  })

  it('rejects negative and overflowing operation results with ERROR', () => {
    expect(formatResult(calculate(3, 8, '-'))).toBe('ERROR')
    expect(formatResult(calculate(999999999, 1, '+'))).toBe('ERROR')
  })

  it('supports modulo, division by zero errors, and manual sign toggling', () => {
    expect(formatResult(calculate(10, 4, '%'))).toBe('2')
    expect(formatResult(calculate(10, 0, '/'))).toBe('ERROR')
    expect(toggleSign('25')).toBe('-25')
    expect(toggleSign('-25')).toBe('25')
  })
})
