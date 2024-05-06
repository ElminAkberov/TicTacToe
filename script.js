const root = document.getElementById("root")
const h1 = document.querySelector("h1")
let winnerCase = false
show()
function show() {
    let kod = ''
    for (let i = 1; i <= 3; i++) {
        kod += `<tr>`
        for (let j = 1; j <= 3; j++) {
            kod += `<td id="td${i}${j}" onclick="sayIt('td${i}${j}')"></td>`
        }
        kod += `</tr>`
    }
    root.innerHTML = kod
}
let arr = ["X", "O"]
let state = false
function sayIt(e) {
    if(winnerCase) return
    let tds = document.getElementById(e)
    if (tds.innerText == '') {
        if (state) { tds.innerHTML = arr[1] } else { tds.innerHTML = arr[0] }
        state = !state
    }
    checkWinner()
}

function checkWinner() {
    const win = [
        ["td11", "td12", "td13"],
        ["td21", "td22", "td23"],
        ["td31", "td32", "td33"],
        ["td11", "td21", "td31"],
        ["td12", "td22", "td32"],
        ["td13", "td23", "td33"],
        ["td11", "td22", "td33"],
        ["td13", "td22", "td31"]
    ];
    win.forEach(item => {
        let [a, b, c] = item
        let elA = document.getElementById(a).innerText
        let elB = document.getElementById(b).innerText
        let elC = document.getElementById(c).innerText
        if (elA && elB && elC) {
            if (elA == elB && elA == elC){
                winnerCase = true
                if (elA === "X") {
                    h1.innerHTML = "X kazandı"
                } else if (elA === "O") {
                    h1.innerHTML = "O kazandı"

                }
            }
            
        }
    })
}
