// document

// getElementById, getElementsByTagName ..
console.log(document.getElementById('heading'))
document.getElementsByTagName('body')[0]


// createTextNode
var innert = document.createTextNode('This is p tag')
var element = document.createElement('h2')

element.setAttribute('class', 'subHeading')
element.removeAttribute('class')

// appendChild
element.appendChild(innert)
document.getElementsByTagName('body')[0].appendChild(element)

// style -> in css property if - is there, use camel case in js
var body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'black'
body.style.color = 'white'

// innerHTML + onclick event
var func = ()=>{
    body.style.backgroundColor = body.style.backgroundColor == 'white'?'black':'white'
    body.style.color = body.style.color == 'white'?'black':'white'
}

console.log(body.innerHTML)
body.innerHTML += `<button class="toggleMode" onclick="func()">Change mode</button>`

// similarly there are many events like ondblclick, onscroll, onmouseover, etc

// innerText
console.log(document.getElementById('heading').innerText)

// value
console.log(document.getElementById('name').value)

// jquery
// use .querySelector instead
// window

// onload event
