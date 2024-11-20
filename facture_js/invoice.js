const quantity = document.querySelectorAll(".quantity");
const price = document.querySelectorAll("unitPrice");
const itemTotal =  document.querySelectorAll(".itemTotal");

itemTotal.forEach(function(total){
    for(let i=0;i<quantity.length;i++){
       return total.value = quantity[i].value*price[i].value;
    }
});

console.log(itemTotal);


