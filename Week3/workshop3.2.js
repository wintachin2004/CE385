function calculateBMI (weight, height) {
  let bmi = (weight / (height * height)).toFixed(2);

  if (bmi  < 18.5 ) {
    category = "ผอม";
  } else if (bmi >=18.5 && bmi <25) {
    category = "ปกติ";
  } else if (bmi >=25 && bmi <30) {
    category = "อ้วน";
  } else {
    category = "อ้วนมาก"
  }

  return(console.log(`BMI: ${bmi}, Category: ${category}`))
};

calculateBMI(70, 1.75)
calculateBMI(50, 1.6)
calculateBMI(90, 1.7)