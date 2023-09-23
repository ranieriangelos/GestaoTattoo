CREATE TABLE saidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fornecedor VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(255),
    forma_de_pagamento VARCHAR(255),
    notas TEXT
);
