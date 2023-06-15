function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("beverage").value;
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});





document.getElementById('submit').addEventListener('click', function() {
  
  for (let i = 0; i < document.forms.length; i++) {
    document.forms[i].submit();
  };
  console.log(document.forms.length);
});