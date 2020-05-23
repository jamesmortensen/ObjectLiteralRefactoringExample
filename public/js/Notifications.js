var Status = {
    HERE: 'here',
    AWAY: 'away',
    BUSY: 'busy',
    OFF: 'off'
};

// GLOBAL VAR!
var currentStatus;
var notificationsOn = true;
var globalMessage = '';


var notificationsMod = {
    sendNotification: function () {

        var hours = document.getElementById('hours').value;

        if (notificationsMod.isOn() && (hours > 8 && hours < 20 )) {
            alert(globalMessage);
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

    setMessage: function(message) {
        globalMessage = message;
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

    document.getElementsByName('notifications').forEach(function(elem, index, array) {
        elem.addEventListener('change', function(input) {
            notificationsMod.setNotificationsOnOff(input.target.id);
        });
    });

    document.getElementById('message').onblur = function() {
        notificationsMod.setMessage(this.value);
    }
    document.getElementById('message').focus();
    document.getElementById('message').blur();
}, false);