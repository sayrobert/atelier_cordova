var notificationManager = {

    sendNotification: function(notification) {
        let event = new Event('sendAlert');
        document.addEventListener('sendAlert', this.alertNotification.bind(this, notification.message, 'Cours annulé !'), false);
        document.dispatchEvent(event);
    },

    alertNotification: function(message, title) {
        navigator.notification.alert(message, () => {
            console.log('Alert dismissed');
        }, title);
    },

    confirmNotification: function(message, title) {
        navigator.notification.confirm(message, (buttonIndex) => {
            console.log(buttonIndex);
        }, title, ['Confirmer', 'Refuser']);
    }

}