/**
 * This program generates all possible 3x3 magic squares
 * and completes this using recursive functions.
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2023-1-8
 */

const MAGIC_NUM = 15
const NUM_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// https://stackoverflow.com/questions/840781/
// get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
/**
 * The findDuplicates function.
 *
 * <p>
 * Finds duplicate values in an array.
 * </p>
 *
 * @param {number[]} arr - the array to find duplicates in.
 * @returns {number[]} - the array of duplicate values.
 */
function findDuplicates(arr: number[]): number[] {
  const sortedArr = arr.slice().sort(function (a, b) {
    return a - b
  })

  // (we use slice to clone the array so the
  // original array won't be modified)
  const results = []
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] === sortedArr[i]) {
      results.push(sortedArr[i])
    }
  }
  return results
}

/**
 * The printSquare function.
 *
 * Formats the magic square.
 *
 * @param {number[]} arr - the magic square array.
 */
function printSquare(arr: number[]): void {
  console.log(
    `\n*****\n${arr[0]} ${arr[1]} ${arr[2]}
${arr[3]} ${arr[4]} ${arr[5]}\n${arr[6]} ${arr[7]} ${arr[8]}\n*****`
  )
}

/**
 * The isMagic function.
 *
 * Checks if the square is a magic square.
 *
 * @param {number[]} square - the square array to be checked.
 * @returns {boolean} - if it's a magic square or not.
 */
function isMagic(square: number[]): boolean {
  // Booleans
  const hasDuplicates = findDuplicates(square).length === 0
  const rows =
    square[0] + square[1] + square[2] === MAGIC_NUM &&
    square[3] + square[4] + square[5] === MAGIC_NUM &&
    square[6] + square[7] + square[8] === MAGIC_NUM

  const columns =
    square[0] + square[3] + square[6] === MAGIC_NUM &&
    square[1] + square[4] + square[7] === MAGIC_NUM &&
    square[2] + square[5] + square[8] === MAGIC_NUM

  const diagonals =
    square[0] + square[4] + square[8] === MAGIC_NUM &&
    square[2] + square[4] + square[6] === MAGIC_NUM

  return rows && columns && diagonals && hasDuplicates
}

/**
 * The magicSquare function.
 *
 * Prints all possible 3x3 magic squares.
 *
 *
 * @param {number[]} nums - the list of numbers (1-9).
 * @param {number[]} currentSquare - the current square to be filled up.
 * @param {number} index - the index of the numbers list.
 */
function magicSquare(
  nums: number[],
  currentSquare: number[],
  index: number
): void {
  // Checks if the square is filled and magic.
  if (index === 9 && isMagic(currentSquare)) {
    printSquare(currentSquare)
  } else {
    // Adds a number to the square if it's not full.
    if (index !== 9) {
      // Loops through each number from 1 to 9.
      for (let count = 0; count < 9; count++) {
        currentSquare[index] = nums[count]
        magicSquare(nums, currentSquare, index + 1)
      }
    }
  }
}

const arr: number[] = []

console.log('All Possible Magic Squares (3x3): ')
magicSquare(NUM_ARR, arr, 0)

console.log('\nDone.')
