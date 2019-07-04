-- Criando tabela estado
-- id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- autoincrementavel
--     nome VARCHAR(45) NOT NULL, --VARCHAR(aqui fica o tamanho maximo)
--     sigla VARCHAR(2) NOT NULL,
--     regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL, -- poderia ser feito outra tabela para isso
--     populacao DECIMAL(5,2), -- decimal de 5 digitos e 2 digitos de ponto flutuante
--     PRIMARY KEY (id), --escolhendo chave primaria
--     UNIQUE KEY(nome), -- escolhendo as chaves que não podem ter duplicidade (nao podera existir nomes iguais)
--     UNIQUE KEY(sigla) -- escolhendo as chaves que não podem ter duplicidade (nao podera existir siglas iguais)
-- );

create table estados (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(45) NOT NULL, 
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL, 
    populacao DECIMAL(5,2), 
    PRIMARY KEY (id), 
    UNIQUE KEY(nome),
    UNIQUE KEY(sigla)
);