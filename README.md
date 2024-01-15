# Telegram Bot для подготовки к собеседованию по frontend-разработке

## Цель проекта
Автоматизировать процесс подготовки и повторения основных тем по фронтенду для начинающих разработчиков

## Функционал
* бот умеет задавать вопросы по 4 темам: HTML, CSS, JS, React
* вопросы двух типов: открытые и закрытые (с вариантами ответов)

## Стэк
  <img src="https://img.shields.io/badge/Node.js-blue?style=for-the-badge&logo=Node.js&logoColor=white" alt="Node.js Badge" title="NodeJS" alt="NodeJS" />&nbsp;
  
Бот написан с ипользованием библиотек:
* [grammy](https://grammy.dev/)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Ссылка на бот
<img src="https://cdn-icons-png.flaticon.com/128/906/906377.png" height="25" align="center" alt="Telegram" title="Telegram" style="right" /> https://t.me/QuizFrontendBot

## Запуск проекта на локальном ПК
* склонировать репозиторий `git clone git@github.com:SvetAlexa/quiz-frontend-bot.git` или скачать архив
* перейти в папку проекта `quiz-frontend-bot`  
* установить зависимости  `npm install`
* в корне проекта создать файл .env и скопировать туда ключ от вашего бота ([полученный от BotFather](https://core.telegram.org/bots/tutorial))  
  `BOT_API_KEY=%YOUR_KEY%`    
* запустить бот `npm run start`
