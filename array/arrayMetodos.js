const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // Remove ultimo elemento
console.log(pilotos)

pilotos.push("Verstappen") // Adiciona elemento ao fim
console.log(pilotos)

pilotos.shift() // Remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift("Senna") // Adiciona primeiro elemento na lista
console.log(pilotos)

// Splice > adiciona e remove

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir de um indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0, 3) // novo array de um intervalo
console.log(algunsPilotos2)


