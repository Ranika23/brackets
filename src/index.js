module.exports = function check(str, bracketsConfig) {
  let brackets = {
    ')':'(',
    ']':'[',
    '}':'{',
    '|':'|',
    '2':'1',
    '4':'3',
    '6':'5',
    '7':'7',
    '8':'8'
}
  let arr = []
  arr.push(...str)
  let i = 0
  let count= 0
  while (arr.length > 0) {
         let current = arr[i]
         let second = arr[i + 1]
         if (current != undefined && second != undefined) {
         if (current == brackets[second]) {
            arr.splice(i, 2)
            i = 0
         }
         else {
            i++
         }
         count += 1
         }
         else { break}
     }
  return arr.length == 0
}
