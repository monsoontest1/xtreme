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
    var p = document.querySelector('.email_checkout');
    console.log(text);
    var a = document.createElement('a');
    var email = '{{ site.email }}';
    a.className = 'btn btn-info';
    a.href = 'mailto:'+email +'?subject=Order%20Recieved&body='+text;
    a.innerHTML = 'Book through Email';
    p.append(a);


