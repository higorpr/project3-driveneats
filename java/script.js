
function pickMeal(box, target_check) {

    last_picked_box = document.querySelector('.picked')
    last_picked_checkmark = document.querySelector('.checkmark')
    checkmark = document.querySelector(target_check)

    if (last_picked_box === null) { // First click
        console.log('PRIMEIRO CLIQUE')
        console.log(last_picked_box)
        console.log(box)
        box.classList.toggle('picked')
        checkmark.classList.toggle('hide')
        checkmark.classList.toggle('checkmark')

    } else if (last_picked_box === box) { // Double click on same box:
        console.log('CLIQUE NA MESMA CAIXA')
        console.log(last_picked_box)
        console.log(box)
        box.classList.toggle('picked')
        checkmark.classList.toggle('hide')
        checkmark.classList.toggle('checkmark')

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
}

function pickDrink() {

}

function pickDessert() {

}