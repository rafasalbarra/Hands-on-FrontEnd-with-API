let result = document.getElementById("result")
let searchButton = document.getElementById("searchButton")
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchButton.addEventListener("click", () => {
    let userInp = document.getElementById ("user-inp").value;
    if (userInp.length == 0) {
        result.innerHTML = `<h4>Type a meal name please</h4>`
    }
    else{
        fetch(url + userInp).then((response) => response.json()).then((data) => {
            let meal = data.meals[0];
            console.log(meal);
            console.log(meal.strMealThumb);
            console.log(meal.streal);
            console.log(meal.strCategory)
            console.log(meal.strInstructions);
            let count = 1;
            let ingredients = [];
            for (let i in meal) {
                let ingredient = "";
                let measure = "";
                 if (i.startsWith("strIngredient") && meal [i]) {
                    ingredient = meal[i];
                    measure = meal['strMeasure' + count];
                    count +=1;
                    ingredients.push('${measure} ${ingredient}');
                 }
             }
             console.log(ingredients);
        
             result.innerHTML = `<img src=${meal.strMealThumb}
            <div class="detail">
                <h2>${meal.strMeal}</h2>
                <h2>${meal.strCategory}</h2>
            </div> 
             <div id="ingredient-con"></div>
             <div id="recipe">
                 <button id="hide-recipe">X</button>
                 <pre id="instruction">${meal.strInstructions}</pre>
             </div> 
             `;
        
        });  
    }
})

