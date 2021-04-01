function display(){
 
    message = "<p>Name:" + document.form1.name.value;
    message += "<br>CollegeName:" + document.form1.cname.value;
    message += "<br>Location:" + document.form1.location.value + "</p>";
   document.getElementById("dis").innerHTML=message;
   
}


  var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

