# stacksofwax-be

## 1. Technologies used: 
- NodeJS 
- Express
- MySQL

External libraries:
- crypto-js
- jsonwebtoken 
- http-errors
- joi

## 2. How to install and run the project
### 2.1 Require tool
- [Nodejs](https://nodejs.org/en) version: >= v16.0.0
- [Xampp](https://www.apachefriends.org/download.html)
## 2.2 Setup database
- Step 1: install Xampp + mysql
- Step 2: open Xampp and start Apache service and Mysql Service
- Step 3: open [phpMyAdmin](http://localhost/phpmyadmin/) and signup with root account
- Step 4: create db name 40381633
- Step 5: import sql file "stacksofwax 020523.sql" into database 40381633
## 2.3 How to run project
- Step 1: Check and make sure that FE_DOMAIN on .env corresponds to FE domain and port of frontend server (stacksofwax-fe). If it doesn't, copy the correct FE domain and port and replace this key. 
- Step 2: Check and replace DB info in .env file: MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_PORT if necessary
- Step 3: run command "npm i" to install dependencies
- Step 4: run command "npx nodemon app.js" or "npm run dev" to start project. Application will run on port 4000.