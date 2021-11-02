import {mult, splitIntoWords, sum} from "./01";
let a: number
let b: number
let c: number

beforeEach(() => {
 a = 1
 b = 2
 c = 3
})


test('string should be splitted', () => {
 let str = 'hello i  love   u!'
  let result = splitIntoWords(str)

  expect(result.length).toBe(4)
  expect(result[0]).toBe('hello')
  expect(result[1]).toBe('i')
  expect(result[2]).toBe('love')
  expect(result[3]).toBe('u')
})

test('sum numbers function', () => {
 b = 3
 c = 6

 let result1 = sum(a, b)
 let result2 = sum(a, c)
 let result3 = sum(b, c)

 expect(result1).toBe(4)
 expect(result2).toBe(7)
 expect(result3).toBe(9)

})

test('mult numbers function', () => {
 b = 3
 c = 6

 let result1 = mult(a, b)
 let result2 = mult(a, c)
 let result3 = mult(b, c)

 expect(result1).toBe(3)
 expect(result2).toBe(6)
 expect(result3).toBe(18)
})