# Beerot School — Static Site + Admin (Decap CMS)

## Структура
- `/index.html` — страница "О школе" (контент из `data/school.json`)
- `/enroll.html` — страница записи (форма Netlify)
- `/schedule.html` — расписание (iframe, берёт URL из `data/schedule.json`)
- `/zoom.html` — список Zoom-комнат (из `data/zoom.json`)
- `/admin/` — админка (Decap CMS / Netlify CMS)
- `/data/*.json` — редактируемые данные
- `/assets/uploads` — медиа-файлы

## Деплой на Netlify (рекомендовано)
1. Создайте репозиторий на GitHub и загрузите сюда все файлы.
2. Подключите репозиторий на Netlify: New Site from Git -> GitHub -> ваш репозиторий.
3. Зайдите в **Site settings → Identity** и включите Identity.
4. Включите **Registration**: Invite only (и пригласите себя).
5. Включите **Git Gateway**.
6. Откройте `/admin` на вашем сайте, войдите по приглашению и редактируйте контент.

Форма на странице `/enroll.html` будет работать как **Netlify Forms** (заявки видны в Netlify → Forms).

## Кастомный домен
В Netlify добавьте домен `beerotschool.com` и следуйте подсказкам по DNS. После применения DNS сайт будет доступен на вашем домене.

