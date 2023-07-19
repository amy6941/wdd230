function toggleContact() {

    document.getElementById("contact").classList.toggle("open");
    console.log('it works!');
  }
    
  const t = document.getElementById("today")
  t.onclick = toggleContact;