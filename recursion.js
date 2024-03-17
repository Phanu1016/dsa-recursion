/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index == nums.length) return 1
  return nums[index] * product(nums, index + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestWord = 0) {
  if (index == words.length) return longestWord
  longestWord = Math.max(words[index].length, longestWord)
  return longest(words, index + 1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, everyOtherString = "") {
  if (index >= str.length) return everyOtherString
  everyOtherString += str[index]
  return everyOther(str, index + 2, everyOtherString)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  let left = index
  let right = str.length - index - 1
  if (left >= right) return true
  if (str[left] != str[right]) return false
  return isPalindrome(str, index + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index == arr.length) return -1
  if (arr[index] == val) return index
  return findIndex(arr, val, index + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, reversedString = "") {
  if (reversedString.length === str.length) return reversedString
  reversedString += str[str.length - 1 - index]
  return revString(str, index + 1, reversedString)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = []
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArray.push(obj[key])
    if (typeof obj[key] === "object") stringArray.push(...gatherStrings(obj[key]))
  }
  return stringArray
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, first = 0, last = arr.length) {
  if (first > last) return -1

  let middle = Math.floor((first + last) / 2)

  if (arr[middle] === val) return middle

  if (arr[middle] > val) return binarySearch(arr, val, first, middle - 1)

  return binarySearch(arr, val, middle + 1, last);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
