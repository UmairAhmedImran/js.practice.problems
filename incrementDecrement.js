// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
// Call the functions to that the line below logs out 10

let myPoints = 3

function add3Points() {
    myPoints += 3
}
function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)