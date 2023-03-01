const rating = document.querySelectorAll('li')
const submit = document.getElementById('submit')
const activeContainer = document.getElementsByClassName('active-state')
const thankContainer = document.getElementsByClassName('thank-you-state')
const selection = document.getElementById('selection')

let value 

rating.forEach(li => li.addEventListener('click', ()=>{
    li.style.backgroundColor = 'hsl(217, 12%, 63%)'
    value = li.value
}))

submit.addEventListener('click', ()=>{
    activeContainer[0].classList.add('hidden')
    thankContainer[0].classList.add('show')
    selection.innerHTML = `You selected ${value} out of 5`
})

console.log(rating)