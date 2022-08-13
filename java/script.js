let ok_list = [false, false, false] // Control variable for unlocking button

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
    picked_box = `${section} .picked`
    picked_checkmark = `${section} .checkmark`

    const last_picked_box = document.querySelector(picked_box)
    const last_picked_checkmark = document.querySelector(picked_checkmark)
    const checkmark = document.querySelector(target_check)
    

    if (last_picked_box === null) { // First click
        console.log('PRIMEIRO CLIQUE')
        console.log(last_picked_box)
        console.log(box)
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
        console.log('CLIQUE EM CAIXA DIFERENTE')
        console.log(last_picked_box)
        console.log(box)
        last_picked_box.classList.toggle('picked')
        last_picked_checkmark.classList.toggle('checkmark')
        last_picked_checkmark.classList.toggle('hide')
        box.classList.toggle('picked')
        checkmark.classList.toggle('checkmark')
        checkmark.classList.toggle('hide')
    }

    okOrder()
}

function okOrder () {
    texto = document.querySelector('.footer p')
    console.log(texto)
}
