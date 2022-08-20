function connect() {
  var mealInput = document.getElementById("mealInput").value;
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;
  fetch(url)
    .then(res => res.json())
    .then(data => display(data));
  // clearing search box and prev . content
  document.getElementById('mealInput').value = " ";
  document.getElementById("amountInput").textContent = ' ';
}

function display(data) {
  var amountInput = parseInt(document.getElementById("amountInput").value);
  var mealInfoSection = document.getElementById('mealInfoSection');
  for (var i = 0; i < amountInput; i++) {
    var meal = data.meals[i];
    var mealPhoto = meal.strMealThumb;
    var mealName = meal.strMeal;
    var newDiv = document.createElement('div');
    newDiv.className = "cart";
    newDiv.innerHTML = `<div class="card border-0 shadow mealDetails text-center" style="border-radius: 10px;">
                              <img src="${mealPhoto}" class="card-img-top" style="border-radius: 10px 10px 0 0;" alt="...">
                          <div class="card-body">
                              <h5 class="card-title text-center my-3">${mealName}</h5>                         
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-danger"> Show Formula</a>
                          </div>
                          </div>`;
    mealInfoSection.appendChild(newDiv);

    // clearing search box and prev . content
    document.getElementById('amountInput').value = " ";
  }
}




