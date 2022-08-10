let family = {
  incomes: [1363.43, 1499.84],
  expenses: [750, 382, 120, 80, 750, 750]
}

const sum = (values) => {
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

function calculateExpenses(family) {
  const incomes = sum(family.incomes);
  const expenses = sum(family.expenses);

  const total = incomes - expenses;

  const balanceIsOk = total < 0;

  let message = `Seu saldo está positivo: R$${total.toFixed(2)}`;

  if(balanceIsOk) {
    message = `Seu saldo está negativo: R$${total.toFixed(2)}`;
  }


  console.log(message);

}

calculateExpenses(family);