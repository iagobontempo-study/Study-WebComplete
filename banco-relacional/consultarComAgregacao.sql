-- Selecionando regiao, como regiao
-- a soma da populacao como Total
-- de estados
-- agrupados pela regiao 
-- ordenados pelo valor de total decrescente

select 
    regiao as 'Região', 
    sum(populacao) as 'Total'
from estados
GROUP BY regiao
order by Total desc

-- RESULTADO
--Região	    Total
---------------------
--Sudeste     	86.96
--Nordeste	    57.26
--Sul	        29.65
--Norte	        17.93
--Centro-Oeste	15.87

-- Consultando soma de toda população
select 
    sum(populacao) as 'Total'
from estados

-- consultando media de toda
select 
    avg(populacao) as 'Media'
from estados
