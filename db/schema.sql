CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT,
burger_name VARCHAR(258),
devoured BOOLEAN,
PRIMARY KEY (id)
);