CREATE DATABASE IF NOT EXISTS tasksdb_tasks;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    primary key (id)
);

INSERT INTO tasks (title, description) VALUES
('task 1', 'some description')
('task 2', 'some description 2'),
