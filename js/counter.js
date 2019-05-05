window.onload = function(){
    var deadline = new Date();
    deadline.setMilliseconds(43932000);
    function getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime){
        var clock = document.getElementById(id);
        var hoursDiv = clock.querySelector('#hours');
        var minutesDiv = clock.querySelector('#minutes');
        var secondsDiv = clock.querySelector('#seconds');
        function updateClock(){
            var t = getTimeRemaining(endtime);
            hoursDiv.innerHTML = `${('0' + t.hours).slice(-2).split('')[0]} ${('0' + t.hours).slice(-2).split('')[1]}`;
            minutesDiv.innerHTML = `${('0' + t.minutes).slice(-2).split('')[0]} ${('0' + t.minutes).slice(-2).split('')[1]}`;
            secondsDiv.innerHTML = `${('0' + t.seconds).slice(-2).split('')[0]} ${('0' + t.seconds).slice(-2).split('')[1]}`;
            if(t.total<=0){
                clearInterval(timeinterval);
            }
        }
        updateClock(); 
        var timeinterval = setInterval(updateClock,1000);
    }
    initializeClock('clockdiv', deadline);
}