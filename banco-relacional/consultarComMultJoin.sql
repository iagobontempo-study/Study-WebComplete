-- Apenas veio onde as duas tem conexão
select * from cidades c 
inner join prefeitos p 
on c.id = p.cidade_id;

-- Selecionando a tabela left
select * from cidades c 
left join prefeitos p 
on c.id = p.cidade_id;
-- Selecionando a tabela right
select * from cidades c 
right join prefeitos p 
on c.id = p.cidade_id;

--Full join apenas pege o right join e left join usando UNION

select * from cidades c 
left join prefeitos p 
on c.id = p.cidade_id
union
select * from cidades c 
right join prefeitos p 
on c.id = p.cidade_id;

--Agora full join com UNION ALL, gera duplicacoes 

select * from cidades c 
left join prefeitos p 
on c.id = p.cidade_id
union all
select * from cidades c 
right join prefeitos p 
on c.id = p.cidade_id;

