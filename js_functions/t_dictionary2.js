
/* Note that numerical keys generated from Object.entries are 
strings but through "set" are numbers
*/
const d = new Map(Object.entries({1:'a', 2:'b', 3:'c'}))
d.set(4, 'd')
d.set(5, 'e')

console.log(d)
console.log(d.get(1))
console.log(d.get(4))

/* MAP Object (ES6) has structure similar to Python dict
note that in JSON, the keys cannot be numbers
*/
const st = '{"1":"a", "2":"b", "3":"c", "4":"d", "5":"e"}'
const d1 = new Map(Object.entries(JSON.parse(st)))
console.log(d1)
console.log(d1.values())
console.log(d1.keys())
console.log(d1.entries())
console.log(d1.get(1))
console.log(d1.get('1'))

console.log(d1.has('1'))
d1.delete('1')
console.log(d1.has('1'))
console.log(d1)

const f1 = x => console.log(x)

d1.forEach(value => f1(value))

