DROP DATABASE feedback;
CREATE DATABASE feedbacks;
USE feedbacks;

CREATE TABLE feedbacks(
    feedback_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    feedback VARCHAR(255) NOT NULL
);
INSERT INTO feedbacks VALUES (null, 'Joao Silva', 'joao.silva@email.com', 'Excelente servico!', now());
INSERT INTO  feedbacks VALUES (null, 'Maria Oliveira', 'maria.oliveira@email.com', 'Muito bom, mas poderia melhorar a comunicacao.', now());

Describe feedbacks;
SELECT * FROM feedbacks;
