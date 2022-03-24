let d = document;
console.log("I am the pizza master");

// Business Logic
function PizzaOrder(size, crust, toppings, totalPrice){
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.totalPrice = totalPrice; // Added prices parameter for the pizza prices
}


//Here we want to return the full order of the customer in one line
PizzaOrder.prototype.customerOrder = function(){
    return this.pizzaSize + this.pizzaCrust + this.pizzaToppings + this.Prices;
}



// UI logic
$(document).ready(function(){
$('#btn').click(function(){
    $('.order-table').show()
});
});


d.querySelector('#btn').addEventListener('click',pizzaPrices)


//Function for calculating the price of the pizzas when customer makes an order
    function pizzaPrices (p){ //Start of pizza Function
        p.preventDefault();

        let Size = {
            'Small': 550,
            'Medium': 750,
            'Large': 1350,
        }
        let Crust = {
            'Crispy': 350,
            'Stuffed': 400,
            'Gluten-Free': 350
        }
        let Toppings = {
            'Cheese': 150,
            'Pineapple': 100,
            'Meaty': 200,
        }
        //Targeting the HTML selectors

        let choosenPizzaSize = d.querySelector('#size').value;
        let choosenPizzaCrust = d.querySelector('#crust').value;
        let choosenPizzaToppings = d.querySelector('#toppings').value;

        //Conditional statements for selected and empty orders

        let sizePrice=Size[choosenPizzaSize]
        let crustPrice=Crust[choosenPizzaCrust] || 0 // Here, if customer does not choose anything, it returns false
        let toppingsPrice=Toppings[choosenPizzaToppings]|| 0 //That is, if one is true or the other is false

        
        let totalPrice = sizePrice + crustPrice + toppingsPrice;
        console.log(totalPrice);

        //let orderSummary = ('Size: ' + choosenPizzaSize + ' Price: ' + sizePrice + ' Crust: ' + choosenPizzaCrust + ' Price: ' + crustPrice + ' Toppings: ' + choosenPizzaToppings + ' Price' + toppingsPrice + ' Total Order Price: ' + totalPrice)
        //console.log(orderSummary)

        //Add the values from the program into the order summary table 
        let sz = document.querySelector('#sz'); //size
        sz.append(choosenPizzaSize);

        let cr = document.querySelector('#cr'); //crust
        cr.append(choosenPizzaCrust)

        let tps = document.querySelector('#tps'); //toppings
        tps.append(choosenPizzaToppings);

        let op = document.querySelector('#total'); //order price/total
        op.append(totalPrice);

        //let customerOrderSummary = <tr> + "<th #='size'>" + choosenPizzaSize + ' -  ' + sizePrice + "</th>" + "<th #='crust'>" + choosenPizzaCrust + ' -  ' + crustPrice + "</th>" + "<th #='toppings'>" + choosenPizzaToppings + ' -  ' + toppingsPrice + "</th>" + "<th #='order-total'>" + totalPrice + "</th>" + '</tr>';

        //return customerOrderSummary.table;   
    

    //Adding a delivery location cost
    $(document).ready(function(){
        
            $('#btnn').show();
            $('#delivery').show();
            $('#btnn').click(function(){        
      
        });
    });

    d.querySelector('#btnn').addEventListener('click', deliveryCost)

    function deliveryCost(){ //start of delivery location function
        let lctn = d.querySelector('#location').value;
        if (lctn !== ''){
            let cost = totalPrice + 200;

            let lct = d.querySelector('#lct');
            lct.append(lctn);

            let ortc = d.querySelector('#order-total');
            ortc.append(cost);

            console.log(cost);

            return cost;
        } else if (lctn == ''){
            return totalPrice;
        }

        
        

    }// End of second function

} // End of first function

   


        

       







