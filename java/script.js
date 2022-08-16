let ok_list = [false, false, false] // Control variable for unlocking button
let price_meal = 0;
let price_drink = 0;
let price_dessert = 0;
let total = 0;
let meal = '';
let drink = '';
let dessert = '';
let order_complete = false;

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
    name_tag = picked_box + ' h2' // Tag to check name of selected item

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
    let item_name = document.querySelector(name_tag).innerText
    if (section === '.meal') {
        price_meal = Number(price.slice(3))
        meal = item_name
        console.log(price_meal)
        console.log(meal)
    } else if (section === '.drink') {
        price_drink = Number(price.slice(3))
        drink = item_name
        console.log(price_drink)
        console.log(drink)
    } else {
        price_dessert = Number(price.slice(3))
        dessert = item_name
        console.log(price_dessert)
        console.log(dessert)
    }

    greenOrder() // Function to turn footer button green

    total = price_meal + price_drink + price_dessert
}

function greenOrder() {
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
        order_complete = true
    }
}

function clickOrder(button) {
    if (order_complete===true) {

    let meal_price_str = price_meal.toFixed(2).toString()
    meal_price_str = meal_price_str.replace('.', ',')
    meal_price_entry = `R$ ${meal_price_str}`

    let drink_price_str = price_drink.toFixed(2).toString()
    drink_price_str = drink_price_str.replace('.', ',')
    drink_price_entry = `R$ ${drink_price_str}`

    let dessert_price_str = price_dessert.toFixed(2).toString()
    dessert_price_str = dessert_price_str.replace('.', ',')
    dessert_price_entry = `R$ ${dessert_price_str}`

    let total_price_str = total.toFixed(2).toString()
    total_price_str = total_price_str.replace('.', ',')
    total_price_entry = `R$ ${total_price_str}`

    document.querySelector('.meal_name').innerText = meal
    document.querySelector('.drink_name').innerText = drink
    document.querySelector('.dessert_name').innerText = dessert

    document.querySelector('.meal_cost').innerText = meal_price_entry
    document.querySelector('.drink_cost').innerText = drink_price_entry
    document.querySelector('.dessert_cost').innerText = dessert_price_entry
    document.querySelector('.total_cost').innerText = total_price_entry

    document.querySelector('.transparency').classList.remove('hide')
    document.querySelector('.end_alert').classList.remove('hide')
    // if (button.classList.contains('green')) {
    //     alert(`O total do seu pedido é: R$ ${total}.`)
    // }
    }
}

function clickConfirm() {
    let client_name = prompt('Qual o seu nome?')
    let client_address = prompt('Qual o endereço de entrega?')
    let total_price_str = total.toFixed(2).toString()
    total_price_str = total_price_str.replace('.', ',')
    total_price_entry = `R$ ${total_price_str}`

    let text = `Olá, gostaria de fazer o pedido:
    - Prato: ${meal}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: ${total_price_str}
    
    Nome: ${client_name}
    Endereço: ${client_address}`

    text = encodeURIComponent(text)

    let uri = `https://wa.me/5521997240416?text=${text}`

    window.location.assign(uri)
}

function clickCancel() {
    document.querySelector('.transparency').classList.add('hide')
    document.querySelector('.end_alert').classList.add('hide')
}