//traductor
function translate(text) {
	console.log(text);

	for (const t of diccionary) {
		text = recursiva(t);
	}
	return text;

	function recursiva(t) {
		if (text.includes(t.english)) {
			text = text.replace(t.english, t.spanish);
			recursiva(t);
		}
		return text;
	}
}

function extraeText(text, array) {
	for (let i = 0; i < titles.length; i++) {
		let includesText = text.includes(titles[i]);
		if (includesText) {
			array.push(text);
			break;
		}
	}

	return array;
}

function myFunction() {
	// elementos html
	const app = document.getElementById("app");

	//traducir
	//for (let index = 0; index < rules.length; index++) {

	let rule = document.getElementById('textarea1').value;
	console.log(rule);
	
	let text = [];
	let ruleArray = [];

	rule = rule.replace(/0.0/g, "0,0");
	text = rule.split(".");

	text.forEach(element => {
		ruleArray = extraeText(element, ruleArray);
	});

	ruleArray.forEach(element => {
		app.innerText += element;
	});

	let textSpanish = translate(document.getElementById("app").innerText);
	console.log(textSpanish);

	textSpanish = textSpanish.replace(/,/g, ".");
	appTranslate.innerText = textSpanish;
	//}
}

document.getElementById("button").addEventListener("click", myFunction);
