// For loop
// initiation, condition and updation

for(var i=0; i<10; i++) console.log(i)
                        console.log(i+1)

// same as in if else construct {} is reqired for multiline body
// or 
/*
    for(var i=0 ;i<10; i++){
        console.log(i)
        console.log(i+1)
    }
 */

// For of loop (es6)
var cities = ["amsterdam", 'manali', "goa", 'bangalore', 'mumbai']
for(city of cities){
    console.log(city)
}

// While loop
var i=0;
while(i<10){
    console.log(i++)
}

// iterating over elements of an array
for(var i=0; i<cities.length; i++){
    console.log(cities[i])
}

var i=0;
while(i<cities.length){
    console.log(cities[i++])
}

console.log('printing elements of jagger array')
var city = ["London", "Mumbai",['Red','Yellow','Green'],"Nice", "Pune", "amsterdam", "delhi"]

for(item of city){
    if(Array.isArray(item)) for(inner of item) console.log(inner)
    else console.log(item)
}