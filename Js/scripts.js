
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
  // let checkedValue =document.getElementById("choc").value;
  
}


window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);

  
if (typeof radioSelection === 'undefined') {
  console.log('Variable is undefined');
}
// used this for troubleshooting and coudlnt get my input values to show for dropdown forms or radioSelection variable. 
else if(radioSelection === "choc") {
  document.getElementById("answer1").removeAttribute("class","hidden")
  console.log('variable is submitting');
}
else if (radioSelection === "van") {
  document.getElementById("answer2").removeAttribute("class","hidden");
}
else if (radioSelection === "cookies") {
  document.getElementById("answer3").removeAttribute("class","hidden");
}
  
});






let result;
if (typeof radioSelection === 'undefined') {
  console.log('Variable is undefined');
}
// used this for troubleshooting and coudlnt get my input values to show for dropdown forms or radioSelection variable. ive spent over 7 hours troubleshooting any hints would help.
else if(radioSelection === "1") {
  document.getElementById("answer1").removeAttribute("class","hidden")
  console.log('variable is submitting');
}
else if (radioSelection === "2") {
  document.getElementById("answer2").removeAttribute("class","hidden");
}
else if (radioSelection === "3") {
  document.getElementById("answer3").removeAttribute("class","hidden");
}



//function handleSelection(event) {
 // event.preventDefault();
//  let selection = document.getElementById("snack").value;
//}


//window.addEventListener("load", function () {
//  document.getElementById("snack-form").addEventListener("submit", handleSelection);

//});
//window.onsubmit = function(event){
 // event.preventDefault();
 // let selection = document.getElementById("snack").value;
//}


//if (typeof selection === 'undefined') {
//console.log('Variable is undefined');
//}
// if (selection === "1" || "4") {
//  document.getElementById("answer1").removeAttribute("class","hidden")
//  console.log('variable is submitting');
//}
//else if (selection === "2") {
 // document.getElementById("answer2").removeAttribute("class","hidden");
//}
//else if (selection === "3") {
 // document.getElementById("answer3").removeAttribute("class","hidden");
//}

// I would use this function below to submit all of the forms but for our purposes / time constraints the last form with 'id =snack' will be used for result data
// submitForms = function(){
// document.getElementById("beverage").submit();
//  document.getElementById("snack").submit();
//
 // do you need "" around numbers in If and els if ?????