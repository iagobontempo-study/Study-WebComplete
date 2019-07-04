-- Selecionando TUDO dentro de estados 
select * from estados

-- Selecionando apenas as colunas nome e sigla dentro de estados 
select nome, sigla from estados

-- Se quiser inverter... 
-- Selecionando apenas as colunas nome e sigla dentro de estados 
select sigla, nome from estados

-- Selecionando e colocando nome como "Nome do estado"
select sigla, nome as 'Nome do Estado' from estados

-- Trazendo os dados onde a regiao é igual a SUL
select sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul'

-- Trazendo dados onde população e maior ou igual a 10
select nome, regiao from estados
where populacao >= 10

-- Ordenando crescente
select nome, regiao from estados
where populacao >= 10
order by populacao

-- Ordenando decrescente
select nome, regiao from estados
where populacao >= 10
order by populacao desc