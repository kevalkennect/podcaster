var height, mass, markHigherBMI;

function BMI(height, mass) {
  return mass / height ** 2;
}
const markBMI = BMI(1.88, 95);
const jhonBMI = BMI(1.76, 85);

function isMarkHigher() {
  if (markBMI > jhonBMI) {
    markHigherBMI = true;
  } else {
    markHigherBMI = false;
  }
}
isMarkHigher();

console.log(markHigherBMI);
