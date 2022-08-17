let money = +prompt('Ваш бюджет на месяц', ' '),
	time = prompt('Введите дату в формате YYYY-MM-DD', ' ');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
		b = prompt('Во сколько обойдется?', ' ');

	if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
		a != '' && b != '' && a.length < 50) {
		console.log('Done');
		appData.expenses[a] = b;
	} else {
		console.log('Произошла ошибка');
		i--;
	}
}

// Используем цикл WHILE

// let i = 0; 

// while (i < 2) {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
// 		b = prompt('Во сколько обойдется?', ' ');

// 	if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log('Done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('Произошла ошибка');
// 		i--;
// 	}

// 	i++;
// }

// Используем цикл DO...WHILE

// let i = 0;

// do {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
// 		b = prompt('Во сколько обойдется?', ' ');

// 	if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log('Done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('Произошла ошибка');
// 		i--;
// 	}

// 	i++;
// } 
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;


alert('Ежедневный бюждет: ' + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
	console.log('Низкий уровень дохода');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2500) {
	console.log('Средний ровень дохода');
} else if (appData.moneyPerDay > 5000) {
	console.log('Высокий уровень дохода');
} else {
	console.log('Произошла ошибка');
}