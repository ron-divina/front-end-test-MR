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