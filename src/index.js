module.exports = function reverse (n) {
   let a = Math.abs(n);
   let arr = (Array.from(a.toString(), Number)).reverse().join('');
   return Number(arr)
}
