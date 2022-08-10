function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificador.");
  }

  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * (5/9);
  let degreeSign = "C";

  if(celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => (celsius * (9/5)) + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;

}

try {
  console.log(transformDegree("50F"));
} catch (error) {
  console.log(error.message);
}
