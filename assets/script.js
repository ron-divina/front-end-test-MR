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
let cartNumber = 0
let smallCount = 0
let mediumCount = 0
let largeCount = 0
let cartListing = document.querySelector('.cart__popper')

function submitAnswers(e) {
    const ELcartNumber = document.querySelector('#cart-quantity')
    const warning = document.querySelector('.product__warning')
    const size = document.forms['size']['sz'].value
    let count = 0
    
    if (size == null || size == '') {
        warning.style.display = 'block'
        return false
    } else {
        warning.style.display = 'none'
        cartNumber++
        ELcartNumber.textContent = cartNumber
        console.log('added', size, cartNumber)

        if (size == 'small') {
            smallCount += 1
            console.log(smallCount);
            count = smallCount
        } else if (size == 'medium') {
            mediumCount += 1
            count = mediumCount
        } else if (size == 'large') {
            largeCount += 1
            count = largeCount
        }
    }

    if (count >= 2) {
        // pass
    } else {
        document.querySelector('#empty-warn').style.display = 'none'
        cartListing.innerHTML += `
        <div class="cart__product">
            <figure class="cart__product-image"><img src="assets/images/classic-tee.jpg" alt="Tee"></figure>
            <div class="cart__product-details">
                <h3 class="cart__product-name">Classic Tee</h3>
                <p class="cart__digits"><span class="cart__product-quantity q-${size}">1</span>&nbsp;x&nbsp;<span class="cart__product-price">$75.00</span></p>
                <p class="cart__product-size">Size:&nbsp;<span id="cart-product-size">${size[0].toUpperCase()}</p>
            </div>
        </div>
        `
    }

    document.querySelector(`.q-${size}`).textContent = count

    return false
}
