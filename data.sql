//creacion de tablas de la base de datos

CREATE TABLE estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    edad INT,
    grado VARCHAR(255)
);

CREATE TABLE profesores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    especialidad VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255)
);



//inserccion de datos a la base de datos

INSERT INTO estudiantes (nombre, edad, grado) VALUES
('Estudiante 1', 18, 'Primero'),
('Estudiante 2', 17, 'Segundo'),
('Estudiante 3', 16, 'Tercero'),
('Estudiante 4', 15, 'Cuarto'),
('Estudiante 5', 17, 'Quinto'),
('Estudiante 6', 16, 'Sexto'),
('Estudiante 7', 15, 'Séptimo'),
('Estudiante 8', 17, 'Octavo'),
('Estudiante 9', 16, 'Noveno'),
('Estudiante 10', 15, 'Décimo');

INSERT INTO profesores (nombre, especialidad, email) VALUES
('Profesor 1', 'Especialidad 1', 'profesor1@example.com'),
('Profesor 2', 'Especialidad 2', 'profesor2@example.com'),
('Profesor 3', 'Especialidad 3', 'profesor3@example.com'),
('Profesor 4', 'Especialidad 4', 'profesor4@example.com'),
('Profesor 5', 'Especialidad 5', 'profesor5@example.com'),
('Profesor 6', 'Especialidad 6', 'profesor6@example.com'),
('Profesor 7', 'Especialidad 7', 'profesor7@example.com'),
('Profesor 8', 'Especialidad 8', 'profesor8@example.com'),
('Profesor 9', 'Especialidad 9', 'profesor9@example.com'),
('Profesor 10', 'Especialidad 10', 'profesor10@example.com');


INSERT INTO cursos (nombre, descripcion) VALUES
('Curso 1', 'Descripción del curso 1'),
('Curso 2', 'Descripción del curso 2'),
('Curso 3', 'Descripción del curso 3'),
('Curso 4', 'Descripción del curso 4'),
('Curso 5', 'Descripción del curso 5'),
('Curso 6', 'Descripción del curso 6'),
('Curso 7', 'Descripción del curso 7'),
('Curso 8', 'Descripción del curso 8'),
('Curso 9', 'Descripción del curso 9'),
('Curso 10', 'Descripción del curso 10');