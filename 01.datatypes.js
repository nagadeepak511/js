console.log('1'+'2')

// converting numbers to strings
// es5 way
console.log(parseInt('1') + parseInt('2'))
console.log(parseFloat('1') + parseFloat('2'))
// es6 way
console.log(Number('1')+ Number('2'))

// some other examples
console.table({
    'parseInt("123a")':parseInt("123a"),
    'parseInt("123.a45")':parseInt("123.a45"),
    'parseInt("a123")':parseInt("a123"),
    'Number("123a")':Number("123a"),
    'Number("123.a45")':Number("123.a45"),
    'Number("a123")':Number("a123")
    
})

// typeof
var x;
console.table({
    '"1"': typeof('1'),
    '"asdf"': typeof('asdf'),
    '"true"': typeof('true'),
    'true': typeof(true),
    '12' : typeof(12),
    '12.5': typeof(12.5),
    '()=>{return(1)}': typeof(()=>{return(1)}),
    '{first:1}': typeof({first:1}),
    'x': typeof(x),
    'parseInt("a123")': typeof(parseInt("a123"))
})

// typeof Not a Number is Number
console.log(typeof(NaN))

// :)
console.log(typeof(typeof(NaN)))
console.log(typeof(undefined))
console.log(typeof(null))
console.log(typeof({}))

// parseFloat
console.table({
    'parseFloat("123a")':parseFloat("123a"),
    'parseFloat("123.a45")':parseFloat("123.a45"),
    'parseFloat("123.45a45")':parseFloat("123.45a45"),
    'parseFloat("a123")':parseInt("a123")
})