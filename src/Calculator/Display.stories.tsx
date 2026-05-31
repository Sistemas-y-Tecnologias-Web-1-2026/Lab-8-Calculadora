import Display from './Display'

export default {
  title: 'Calculator/Display',
  component: Display,
}

export const Empty = {
  args: {
    value: '0',
  },
}

export const LongDecimal = {
  args: {
    value: '3.1428571',
  },
}

export const ErrorState = {
  name: 'Estado ERROR',
  args: {
    value: 'ERROR',
  },
}
