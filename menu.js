document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  header.innerHTML = `
    <a href="index.html" class="logo"><img src="logo.png" alt="Логотип"></a>
    <nav>
      <div class="hamburger">
        <div></div><div></div><div></div>
      </div>
      <ul class="nav-links">
        <li><a href="enroll.html">Запись</a></li>
        <li><a href="schedule.html">Расписание</a></li>
        <li><a href="contact.html">Контакты</a></li>
        <li><a href="index.html">О школе</a></li>
      </ul>
    </nav>
  `;

  // Мобильное меню
  const hamburger = header.querySelector('.hamburger');
  const navLinks = header.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
