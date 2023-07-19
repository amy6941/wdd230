function toggleOrder() {

  document.getElementById("show-order").classList.toggle("open");
  console.log('it works!');
  }
  
const x = document.getElementById("submitBtn")
x.onclick = toggleOrder;