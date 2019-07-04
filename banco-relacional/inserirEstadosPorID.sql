-- Inserindo estado colocando setando um ID
insert into estados (id, nome, sigla, regiao, populacao)
values(1000, 'Novo', 'NV', 'Sul', 2.54)

-- Ao inserir outro item (sem usar o id), ele usará o ultimo id da lista como parametro, 
-- ou seja o proximo a ser colocado terá o id 1001
insert into estados (nome, sigla, regiao, populacao)
values('Mais Novo', 'MN', 'Norte', 2.51)
