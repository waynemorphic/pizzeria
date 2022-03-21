let d = document;
console.log("I am the pizza master");

// Business Logic
function PizzaOrder(size, crust, toppings){
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
}

//Here we want to return the full order of the customer in one line
PizzaOrder.prototype.customerOrder = function(){
    return this.pizzaSize + this.pizzaCrust + this.pizzaToppings;
}


// UI logic
$(document).ready(function(){
    $('.btn').click(function(){

        //Here we grab the user selections in jquery
        let choosenPizzaSize = $('#size option:selected').val();
        let choosenPizzaCrust = $('#crust option:selected').val();
        let choosenPizzaToppings = $('#toppings option:selected').val();

        //Here we define the sizes, crust types and toppings
        

        let choosenPizza = new PizzaOrder(choosenPizzaSize, choosenPizzaCrust, choosenPizzaToppings);

        $('p#order-display').append(choosenPizza.customerOrder()) //Here, we will display the customer's order in the website
        console.log(choosenPizza.customerOrder());
       
        $('#size option:selected').val();
        $('#crust option:selected').val();
        $('#toppings option:selected').val();
    });

});


// Business Logic


        

       







