const pizzaList = {
    joey_zaza: ["Chilli Flakes","Mozzarella Cheese","Olive Oil and Garlic","Parmigiano","Rapini","Sausage"],
    pesci: ["Anchovies","Extra-Virgin Olive Oil","Fresh Garlic","Oregano","Tomato Sauce"],
    shredda_roni: ["Mozzarella Cheese","Shredded Pepperoni","Tomato Sauce"],
    franki_valley: ["Artichokes","Black Olives","Ham","Mozzarella Cheese","Organic Fresh Mushrooms","Tomato Sauce"],
    honey_heat: ["Chilli Flakes","Mozzarella Cheese","Organic Honey","Pepperoni Tiny Cup","Soppressata","Tomato Sauce"],
    honey_jalapeno: ["Chicken Breast","Jalapeno Peppers","Mozzarella Cheese","Olive Oil and Garlic","Organic Honey","Red Onions"],
    nacho: ["Chicken Breast","Green Peppers","Jalapeno Peppers","Mozzarella Cheese","Red Onions","Tomato Sauce"],
    salumi: ["Mozzarella Cheese","Pepperoni Tiny Cup","Sausage","Soppressata","Tomato Sauce"],
    toni_roni: ["Mozzarella Cheese","Pepperoni Tiny Cup","Tomato Sauce"],
    americana: ["Bacon","Mozzarella Cheese","Organic Fresh Mushrooms","Parmigiano","Tomato Sauce"],
    brando: ["Ground Beef","Hot Banana Peppers","Mozzarella Cheese","Organic Fresh Mushrooms","Red Onions","Tomato Sauce"],
    canadiana: ["Green Peppers","Mozzarella Cheese","Organic Fresh Mushrooms","Pepperoni-Original","Tomato Sauce"],
    capone: ["Chicken Breast","Mozzarella Cheese","Organic Fresh Mushrooms","Parmigiano","Pesto","Roasted Red Peppers"],
    gianni_ola: ["Bacon","Mozzarella Cheese","Organic Fresh Mushrooms","Pepperoni-Original","Tomato Sauce"],
    honolulu: ["Bacon","Ham","Mozzarella Cheese","Pineapple","Tomato Sauce"],
    mafioso: ["Black Olives","Green Olives","Hot Banana Peppers","Mozzarella Cheese","Sausage","Tomato Sauce"],
    meat_lover: ["Bacon","Ground Beef","Ham","Mozzarella Cheese","Pepperoni-Original","Sausage","Tomato Sauce"],
    sicilian: ["Bacon","Mozzarella Cheese","Red Onions","Sausage","Tomato Sauce"],
    soprano: ["Gorgonzola","Mozzarella Cheese","Soppressata","Sun Dried Tomatoes","Tomato Sauce"],
    thai_pie: ["BBQ Sauce","Chicken Breast","Mozzarella Cheese","Organic Fresh Mushrooms","Red Onions","Satay Sauce"],
    godfather: ["Bacon","Mozzarella Cheese","Organic Fresh Mushrooms","Parmigiano","Pepperoni-Original","Sausage","Tomato Sauce"],
    toni_pepperoni: ["Mozzarella Cheese","Pepperoni-Original","Tomato Sauce"],
    whole_wheat_meat: ["Mozzarella Cheese","Organic Fresh Mushrooms","Pepperoni-Original","Sausage","Tomato Sauce"],
    rapini: ["Chilli Flakes","Mozzarella Cheese","Olive Oil and Garlic","Parmigiano","Rapini"],
    double_truffle: ["Mozzarella Cheese","Organic Fresh Mushrooms","Truffle Oil"],
    margherita: ["Fresh Basil","Mozzarella Cheese","Tomato Sauce"],
    bianca: ["Artichokes","Extra-Virgin Olive Oil","Feta","Mozzarella Cheese","Parmigiano","Zucchini"],
    bomba: ["Feta","Gorgonzola","Mozzarella Cheese","Parmigiano","Tomato Sauce"],
    capri: ["Goat Cheese","Mozzarella Cheese","Organic Fresh Mushrooms","Pesto","Roasted Red Peppers","Tomato Sauce"],
    casino: ["Black Olives","Green Olives","Mozzarella Cheese","Roasted Red Peppers","Tomato Sauce"],
    diana: ["Organic Fresh Mushrooms","Pesto","Roasted Red Peppers","Tomatoes Herbed","Zucchini"],
    mediterranean: ["Black Olives","Feta","Green Peppers","Mozzarella Cheese","Tomato Sauce","Tomatoes Herbed"],
    primavera: ["Extra-Virgin Olive Oil","Mozzarella Cheese","Parmigiano","Roasted Red Peppers","Tomatoes Herbed","Zucchini"],
    sofia: ["Mozzarella Cheese","Tomato Sauce"],
    spinotta: ["Extra-Virgin Olive Oil","Mozzarella Cheese","Parmigiano","Ricotta","Spinach","Tomatoes Herbed"],
    sonny_like_it_hot: ["Hot Banana Peppers","Mozzarella Cheese","Roasted Red Peppers","Tomato Sauce","Tomatoes Herbed"],
    veggie_lover: ["Green Peppers","Mozzarella Cheese","Organic Fresh Mushrooms","Spinach","Tomato Sauce","Tomatoes Herbed"],
    fredo:  ["Extra-Virgin Olive Oil","Oregano","Potatoes","Rosemary"]
  }
  
  const pizzaArr = Object.keys(pizzaList);
  
  const pizzaIngredients = {
    sauces: ["Tomato Sauce","BBQ Sauce", "Extra-Virgin Olive Oil", "Frank's Red Hot", "Olive Oil and Garlic", "Organic Honey", "Pesto", "Satay Sauce", "Truffle Oil"],
    cheeses: ["Mozzarella Cheese","Feta", "Goat Cheese", "Gorgonzola", "Parmigiano", "Ricotta", "Swiss Cheese", "Vegan Cheese"],
    meats: ["Anchovies", "Bacon", "Chicken Breast", "Ground Beef", "Halal Pepperoni", "Ham", "Pepperoni-Original", "Pepperoni Tiny Cup", "Sausage", "Shredded Pepperoni", "Soppressata"],
    vegetables: ["Artichokes","Black Olives","Broccoli","Cherry Tomatoes","Fresh Basil","Green Olives","Green Peppers","Hot Banana Peppers","Jalapeno Peppers","Kalamata Olives","Organic Fresh Mushrooms","Pineapple","Potatoes","Rapini","Red Onions", "Roasted Red Peppers", "Spinach", "Sun Dried Tomatoes","Tomatoes Herbed","Zucchini"],
    herbs: ["Chilli Flakes","Fresh Garlic","Oregano","Rosemary"],
    plantBased: ["Plant-based Peppi","Plant-based Sausage Crumble"]
  }
  
  const toppingColors = {
    sauces: { contName: "sauce-box", color: "btn-orange"},
    cheeses: { contName: "cheese-box", color: "btn-yellow"},
    meats: { contName: "meat-box", color: "btn-red"},
    vegetables: {contName: "veg-box", color: "btn-lavender"},
    herbs: {contName: "herb-box", color: "btn-blue"},
    plantBased: {contName: "plant-box", color: "btn-pink"}
    
  };
  
  let chosenToppings = ["Mozzarella Cheese", "Tomato Sauce"];
  
  let score = -1;
  let totalQuestions = Object.keys(pizzaList).length;
  let currentQuestion = 0;
  let wrongFlag = 0;
  let showAnswerFlag = 0;
  let currentPizza = "";
  
  
  Object.keys(toppingColors).forEach(key => {
    createDiv(key);
  });
  
  
  
  //CREATING THE UI
  function createDiv(key) {
    
    pizzaIngredients[key].forEach(function (element) {
     
    const newBox = document.createElement("div");
    newBox.innerHTML = element;
    newBox.classList.add("ingredient");
    newBox.classList.add(toppingColors[key].color);
    
    if (element == "Mozzarella Cheese" || element == "Tomato Sauce"){
      newBox.classList.add("btn-selected");
      newBox.classList.add("staple-ingredient");
    }  
    document.querySelector(".topping-menu").appendChild(newBox);
    newBox.addEventListener("click", selectIngredient);  
   // document.getElementById(toppingColors[key].contName).appendChild(newBox);
   
    })
    
   
   }
  
  updateScore();
  updateQuestionNumber();
  pizzaPrompt();
  
  function selectIngredient(){
    if (this.classList.contains("btn-selected") == true) {
        this.classList.remove("btn-selected");
        }
    
    else { this.classList.add("btn-selected");
         }
    
    ingredientList();
  }
  
  //ADD SELECTED INGREDIENTS TO ARRAY
  function ingredientList(){
    let selectedToppings = [];
    document.querySelectorAll(".btn-selected").forEach((element) => selectedToppings.push(element.innerHTML));
    chosenToppings = selectedToppings.sort();
    if (showAnswerFlag==1){
      showAnswerHighlight();
    }

  }
  
  
  
  //CLICK LISTENER FOR TOP BUTTONS
  document.querySelectorAll(".top-button").forEach(element => {
    element.addEventListener("click", buttonSelection);
  });
  
  function buttonSelection() {
    if (this.id == "submit-button"){
      ingredientList();
      pizzaPrompt();
      return
    }
    else if (this.id == "show-answer"){
      wrongFlag = 1;
      showAnswerHighlight();
      return
    }
    
  }
  
  function showAnswerHighlight(){

   /* let responseBox = document.querySelector('#check-response')
    let correctAnswer =  pizzaList[currentPizza].toString();
    console.log(chosenToppings);
    responseBox.innerHTML = correctAnswer;
    */
  let correctAnswerArr = pizzaList[currentPizza];

  if (showAnswerFlag == 0){
  
    
    correctAnswerArr.forEach( ingredient => {
      let ingredientAnswer = document.createElement("div");
      ingredientAnswer.innerHTML = ingredient;
      ingredientAnswer.classList.add("check-response-answers");
      ingredientAnswer.dataset.topping = ingredient;
      document.querySelector("#check-response").appendChild(ingredientAnswer);
      showAnswerFlag = 1;
    })
  }
  console.log(chosenToppings);
  correctAnswerArr.forEach( item => {
    let currentTopping = document.querySelector(`[data-topping = "${item}"]`);
      if (chosenToppings.indexOf(item) > -1) {
        if(currentTopping.classList.contains("check-red")) {
          currentTopping.classList.remove("check-red")
        }
        currentTopping.classList.add("check-green");         
      }
      else if (chosenToppings.indexOf(item) == -1) {
        if (currentTopping.classList.contains("check-green")) {
          currentTopping.classList.remove("check-green");
        }
        currentTopping.classList.add("check-red");
      }    
    
  })
}
  
  function pizzaPrompt(){
    if (currentPizza == ""){
      getNewPizza();
    }
    
    else {
      pizzaInspection(currentPizza);
    }
  }
  
  //SELECTS NEW PIZZA FOR PROMPT
  function getNewPizza() {
    let pizzaNumber = getRandomInt(pizzaArr.length);
    currentPizza = pizzaArr[pizzaNumber];
    
    let pizzaDisplayNameCap = currentPizza.split("_");
    
  
    for (let i = 0; i < pizzaDisplayNameCap.length; i++) {
        pizzaDisplayNameCap[i] = pizzaDisplayNameCap[i][0].toUpperCase() + pizzaDisplayNameCap[i].substr(1);
  }
    
    pizzaDisplayName = pizzaDisplayNameCap.toString().replace(/,/g, ' ');
      
    document.querySelector(".pizza-name").innerHTML = pizzaDisplayName;
    document.querySelector(".ingredient")
    
  }
  
  //CHECK IF SELECTION MATCHES PIZZA
  
  function pizzaInspection(pizza) {
    let arr1 = pizzaList[pizza].toString();
    let arr2 = chosenToppings.toString();
    if (arr1 == arr2) {
      console.log("correct")
      document.querySelector(".pizza-name").classList.add("correct");
      //wait 5 secs turn pizza green and execute rest of commands
      setTimeout(function () {
     document.querySelector(".pizza-name").classList.remove("correct");
      
      deletePizza(pizza);
      updateScore();
      updateQuestionNumber();
      // ENDS QUIZ AFTER LAST PIZZA     
        if (currentQuestion > totalQuestions){
      endScreen();
      return
    }  
        else {  
          resetSelections();
          getNewPizza();
        }
    
     }, 1000); 
    }
    
    else {
     console.log("wrong");
     //shakes pizza name in red when wrong
     document.querySelector(".pizza-name").classList.add("error");
     setTimeout(function () {
     document.querySelector(".pizza-name").classList.remove("error");
     }, 500); 
      
     wrongFlag = 1; 
    }
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function resetSelections() {
    document.querySelectorAll(".btn-selected").forEach( (element) => {
        element.classList.remove('btn-selected');
    })
    //keep sauce cheese highlighted when resetting
    document.querySelectorAll(".staple-ingredient").forEach( ingredient => ingredient.classList.add('btn-selected'));  
    chosenToppings = ["Mozzarella Cheese", "Tomato Sauce"];
    //reset show answer
    
    document.querySelector("#check-response").innerHTML = "";
    showAnswerFlag = 0;
    
  }
  
  function deletePizza(currPizza){
  let index = pizzaArr.indexOf(currPizza);
  pizzaArr.splice(index, 1);
  console.log(pizzaArr.length);
  }
  
  function updateScore(){
    let scoreLocation = document.querySelector("#score")
    if (wrongFlag == 0){
      score += 1;
    }
    
    else if (wrongFlag == 1){
      wrongFlag = 0;
    }
    scoreLocation.innerHTML = "Correct: " + score;
    
  }
  
  function updateQuestionNumber(){
    currentQuestion += 1;
  
    let currentQuestionBox = document.querySelector("#current-question");
    currentQuestionBox.innerHTML = currentQuestion + " / " + totalQuestions;
    
  }
  
  function endScreen(){
    document.querySelector(".end-screen").style.display = "inline";
    document.querySelector(".end-score").innerHTML =  score + " / " + totalQuestions + " PIZZAS CORRECT!";
    
    document.querySelector('.reload').addEventListener("click", function(){
      location.reload();
    })
  }
  