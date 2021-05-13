
const firstNum = parseInt(Math.random() * 10);
const secondNum = parseInt(Math.random() * 10);

const first = document.getElementById("first");
const second = document.getElementById("second");

first.innerHTML = `<p>${firstNum}</p>`;
second.innerHTML = `<p>${secondNum}</p>`;

const total = firstNum + secondNum;
const btn = document.getElementById("btn");

btn.addEventListener("click" , () =>{

     let write = document.getElementById("write").value;
     write = Number(write);
     if(write == total){
         alert("Correct");
         window.location.reload();
     }
     else{
         alert('Sorry! Incorrect. \n The correct answer was ' + total + '.')
         window.location.reload();
     }

});