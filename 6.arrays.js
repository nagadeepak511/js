// homo and hetero geneous arrays
var a = [1,2,2,4]
var b = [1,2,2,'4',{},()=>{return 1}]

// length -> same as that shown in string
console.log(a.length)

// Index of -> returns index of first instance otherwise -1
console.log(a.indexOf(2))
console.log(a.indexOf('2'))

// push -> add one element at the ending 
a.push(9)
console.log(a)

// pop -> remove last element
a.pop()
console.log(a)
a.pop()
console.log(a)

// unshift -> add element at the startin
a.unshift(4)
console.log(a)

// shift -> remove first element
a.shift()
console.log(a)

// slice -> similar to that discussed in strings
console.log(a)
console.log(a.slice(1))
console.log(a.slice(1,-1))

// splice -> arguments => start, deletecount, array
var a = ["one","eight","nine", "four"]
a.splice(1,2,"two", "three")
console.log(a)

var a = ["one", "four"]
a.splice(1,0,"two", "three")
console.log(a)

// +
var a = [1,2,3], b=[4,5,6]
console.log(a+b)

// concatenation
console.log(a.concat(b))
console.log(a,b)

// sort -> sorts the given array in lexicographical order
var a = [6,1,3,4,5,2]
console.log(a, a.sort(), a)     // note that arrays are passed by reference

var a = ["a","d","c"]
a.sort()
console.log(a)

var a = ["0a","d","c",1,8]
a.sort()
console.log(a)

const numbers = [100, 25, 1, 5 ];
const sorted = numbers.slice().sort(); // returns a new sorted array
console.log(numbers); // [100, 25, 1, 5 ]
console.log(sorted); // [1, 100, 25, 5]

// reverse ->reverses given array
var a= [1,2,3,4,5,6]
console.log(a)
console.log(a.reverse())
console.log(a)

// Array.isArray -> returns true if argument is array else false
var a = 10, b=[1,2], c="123"
console.log(Array.isArray(a))
console.log(Array.isArray(b))
console.log(Array.isArray(c))

console.log(typeof(b))

// filter -> filters out the elements of the array
var cities = ["amsterdam", 'manali', "goa", 'bangalore', 'mumbai']
console.log(cities.filter((city)=>{return city == 'mumbai'}))
console.log(cities.filter((city)=>{return city == 'Mumbai'}))

// map -> maps each and every element of array
var cities = ["amsterdam", 'manali', "goa", 'bangalore', 'mumbai']
cities.map((city)=>{
    console.log(city)
})