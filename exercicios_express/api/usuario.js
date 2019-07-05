function salvar(req, res) {
    res.send('Usuario > salvar')
}

function obter(req, res) {
    res.send('Usuario > obter')
}

// module.exports = { salvar: salvar, obter: obter}
// Se os nomes sao os mesmos, pode omitir a chave
module.exports = { salvar, obter}