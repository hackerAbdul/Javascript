//query selector


// const firstDiv = document.querySelector('div')

// console.log(title)

//query selector all


// const allDivs = document.querySelectorAll('div')

// console.log(title)

//get element by id

const title = document.getElementById('title3')
console.log(title)

const button = document.getElementById('item')
button.addEventListener('mouseover', function onClick(event){
    document.body.style.backgroundColor = 'grey'
    title.innerText = "Hello Ayaan"
    title.style.color = 'salmon';
})

//get element by class name

const className = document.getElementsByClassName('list-item2')

console.log(className)




//get element by tag name