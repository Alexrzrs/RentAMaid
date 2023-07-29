CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    userrole VARCHAR(255)
);



INSERT INTO users (id, email, password, firstname, lastname, userrole)
VALUES (1, 'admin@mail.com', '12345678', 'Efren', 'Ruiz', 'admin');

INSERT INTO users (id, email, password, firstname, lastname, userrole)
VALUES (2, 'cliente@mail.com', '12345678', 'Oscar', 'Cortes', 'client');

INSERT INTO users (id, email, password, firstname, lastname, userrole)
VALUES (3, 'cleaner@mail.com', '12345678', 'Dulce', 'De Nuez', 'cleaner');

INSERT INTO users (id, email, password, firstname, lastname, userrole)
VALUES (4, 'admin2@mail.com', '12345678', 'Jose', 'Villafranca', 'admin');

