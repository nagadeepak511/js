// modulo
console.table({
    '5%3':5%3,
    '3%5':3%5,
    '-3%5':-3%5,
    '(-3)%5':(-3)%5,
    '-5%3':-5%3,
    '(-5)%3':(-5)%3
})

// arithmetic on strings and numbers
console.table({
    '"3"*"3"':"3"*"3",
    '"3"+"2"':"3"+"2",
    '"3"-"2"':"3"-"2",
    '"3a45"-"3a45"': "3a45"-"3a45",
    '"abcd">"acbd"':"abcd">"acbd",
    '"abc">"z"':"abc">"z",
    '0>NaN':0>NaN,
    '0<NaN':0<NaN,
    '0==NaN':0==NaN,
    '1>NaN':1>NaN,
    '1<NaN':1<NaN,
    '1==NaN':1==NaN,
    '1>undefined':1>undefined,
    '1<null':1<null,
    '1==null':1==null,
    'null=={}':null=={}
})

console.log('3'/'2')

// logical operators
console.table({
    'true&&true':true&&true,
    'true&&false' : true&&false,
    'false&&false': false&&false,
    'true||true':true||true,
    'true||false' : true||false,
    'false||false': false||false
})

// relational
console.table({
    '2>1':2>1,
    '1>2':1>2,
    '"-21">29':"-21">29,
    '-1>"2"':-1>"2"
})

// other inequality operators work in a similar way

// equality in javascript
console.table({
    '[]==""':[]=="",
    '""==null':""==null,
    '[]==null':[]==null,
    '[]==0':[]==0,
    '""==0':""==0
})

// ()===() is same as (()==()) && (typeof() == typeof())