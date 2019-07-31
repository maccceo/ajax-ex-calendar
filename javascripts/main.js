// Creare un calendario dinamico con le festività. Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività. Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).

// Init template giorno del mese
var source   = document.getElementById("day-template").innerHTML;
var template = Handlebars.compile(source);
var content, html;


// prelevo festività
$.ajax({
	url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
	method: "GET",
	success: function (data) {
		if (data.success == true) {
			createCalendar(data.response);
		} else {
			alert("C'è stato un problema! Riprova più tardi");
			console.log(data.error);
		}

	},
	error: function (richiesta,stato,errori) {
		alert("Qualcosa è andato storto :/ " + errori);
		console.log("richiesta: " + richiesta);
		console.log("stato: " + stato);
		console.log("errori: " + errori);
	}
})

// stampo calendario con festività
function createCalendar (festività) {
	var daysInMonth = moment("2018-01", "YYYY-MM").daysInMonth()
	console.log(daysInMonth);
	console.log(festività);
}




// context = {
// 	num: ,
// 	month: ,
// 	festività: ,
// };
// html = template(context);
// $("#days").append(html);