let temp = [
    [90, 80, 70, 60, 50, 40, 30],
    [30, 40, 50, 60, 70, 80, 90]
]

function bidmensional(temp) {
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            console.log(temp[i][j])
        }
    }
}
bidmensional(temp)
