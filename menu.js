// menu.js
document.getElementById('siteHeader').innerHTML = `
  <a href="index.html" class="logo"><img src="logo.png" alt="Логотип" style="height:50px;"></a>
  <nav>
    <div class="hamburger" onclick="document.querySelector('.nav-links').classList.toggle('active')">
      <div></div><div></div><div></div>
    </div>
    <ul class="nav-links">
      <li><a href="enroll.html">Запись</a></li>
      <li><a href="schedule.html">Расписание</a></li>
      <li><a href="contact.html">Контакты</a></li>
      <li><a href="index.html#about">О школе</a></li>
    </ul>
  </nav>
`;

// Мобильное меню
document.querySelector('.hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});
