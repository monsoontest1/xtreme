simpleCart({

  checkout: {
    // type: "PayPal",
    // email: "you@yours.com",
  },

  // tax: 0.075,
  currency: "INR",

  cartStyle: "table",

  cartColumns: [
    { attr: "name" , label: "Name" } ,
    { attr: "price" , label: "Price", view: 'currency' } ,
   // { attr: "size" , label: "Size" } ,
   // { attr: "color" , label: "Color" } ,
    { view: "decrement" , label: false , text: "- 1" } ,
    { attr: "quantity" , label: "Qty" } ,
    { view: "increment" , label: false , text: "+ 1" } ,
    { attr: "total" , label: "SubTotal", view: 'currency' } ,
    { view: "remove" , text: "Remove" , label: false }
  ]

});

simpleCart.currency({
  code: "INR",
  name: "Indian Rupee",
  symbol: "&#8377;",
  delimiter: " ",
  decimal: ",",
  after: true,
  accuracy: 0
});

//* Refresh cart once simpleCart is ready to listen.
simpleCart.ready(function() {
  simpleCart.update();
});
