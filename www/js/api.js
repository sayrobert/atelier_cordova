/* INIT */

function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}

/* PARTIE COURS */

function callLessons(callback) {
	var xhr = getXMLHttpRequest()
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText)
		}
	}

	xhr.open("GET", "http://swiv.outofpluto.com:8082/api/lecture/lecture/?format=json", true)
	xhr.send(null)
}

function readLessons(sData) {
    // Tu peux traiter les données reçues à partir d'ici
    if (sData){
        console.log('Leçons reçues')
	} else {
        console.log('OU SONT LES LECONS')
	}
}

/* PARTIE NOTIFICATIONS */

function callNotifs(callback) {
	var xhr = getXMLHttpRequest()
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText)
		}
	}

	xhr.open("GET", "http://swiv.outofpluto.com:8082/api/lecture/lecture/?format=json", true)
	xhr.send(null)
}

function readNotifs(sData) {
    // Tu peux traiter les données reçues à partir d'ici
    if (sData){
        console.log('Notifs reçues')
	} else {
        console.log('OU SONT LES NOTIFS')
	}
}

callLessons(readLessons);
callNotifs(readNotifs);