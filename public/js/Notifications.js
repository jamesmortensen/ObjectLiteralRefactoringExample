var Status = {
    HERE: 'here',
    AWAY: 'away',
    BUSY: 'busy',
    OFF: 'off'
};

// GLOBAL VAR!
var currentStatus;
var notificationsOn = true;


var notificationsMod = {
    sendNotification: function () {

        var hours = document.getElementById('hours').value;

        if (notificationsMod.isOn() && (hours > 8 && hours < 20 )) {
            alert(document.getElementById('message').value);
            console.log('message = ' + status.message);
        } else {
            // no message
            console.log('no message');
        }
    },

    setStatus: function (status) {
        if (status === Status.HERE) {
            currentStatus = status;
        }
    },

    getStatus: function () {
        return currentStatus;
    },

    setNotificationsOnOff: function(value) {
        notificationsOn = value === 'on';
    },

    isOn: function() {
        return notificationsOn;
    }
}
    
window.addEventListener('load', function () {
    var hours = new Date().getHours();
    document.getElementById('on').checked = true;
    document.getElementById('available').checked = true;
    document.getElementById('hours').value = hours;

    document.getElementById('submit').onclick = notificationsMod.sendNotification;

    document.getElementsByName('notifications').forEach(function() {
        this.addEventListener('change', function(input) {
            notificationsMod.setNotificationsOnOff(input.target.id);
        });
    });
}, false);