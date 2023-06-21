function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
  
  if (typeof radioSelection === "undefined") {
    console.log('Variable is undefined');
  }
  
  else if (radioSelection === "1") {
    document.getElementById("answer1").removeAttribute("class", "hidden")
  }
  else if (radioSelection === "2") {
    document.getElementById("answer2").removeAttribute("class", "hidden");
  }
  else if (radioSelection === "3") {
    document.getElementById("answer3").removeAttribute("class", "hidden");
  }

};



window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);




});



