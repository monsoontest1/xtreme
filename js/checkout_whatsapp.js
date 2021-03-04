---
---
var text ='';
simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    text += encodeURI(item.get('id') +' Name - ' + item.get('name') + '\n');
    text += encodeURI(item.get('id') +' Qty - '+item.get('quantity') + '\n');
    text += encodeURI(item.get('id') +' Price - '+item.get('price') + '\n');
    text += encodeURI(item.get('id') +' Total - '+item.get('total') + '\n');
    text += encodeURI('----------------------------\n');	  
  });
});
text += '=================\n';
text +='Grand Total - '+simpleCart.grandTotal();
    // var text = document.querySelector('.whatsapp_checkout').innerHTML;
    var p = document.querySelector('.whatsapp_checkout');
    console.log(text);
    var a = document.createElement('a');
    var mobile = '{{ site.mobile }}';
    a.className = 'btn btn-success';
    a.href = 'https://wa.me/91'+ mobile +'?text='+text;
    a.innerHTML = 'Book through Whatsapp';
    p.append(a);
