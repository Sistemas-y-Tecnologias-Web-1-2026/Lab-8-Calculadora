import Display from './Calculator/Display'
import Keypad from './Calculator/Keypad'
import { useCalculator } from './Calculator/hooks/useCalculator'
import githubLogo from './github.webp'
import './Calculator.css'

export default function Calculator() {
  const calculator = useCalculator()

  return (
    <div className="calculator-shell">
      <div className="calculator" aria-label="Calculadora con teclado de botones">
        <Display value={calculator.display} />
        <Keypad {...calculator} />
      </div>
      <a
        className="project-link"
        href="https://github.com/Sistemas-y-Tecnologias-Web-1-2026/Lab-8-Calculadora"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Abrir el repositorio del proyecto en GitHub"
      >
        <img className="project-link__icon" src={githubLogo} alt="" aria-hidden="true" />
      </a>
    </div>
  )
}
