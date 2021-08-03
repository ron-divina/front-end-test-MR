// Size selection
const sizeButtons = document.querySelectorAll('.size__btn')
const sizeSelected = document.querySelector('.size__selected')

sizeButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        removeSelectedClasses()
        btn.classList.add('selected')
        sizeSelected.textContent = btn.labels[0].textContent
    })
})

function removeSelectedClasses() {
    sizeButtons.forEach(btn => {
        btn.classList.remove('selected')
    })
}

// Cart popper show / hide
const cart = document.querySelector('.cart')
cart.addEventListener('click', e => {
    cart.classList.toggle('expanded')
})

// Get size from user
function submitAnswers() {
    const size = document.forms['size']['sz'].value
    console.log(size)


    return false
}
