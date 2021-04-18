const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  let feet = document.querySelector('#feet');
  let inches = document.querySelector('#inches');
  const result = document.querySelector('#result');

  e.preventDefault();

  feet = parseInt(feet.value);
  inches = parseInt(inches.value);

  if (isNaN(feet) || isNaN(inches)) {
    result.textContent = "Please enter a valid number!";
  } else if (feet < 0) {
    result.textContent = "Please enter a feet value > 0";
  } else if (inches < 0 || inches >= 12) {
    result.textContent = "Please enter an inch value between 0 and 12";
  } else {
    //make conversion to centimers
    //cm = inches * 2.54
    let totalinch = (feet * 12) + inches;
    result.textContent = `${totalinch} cm`;
    document.querySelector('#feet').value = '';
    document.querySelector('#inches').value = '';
  }
})
