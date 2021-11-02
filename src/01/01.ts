
export const splitIntoWords = (s: string) => {
  const str = s.toLowerCase().trim().split(' ')
  const filteredStr = str.filter(w => w !== '').map(w => w
    .replace("!", '')
    .replace(".", '')
    .replace(",", ''))
  return filteredStr
}

export const sum = (a: number, b: number) => {
  return a + b
}

export const mult = (a: number, b: number) => {
  return a * b
}