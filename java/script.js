let ok_list = [false, false, false] // Control variable for unlocking button
let price_meal = 0;
let price_drink = 0;
let price_dessert = 0;
let total = 0;

function pickBox(box, target_check) {
    // Defining which section the click took place:    
    if (box.parentElement.classList.contains('meal') === true) {
        ok_list[0] = true
        section = '.meal'
    } else if (box.parentElement.classList.contains('drink') === true) {
        ok_list[1] = true
        section = '.drink'
    } else {
        ok_list[2] = true
        section = '.dessert'
    }
    picked_box = `${section} .picked` // Tag to check which box is selected
    picked_checkmark = `${section} .checkmark` // Tag to check where the checkmark is
    price_tag = picked_box + ' h4' // Tag to check price of selected item

    const last_picked_box = document.querySelector(picked_box)
    const last_picked_checkmark = document.querySelector(picked_checkmark)
    const checkmark = document.querySelector(target_check)

    if (last_picked_box === null) { // First click
        // console.log('PRIMEIRO CLIQUE')
        // console.log(last_picked_box)
        // console.log(box)
        box.classList.toggle('picked')
        checkmark.classList.toggle('hide')
        checkmark.classList.toggle('checkmark')

    } else if (last_picked_box === box) { // Double click on same box:
        // alert('Você já selecionou esse item =)')
        // console.log('CLIQUE NA MESMA CAIXA')
        // console.log(last_picked_box)
        // console.log(box)
        // box.classList.toggle('picked')
        // checkmark.classList.toggle('hide')
        // checkmark.classList.toggle('checkmark')

    } else { // Click on different box
        // console.log('CLIQUE EM CAIXA DIFERENTE')
        // console.log(last_picked_box)
        // console.log(box)
        last_picked_box.classList.toggle('picked')
        last_picked_checkmark.classList.toggle('checkmark')
        last_picked_checkmark.classList.toggle('hide')
        box.classList.toggle('picked')
        checkmark.classList.toggle('checkmark')
        checkmark.classList.toggle('hide')
    }

    // Getting price of picked item
    let price = document.querySelector(price_tag).innerText.replace(',', '.')
    if (section === '.meal') {        
        price_meal = Number(price.slice(3))
        console.log(price_meal)
    } else if (section === '.drink') {
        price_drink = Number(price.slice(3))
        console.log(price_drink)
    } else {
        price_dessert = Number(price.slice(3))
        console.log(price_dessert)
    }

    okOrder() // Function to turn footer button green

    total = price_meal + price_drink + price_dessert
}

function okOrder() {
    let ok = true // Items selection check variable
    for (i = 0; i < ok_list.length; i++) {
        if (ok_list[i] === false) {
            ok = false
            break
        }
    }
    if (ok === true) {
        texto = document.querySelector('.footer p')
        texto.innerHTML = 'Fechar pedido'
        texto.parentElement.classList.add('green')

    }
}

function orderClick(button) {
    if (button.classList.contains('green')) {
        alert(`O total do seu pedido é: R$ ${total}.`)
    }
}
