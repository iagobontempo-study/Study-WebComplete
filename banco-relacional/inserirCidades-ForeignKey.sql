-- Para inserir é nescessario o ID, senão nao irá adicionar

insert into cidades (nome, area, estado_id)
values ('Campinas', 795, 26)

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 20)


-- Vai inserir selecionando um id em estados onde a sigla seja PE
insert into cidades (nome, area, estado_id)
values ('Caruaru', 920.6, (select id from estados where sigla = 'PE'))

insert into cidades (nome, area, estado_id)
values ('Goiania', 728.8, (select id from estados where sigla = 'GO'))