function totalcost() {
  y = parseFloat(document.getElementById("f_input").value);
  a = (150.95 * y).toFixed(2);
  document.getElementById("ftotal").innerHTML = a;

  x = parseFloat(document.getElementById("m_input").value);
  b = (180.95 * x).toFixed(2);
  document.getElementById("mtotal").innerHTML = b;

  var total = parseFloat(a + b).toFixed(2);
  document.getElementById("total").innerHTML = total;
}
