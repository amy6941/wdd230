function toggleMenu() {
    document.getElementById('navigation').classlist.toggle('open');
  }
  const x = document.getElementById('hamButton');
  x.onclick = toggleMenu;