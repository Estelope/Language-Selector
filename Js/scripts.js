function handleSelection(event) {
  event.preventDefault();
  const selection1 = document.getElementById("snack").value;
}
window.addEventListener("load", function() {
  document.getElementById("snack-form").addEventListener("submit", handleSelection);

});
// I would use this function below to submit all of the forms but for our purposes / time constraints the last form with 'id =snack' will be used for result data 
// submitForms = function(){
 // document.getElementById("beverage").submit();
//  document.getElementById("snack").submit();
// 
document.querySelector("span#result").innertext = // Javascript,Ruby,