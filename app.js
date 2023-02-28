const rating = document.querySelectorAll('li')
const submit = document.getElementById('submit')
const activeContainer = document.getElementsByClassName('active-state')
const thankContainer = document.getElementsByClassName('thank-you-state')

let value 

rating.forEach(li => li.addEventListener('click', ()=>{
    li.style.backgroundColor = 'hsl(217, 12%, 63%)'
    value = li.value
}))

submit.addEventListener('click', ()=>{
    // activeContainer.style.display = 'none'
    console.log('submitting...')
    
})

