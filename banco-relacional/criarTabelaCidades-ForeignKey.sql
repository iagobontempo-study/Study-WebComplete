-- Esta tabela tem uma foreign key, referenciada na ultima linha

create table if not exists cidades (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estado_id int unsigned not null, 
    area decimal(10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
);


-- Criando tabela apenas para poder dropa-la
create table if not exists teste (
    id int unsigned not null auto_increment primary key
);

-- Removendo tabela se ela existir
drop table if exists teste;