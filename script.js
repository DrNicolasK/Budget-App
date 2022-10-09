let startCalc = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expValue = document.getElementsByClassName('expenses-value')[0],
	optExpValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavValue = document.getElementsByClassName('yearsavings-value')[0],

	expInput = document.getElementsByClassName('expenses-item'),
	expApproveBtn = document.getElementsByTagName('button')[0],
	optExpApproveBtn = document.getElementsByTagName('button')[1],
	calcBtn = document.getElementsByTagName('button')[2],
	optExpInput = document.querySelectorAll('.optionalexpenses-item'),
	chooseInc = document.querySelector('#income'),
	checkBox = document.querySelector('#savings'),
	sumValue = document.querySelector('#sum'),
	percentValue = document.querySelector('#percent'),
	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value');


let money, time;

expApproveBtn.disabled = true;
optExpApproveBtn.disabled = true;
calcBtn.disabled = true;

startCalc.addEventListener('click', function () {
	time = prompt('Введите дату в формате YYYY-MM-DD', ' ');
	money = +prompt('Ваш бюджет на месяц', ' ');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц', ' ');
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();

	expApproveBtn.disabled = false;
	optExpApproveBtn.disabled = false;
	calcBtn.disabled = false;

});

expApproveBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expInput.length; i++) {
		let a = expInput[i].value,
			b = expInput[++i].value;

		if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
			a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i--;
		}
	}
	expValue.textContent = sum;
});

optExpApproveBtn.addEventListener('click', function () {
	for (let i = 0; i < optExpInput.length; i++) {
		let opt = optExpInput[i].value;
		appData.optionalExpenses[i] = opt;
		optExpValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

calcBtn.addEventListener('click', function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expValue.textContent) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay <= 100) {
			levelValue.textContent = 'Низкий уровень дохода';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2500) {
			levelValue.textContent = 'Средний уровень дохода';
		} else if (appData.moneyPerDay > 2500) {
			levelValue.textContent = 'Высокий уровень дохода';
		} else {
			levelValue.textContent = 'Произошла ошибка';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

chooseInc.addEventListener('input', function () {
	let items = chooseInc.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkBox.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavValue.textContent = appData.monthIncome.toFixed();
		yearSavValue.textContent = appData.yearIncome.toFixed();
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavValue.textContent = appData.monthIncome.toFixed(1);
		yearSavValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};