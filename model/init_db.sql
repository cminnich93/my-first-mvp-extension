--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists users;
DROP TABLE if exists designs;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE users(
    id INT NOT NULL INT NOT NULL AUTO_INCREMENT, 
    email VARCHAR(40) NOT NULL, 
    password VARCHAR(40) NOT NULL, 
    organization VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE designs(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT FOREIGN KEY REFERENCES users(id),
    file_name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
    );

--
-- Insert some data
--
INSERT INTO users (email, password, organization)
VALUES ('cminnich93, cammie1031, CodeOp')
