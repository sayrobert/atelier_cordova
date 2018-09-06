/* Lessons var */
let lessonsList = [];
let notificationsList = [];
let slicedNotificationsList = [];

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
        lessonsList = JSON.parse(sData);
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

	xhr.open("GET", "http://swiv.outofpluto.com:8082/api/lecture/notification/?format=json", true)
	xhr.send(null)
}

function readNotifs(sData) {
    // Tu peux traiter les données reçues à partir d'ici
    if (sData){

        // Tableau temporaire de notifications
        notificationsList = JSON.parse(sData);
        notificationsList.push(notificationsList[0]);
        notificationsList.push(notificationsList[0]);
        console.log(notificationsList);

        // Rempli le tableau s'il est vide
        if(slicedNotificationsList.length === 0)
            slicedNotificationsList = notificationsList.slice(0, notificationsList.length - 1);
        // console.log(notificationsList);

	} else {
        console.log('OU SONT LES NOTIFS')
	}
}

function compareNotifications() {

    callLessons(readLessons);

    if(notificationsList.length !== slicedNotificationsList.length) {

        let lastNotification = notificationsList[notificationsList.length - 1];
        notificationManager.sendNotification(lastNotification);

    }

}

callLessons(readLessons);
callNotifs(readNotifs);

setInterval(compareNotifications, 5000);

