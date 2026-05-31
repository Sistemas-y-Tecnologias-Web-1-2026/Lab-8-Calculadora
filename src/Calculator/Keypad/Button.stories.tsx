import Button from './Button'
import esfera1 from './Images/Esfera1.png'

const noop = () => undefined

export default {
  title: 'Calculator/Button',
  component: Button,
}

export const NumberOrb = {
  args: {
    label: '1',
    imageSrc: esfera1,
    className: 'btn',
    onClick: noop,
  },
}

export const Operation = {
  args: {
    label: '+',
    className: 'btn-operation',
    onClick: noop,
  },
}

export const Equals = {
  args: {
    label: '=',
    className: 'btn-equals',
    onClick: noop,
  },
}
