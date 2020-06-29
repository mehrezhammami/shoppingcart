function increase(id, p, id_p) {
    let inp = document.getElementById(id)

    let val = inp.value
    val++
    inp.value = val
    console.log(val)

    let sum = document.getElementById(id_p)
    sum.innerHTML = p * val
}

function decrease(id, p, id_p) {
    let inp = document.getElementById(id)

    let val = inp.value
    if (val > 0) { val-- }
    inp.value = val
    console.log(val)

    let sum = document.getElementById(id_p)
    sum.innerHTML = p * val
}

function reset(id) {
    let parent = document.getElementById(id)
    parent.remove()

}

function styling(id) {
    let h = document.getElementById(id)
    h.style.color = 'red'
}