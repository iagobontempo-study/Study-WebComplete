insert into empresas 
    (nome, cnpj)
values 
    ('Bradesco', 9553656599),
    ('Vale', 87153656766),
    ('Cielo', 43153656700);

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values 
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);
