// named function
function add(a,b){
    return Number(a)+Number(b)
}

console.log(add(1,2))

// arrow functions and anonymous function

var add = function(a,b){
    return a+b
}

// es6
var add = (a,b)=>{return a+b}

// can function return more than one datatype -> yes
var demo = (i)=>{
    return i==0?0:[]
}

console.log(demo(0))
console.log(demo(1))

// bydefault functions return undefined
var demo = ()=>{}
console.log(demo())

var demo = ()=>{return}
console.log(demo())