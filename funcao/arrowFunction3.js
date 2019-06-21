let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const Obj = {}
comparaComThis = comparaComThis.bind(Obj)
comparaComThis(global)
comparaComThis(Obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(Obj)
comparaComThisArrow(Obj)