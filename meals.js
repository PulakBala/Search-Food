const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals =(meals)=>{
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
     meals.forEach (meal => {
        // console.log(meal)
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col');
        mealsDiv.innerHTML = `

        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
          <img src=" ${meal.strMealThumb} " class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${meal.strMeal} </h5>
            <p class="card-text"> ${meal.strInstructions} </p>
          </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealsDiv);
     });
}

const searchFood = () =>{
  const serchField = document.getElementById('search-field');
  const serchText = serchField.value;
  loadMeals(serchText);
  serchField.value = '';
}

const loadMealDetail =(idMeal)=>{
  // console.log('get idmeal', idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  // console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal =>{
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = ``;
  const mealsDiv = document.createElement('div');
  mealsDiv.classList.add('card');
  mealsDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  
  `;
   detailContainer.appendChild(mealsDiv);
}

loadMeals();