
function showTime(){
  var date = new Date();
  var hour = date.getHours();  // 0 - 23
  var min  = date.getMinutes();  // 0 - 23
  var sec  = date.getSeconds();  // 0 - 23
  var session = "AM";

  if(hour >= 12){
    hour -= 12;
    session = "PM";
  }
    
  if(hour == 0){
    hour = 12;
  }

  hour = hour < 10 ? "0" + hour : hour;
  min  = min < 10 ? "0" + min : min;
  sec  = sec < 10 ? "0" + sec : sec;
    
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + "  " + session;
   setTimeout(showTime,1000);
}

// showTime();

 function showDate(){
   
   var date   = new Date();
   var days   = date.getDay();
   var months = date.getMonth();
   var years  = date.getFullYear();

   days   = days   < 10 ? " 0 " + days   : days;
   months = months < 10 ? " 0 " + months : months;
   years  = years  < 10 ? " 0 " + years  : years;
     
   document.getElementById("date").innerText = days + " / " + months + " / " + years;
    setTimeout(showDate,100);
  } 



  var timer;

  function startTime(){
    timer = setTimeout(showTime,1000);
    timer = setTimeout(showDate,100);
    showTime();
    showDate();
  } 
  
  function stopTime(){
    clearInterval(timer);
  } 



