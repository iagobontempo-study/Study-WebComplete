-- Momento critico NUNCA ESQUECER O WHERE, senão irá atualizar todos os itens da tabela

-- Update no campo nome, com 'Maranhão', onde a sigla é 'MA' (usando 'MA' pois sabemos que é unico no exemplo)
update estados
set nome = 'Maranhão'
WHERE sigla = 'MA';

-- Dando update em 2 colunas
update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'