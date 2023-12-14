--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS designs;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT, 
    email VARCHAR(200) NOT NULL, 
    password VARCHAR(200) NOT NULL, 
    organization VARCHAR(200),
    PRIMARY KEY (id)
    );

CREATE TABLE designs(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    file_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

--
-- Insert some data
--
INSERT INTO users (email, password, organization)
VALUES ('cminnich93', 'cammie1031', 'CodeOp')
