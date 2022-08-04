let money = prompt('Ваш бюджет на месяц', ' '),
	time = prompt('Введите дату в формате YYYY-MM-DD', ' ');

let addData = {
	money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let q1 = prompt('Введите обязательную статью расходов в этом месяце', ' '),
	q2 = prompt('Во сколько обойдется?', ' '),
	q3 = prompt('Введите обязательную статью расходов в этом месяце', ' '),
	q4 = prompt('Во сколько обойдется?', ' ');

addData.expenses.q1 = q2;
addData.expenses.q3 = q4;

alert(addData.money / 30);