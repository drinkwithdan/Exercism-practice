// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

// import { log } from "console";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((a, b) => a + b)
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const startIndex = (week - 1) * 7
  let birdNum = 0
  for (let i = startIndex; i < startIndex + 7; i++) {
    birdNum += birdsPerDay[i]
  }
  return birdNum
}
birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2)

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1
    }
  }
  return birdsPerDay
}
