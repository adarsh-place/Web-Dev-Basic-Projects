const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const heading =  document.querySelector('h1')
const body=document.querySelector('body')


div1.addEventListener('mouseover',() => {
    body.classList.add('d1')
    heading.classList.add('h')
})
div1.addEventListener('mouseleave',() => {
    body.classList.remove('d1')
    heading.classList.remove('h')
})

div2.addEventListener('mouseover',() => {
    body.classList.add('d2')
    heading.classList.add('h')
})
div2.addEventListener('mouseleave',() => {
    body.classList.remove('d2')
    heading.classList.remove('h')
})

div3.addEventListener('mouseover',() => {
    body.classList.add('d3')
    heading.classList.add('h')
})
div3.addEventListener('mouseleave',() => {
    body.classList.remove('d3')
    heading.classList.remove('h')
})

