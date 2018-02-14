// import * as R from 'ramda'

import { union, uniq } from 'ramda'

import sum, { sub, mult, div as dividir } from './utils'

import { div as div2 } from './utils-all'

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]

const arr3 = union(arr1, arr2)

const arr4 = uniq(arr1, arr2)

console.log(arr3)

console.log(arr4)

console.log(sum(3, 2))

console.log(sub(3, 2))

console.log(mult(3, 2))

console.log(div2(4, 2))