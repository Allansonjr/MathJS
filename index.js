console.log(5 > 4)
console.log('ананас' > 'яблоко')
console.log('2' > '12')
console.log(undefined == null)
console.log(undefined === null)
console.log(null == '\n0\n')
console.log(null === +"\n0\n")

let age = prompt("Сколько вам лет")

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
checkAge()

let age = prompt("Сколько вам лет")
function checkAge(age) {

}

let age1 = prompt("Сколько вам лет")

function checkAge1(age1) {
	return age1 > 18 ? alert("молодец, молодец") : alert("Родители разрешили?");
}

checkAge1();


let age2 = prompt("Сколько вам лет")

function checkAge2(age2) {
	return age2 > 18 || alert("молодец, молодец");
}

checkAge2();
console.log(Math.round(6.35*10)/10)