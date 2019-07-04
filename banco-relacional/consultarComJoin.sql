-- Selecionando tudo de tabelas diferentes e vinculando
select * from estados, cidades
where estados.id = cidades.estado_id

-- Selecionando com apelido cidade, estado e regiao das tabelas estados e cidades
-- onde a coluna ID na tabela estados for igual a coluna estado_id na tabela cidades. 
-- (apelidos criados no FROM)
select
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from estados e, cidades c
where e.id = c.estado_id;

-- Mesma coisa, mas agora com INNER JOIN
select
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from estados e
inner join cidades c
on e.id = c.estado_id;