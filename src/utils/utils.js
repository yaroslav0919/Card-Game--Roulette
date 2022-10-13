import { numbers } from './numbers'

export const isNumberBlack = (number) => {
  const found = numbers.find(item => item.number == number)
  return found ? found.color === 'black' : undefined
}

export const isNumberRed = (number) => {
  const found = numbers.find(item => item.number == number)
  return found ? found.color === 'red' : undefined
}

export const isNumberGreen = (number) => {
  const found = numbers.find(item => item.number == number)
  return found ? found.color === 'green' : undefined
}

export const isNumberOdd = (number) => {
  if (number === 0) {
    return false
  }
  return !isNumberEven(number)
}

export const isNumberEven = (number) => {
  if (number === 0) {
    return false
  }
  return number % 2 !== 0
}
