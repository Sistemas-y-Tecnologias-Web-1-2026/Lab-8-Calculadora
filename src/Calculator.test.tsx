import './setupTests'
import { afterEach, describe, expect, it } from 'vitest'
import Calculator from './Calculator'

const { cleanup, fireEvent, render, screen } = await import('@testing-library/react')

afterEach(cleanup)

const press = (label: string) => {
  fireEvent.click(screen.getByRole('button', { name: label }))
}

const display = () => screen.getByLabelText(/pantalla/i)

describe('Calculator', () => {
  it('builds numbers only from calculator buttons and caps input at nine characters', () => {
    render(<Calculator />)
    '1234567890'.split('').forEach(press)

    expect(display()).toHaveTextContent('123456789')
  })

  it('clears the display for the next operand and resolves addition on equals', () => {
    render(<Calculator />)
    press('1')
    press('2')
    press('+')
    press('3')

    expect(display()).toHaveTextContent('3')

    press('=')
    expect(display()).toHaveTextContent('15')
  })

  it('shows chained operation results when a new operation is pressed', () => {
    render(<Calculator />)
    press('2')
    press('+')
    press('3')
    press('*')

    expect(display()).toHaveTextContent('5')

    press('4')
    press('=')
    expect(display()).toHaveTextContent('20')
  })

  it('shows ERROR for subtraction results below zero', () => {
    render(<Calculator />)
    press('3')
    press('-')
    press('8')
    press('=')

    expect(display()).toHaveTextContent('ERROR')
  })

  it('shows ERROR for results above 999999999', () => {
    render(<Calculator />)
    '999999999'.split('').forEach(press)
    press('+')
    press('1')
    press('=')

    expect(display()).toHaveTextContent('ERROR')
  })

  it('supports decimals without allowing more than one decimal point', () => {
    render(<Calculator />)
    press('2')
    press('.')
    press('.')
    press('5')
    press('*')
    press('4')
    press('=')

    expect(display()).toHaveTextContent('10')
  })

  it('truncates long division results to the display limit', () => {
    render(<Calculator />)
    press('2')
    press('2')
    press('/')
    press('7')
    press('=')

    expect(display()).toHaveTextContent('3.1428571')
  })

  it('supports modulo and manual sign changes', () => {
    render(<Calculator />)
    press('5')
    press('+/-')

    expect(display()).toHaveTextContent('-5')

    press('+')
    press('8')
    press('=')
    expect(display()).toHaveTextContent('3')

    press('C')
    press('9')
    press('%')
    press('4')
    press('=')
    expect(display()).toHaveTextContent('1')
  })
})
