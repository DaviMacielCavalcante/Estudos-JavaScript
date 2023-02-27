document.querySelector(".get-jokes").addEventListener("click", getJokes);
 
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').valueAsNumber;
 
  for (let i = 0; i < number; i++) {
    const xhr = new XMLHttpRequest();
 
    xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);
 
    xhr.onload = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
 
        const li = document.createElement("li");
        li.textContent = response.value;
 
        document.querySelector(".jokes").append(li);
      }
    };
 
    xhr.send();
  }
 
  e.preventDefault();
}