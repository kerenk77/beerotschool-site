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
        <li><a href="zoom.html">Классы ZOOM</a></li>
        <li><a href="https://www.beerot.ru/%d1%86%d0%b4%d0%b0%d0%ba%d0%b0-%d0%bf%d0%be%d0%b6%d0%b5%d1%80%d1%82%d0%b2%d0%be%d0%b2%d0%b0%d1%82%d1%8c-%d0%b1%d0%b5%d0%b5%d1%80%d0%be%d1%82-%d0%b8%d1%86%d1%85%d0%b0%d0%ba">Оплата</a></li>
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
