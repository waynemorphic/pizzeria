let d = document;
console.log("I am the pizza master");

// Business Logic
function PizzaOrder(size, crust, toppings, prices){
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.Prices = prices; // Added prices parameter for the pizza prices
}


//Here we want to return the full order of the customer in one line
PizzaOrder.prototype.customerOrder = function(){
    return this.pizzaSize + this.pizzaCrust + this.pizzaToppings + this.Prices;
}


// UI logic
$(document).ready(function(){
    $('.btn').click(function(){

        //Here we grab the user selections in jquery
        let choosenPizzaSize = $('#size option:selected').val();
        let choosenPizzaCrust = $('#crust option:selected').val();
        let choosenPizzaToppings = $('#toppings option:selected').val();

        let choosenPizza = new PizzaOrder(choosenPizzaSize, choosenPizzaCrust, choosenPizzaToppings);

        //Here we define the sizes, crust types and toppings
        function pizzaPrices (prices){
            let Size = {
                'Small': 550,
                'Medium': 750,
                'Large': 1350,
            }
            let Crust = {
                'Crispy': 350,
                'Stuffed': 400,
                'GlutenFree': 350
            }
            let Toppings = {
                'Cheese': 150,
                'Pineapple': 100,
                'Meaty': 200,
            }
            let choosenPizzaSize = $('#size option:selected').val();
            let choosenPizzaCrust = $('#crust option:selected').val();
            let choosenPizzaToppings = $('#toppings option:selected').val();


            if(choosenPizzaSize ===""){
                alert("Select Pizza Size")
                return;
            }

            let sp=Size[choosenPizzaSize]
            let cp=Crust[choosenPizzaCrust] || 0 // Here, if customer does not choose anything, it returns false
            let tp=Toppings[choosenPizzaToppings]||0 //That is, if one is true or the other is false
            
            console.log(sp+tp+cp)
            
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Small + Crust.Crispy + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Small + Crust.Crispy + Toppings.Pineapple)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Small + Crust.Crispy + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Small + Crust.Stuffed + Toppings.Pineapple)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Small + Crust.Stuffed + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Small + Crust.Stuffed + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Small + Crust.Gluten-Free + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Small + Crust.GlutenFree + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Small' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Small + Crust.GlutenFree + Toppings.Pineapple)
                return prices;
            }

            //Medium size pizzas
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Medium + Crust.Crispy + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Medium + Crust.Crispy + Toppings.Pineapple)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Medium + Crust.Crispy + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Medium + Crust.Stuffed + Toppings.Pineapple)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Medium + Crust.Stuffed + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Medium + Crust.Stuffed + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Medium + Crust.GlutenFree + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Small + Crust.GlutenFree + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Medium' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Medium + Crust.GlutenFree + Toppings.Pineapple)
                return prices;
            }

            //large size pizzas
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Large + Crust.Crispy + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Large + Crust.Crispy + Toppings.Pineapple)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Crispy' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Large + Crust.Crispy + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Large + Crust.Stuffed + Toppings.Pineapple)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Large + Crust.Stuffed + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Stuffed' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Large + Crust.Stuffed + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Cheese'){
                let prices = (Size.Large + Crust.GlutenFree + Toppings.Cheese)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Meaty'){
                let prices = (Size.Large + Crust.GlutenFree + Toppings.Meaty)
                return prices;
            }
            if (choosenPizzaSize == 'Large' && choosenPizzaCrust == 'Gluten-Free' && choosenPizzaToppings == 'Pineapple'){
                let prices = (Size.Large + Crust.GlutenFree + Toppings.Pineapple)
                return prices;
            }

    }
    // console.log(pizzaPrices())
    pizzaPrices()
            
            

           
           
       



        $('p#order-display').append(choosenPizza.customerOrder()) //Here, we will display the customer's order in the website
        // console.log(choosenPizza.customerOrder());
       
        $('#size option:selected').val();
        $('#crust option:selected').val();
        $('#toppings option:selected').val();
    });

});


// Business Logic


        

       







