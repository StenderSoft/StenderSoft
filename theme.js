// Выбираем кнопку
// Выбираем таблицу стилей

function fun1() {
var chbox;
const theme = document.querySelector(".theme-link");

chbox=document.getElementById('one');
	if (chbox.checked) {
		theme.href = "dark.css";
	}
	else {
		theme.href = "light.css";
	}
}

