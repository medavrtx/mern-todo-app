# MERN Stack To-Do App

![To-DoApp](/client/public/images/screenshot.png)

A single page to-do app built with mern stack.

## Setup

1. Clone repo
2. Create `config.env` file in server directory
3. Insert `MONGO_URI='mongodb+srv://<username>:<password>@<clustername>.jrwem.mongodb.net/todo-app?retryWrites=true&w=majority'` in `config.env` file
4. Create `.env.local` file in client directory
5. Insert `REACT_APP_API='http://localhost:5000'` in `.env.local` file
6. `npm i`

## Start Server

1. Go to root directory
2. `cd server`
3. `node app.js`

## Start Client Side

1. Open a new terminal
2. Go to root directory
3. `cd client`
4. `npm start`
