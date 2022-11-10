const a = ['a','b','c','d', 'e']

const f1 = (x, y)=> {return x+y}
// console.log(f1('a', 'b'))
console.log(a.reduce((a, b) => f1(a, b)))


