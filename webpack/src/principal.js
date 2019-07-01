import Pessoa from './pessoa'
import "./modulos/moduloA"
import './assets' // Procura dentro da pasta assets pelo index.js, no qual estará referenciando os outros arquivos



const atendente = new Pessoa
console.log(atendente.cumprimentar())