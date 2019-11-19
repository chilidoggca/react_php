This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
- Node, Yarn
- PHP, MySQLi
- MySQL

## Running on local machine
- Install project by running `yarn` in project root folder
- Start MySQL server using default port 3306 (e.g. `mysql -u root -p`)
- Start PHP server `php -S 127.0.0.1:8080`
- Set up MySQL database either with command-line or GUI of your choice (e.g. MySQLWorkbench)
    1. `CREATE DATABASE ReactPhpDemo;`
    2. `CREATE TABLE Email (
            id INT(11) PRIMARY_KEY NOT NULL AUTO_INCREMENT
            email VARCHAR(100) NOT NULL UNIQUE
        );`
- Start React app `yarn start`

