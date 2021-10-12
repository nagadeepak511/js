// declaration
var a = "sandeep"
a = 'sandeep'
a = `sandeep`

// concatenation
console.table({
    '"1"+2':"1"+2,
    '"Hii "+"sandeep"':"Hii "+"sandeep"
})

// equality - case sensitive
console.log('"Sandeep" == "sandeep"',"Sandeep" == "sandeep")

// so to compare them we have to convert them to lowercase or uppercase
var a = "Sandeep", b = "sandeep"
console.table({
    'a':a,
    'b':b,
    'a==b':a==b,
    'a.toUpperCase()==b.toUpperCase()':a.toUpperCase()==b.toUpperCase(),
    'a.toLowerCase()==b.toLowerCase()':a.toLowerCase()==b.toLowerCase()
})

// slicing
console.log('a',a)

console.table({
    'a.slice(0,-1)':a.slice(0,-1),
    'a.slice(0)':a.slice(0),
    'a.slice(2,-1)':a.slice(2,-1),
    'a.slice(2)':a.slice(2),
    'a.slice(1,1)':a.slice(1,1)
})

// trim - removes extra whitespaces at the end and beginning of the string
var a = " sandeep . "
console.table({
    'a':a,
    'a.trim()': a.trim()
})

// split
var a = "sandeep,raghava,aditya,uttam,pardhiv,pratheek"
console.table({
    'a':a,
    'a.split(",")':a.split(",")
})

var a = "sandeep,", b=",", c="sandeep"
console.table({
    'a.split(",")':a.split(','),
    'b.split(",")':b.split(','),
    'c.split(",")':c.split(",")
})

// tostring - opposite to split
var a = ["sandeep","raghava","aditya","pardhiv","pratheek"]
console.log(a,a.toString())

// replace - replace first instance with given substring
var a = "sandeep"
console.log(a.replace('san','sun'))
console.log(a.replace('sandeep','s'))

// to replace globally
a = "sadeepsandeep"
console.log(a.replace(/ee/g,'EE'))

// length
console.log('123'.length)
console.log(''.length)

// charAt
var a = "sadeepsandeep"
console.table({
    'a[0]':a[0],
    'a.charAt(1)':a.charAt(1),
    'a.charAt(-1)':a.charAt(-1),
    'a.charAt(a.length)':a.charAt(a.length)
})